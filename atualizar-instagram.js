/**
 * Script para baixar as 9 ultimas postagens do Instagram do @marialicemirianbolosedoces
 * Acessa Instagram diretamente com Puppeteer + Stealth (sem login)
 *
 * Como usar:
 *   node atualizar-instagram.js
 */

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const fs = require('fs');
const path = require('path');

const PROFILE = 'marialicemirianbolosedoces';
const OUTPUT_DIR = path.join(__dirname, 'imagens', 'instagram');
const POSTS_JSON = path.join(OUTPUT_DIR, 'posts.json');
const MAX_POSTS = 9;

async function downloadImage(browser, imgSrc, dest) {
  const imgPage = await browser.newPage();
  try {
    const response = await imgPage.goto(imgSrc, { waitUntil: 'load', timeout: 15000 });
    if (response && response.ok()) {
      const buffer = await response.buffer();
      fs.writeFileSync(dest, buffer);
    } else {
      throw new Error('HTTP ' + (response ? response.status() : 'null'));
    }
  } finally {
    await imgPage.close();
  }
}

async function extractPosts(page, max) {
  return await page.evaluate((maxPosts) => {
    const article = document.querySelector('article') || document.querySelector('main');
    if (!article) return [];
    const allImgs = article.querySelectorAll('img');
    const results = [];
    const seen = new Set();
    for (const img of allImgs) {
      const src = img.getAttribute('src') || '';
      if (!src || src.includes('profile') || src.includes('44x44') || src.includes('150x150') || src.includes('s150x150')) continue;
      if (seen.has(src)) continue;
      seen.add(src);
      const link = img.closest('a');
      results.push({
        imageUrl: src,
        postUrl: link ? link.getAttribute('href') || '' : '',
        alt: img.getAttribute('alt') || ''
      });
      if (results.length >= maxPosts) break;
    }
    return results;
  }, max);
}

(async () => {
  console.log('Abrindo navegador...');
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    console.log('Acessando perfil @' + PROFILE + '...');
    await page.goto('https://www.instagram.com/' + PROFILE + '/', {
      waitUntil: 'networkidle2',
      timeout: 45000
    });

    await new Promise(r => setTimeout(r, 4000));

    // Fechar modais
    try {
      await page.evaluate(() => {
        const btns = document.querySelectorAll('button');
        for (const btn of btns) {
          const text = btn.textContent || '';
          if (text.includes('Agora não') || text.includes('Not Now') || text.includes('Decline')) {
            btn.click(); break;
          }
        }
      });
      await new Promise(r => setTimeout(r, 1000));
    } catch(e) {}

    try {
      await page.evaluate(() => {
        const btns = document.querySelectorAll('button');
        for (const btn of btns) {
          if (btn.querySelector('svg') && btn.closest('[role="dialog"]')) {
            btn.click(); break;
          }
        }
      });
      await new Promise(r => setTimeout(r, 1000));
    } catch(e) {}

    // Scroll para carregar posts
    await page.evaluate(() => window.scrollBy(0, 800));
    await new Promise(r => setTimeout(r, 3000));

    // Extrair posts com retry
    console.log('Extraindo posts...');
    let posts = [];
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        posts = await extractPosts(page, MAX_POSTS);
        if (posts.length > 0) break;
      } catch(e) {
        console.log('Tentativa ' + (attempt + 1) + ' falhou: ' + e.message);
      }
      await new Promise(r => setTimeout(r, 2000));
      await page.evaluate(() => window.scrollBy(0, 400));
      await new Promise(r => setTimeout(r, 2000));
    }

    console.log('Encontrados ' + posts.length + ' posts.');

    if (posts.length === 0) {
      await page.screenshot({ path: path.join(OUTPUT_DIR, 'debug.png') });
      console.log('Nenhum post encontrado. Screenshot salvo em debug.png');
      console.log('URL: ' + page.url());
      console.log('Titulo: ' + await page.title());
      await browser.close();
      return;
    }

    console.log('Baixando imagens...');
    const postsData = [];

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const filename = 'post_' + (i + 1) + '.jpg';
      const filepath = path.join(OUTPUT_DIR, filename);

      try {
        await downloadImage(browser, post.imageUrl, filepath);
        const stats = fs.statSync(filepath);
        console.log('  [' + (i + 1) + '/' + posts.length + '] ' + filename + ' (' + Math.round(stats.size / 1024) + 'KB)');

        postsData.push({
          image: 'imagens/instagram/' + filename,
          postUrl: post.postUrl ? 'https://www.instagram.com' + post.postUrl : 'https://www.instagram.com/' + PROFILE + '/',
          alt: post.alt || 'Post do @' + PROFILE,
          index: i + 1
        });
      } catch (err) {
        console.error('  [' + (i + 1) + '] Erro: ' + err.message);
      }
    }

    // Salvar metadados JSON
    fs.writeFileSync(POSTS_JSON, JSON.stringify({
      profile: PROFILE,
      updatedAt: new Date().toISOString(),
      posts: postsData
    }, null, 2));

    // Atualizar inline no index.html
    const indexPath = path.join(__dirname, 'index.html');
    let html = fs.readFileSync(indexPath, 'utf8');
    const startMarker = '/* INSTAGRAM-POSTS-START */';
    const endMarker = '/* INSTAGRAM-POSTS-END */';
    const startIdx = html.indexOf(startMarker);
    const endIdx = html.indexOf(endMarker);

    if (startIdx !== -1 && endIdx !== -1) {
      const jsData = postsData.map(p => ({ image: p.image, postUrl: p.postUrl, alt: 'Post do @' + PROFILE }));
      const newBlock = startMarker + '\n  var instagramPosts = ' + JSON.stringify(jsData) + ';\n  ' + endMarker;
      html = html.substring(0, startIdx) + newBlock + html.substring(endIdx + endMarker.length);
      fs.writeFileSync(indexPath, html);
      console.log('\nindex.html atualizado com ' + postsData.length + ' posts.');
    }

    console.log('Sucesso! ' + postsData.length + ' imagens baixadas.');

  } catch (err) {
    console.error('Erro:', err.message);
    try {
      const pages = await browser.pages();
      if (pages.length > 0) {
        await pages[0].screenshot({ path: path.join(OUTPUT_DIR, 'debug.png') });
      }
    } catch(e) {}
  } finally {
    await browser.close();
  }
})();
