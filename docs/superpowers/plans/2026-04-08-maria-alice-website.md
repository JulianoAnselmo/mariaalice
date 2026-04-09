# Maria Alice & Mirian — Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, high-conversion single-page website for a traditional bakery in Itapolis-SP, with WhatsApp as the sole conversion channel.

**Architecture:** Single `index.html` file containing embedded CSS (in `<style>`), a `DADOS` JS object with all catalog data (in first `<script>`), semantic HTML sections, and JS for interactivity (in second `<script>` at end of body). No build tools, no dependencies beyond Google Fonts.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, scroll-snap), vanilla JS, Google Fonts (Playfair Display + Inter)

**File structure:**
- `index.html` — the entire website (head + style + data + html + script)

**Important context for all tasks:**
- This is a SINGLE FILE project. All CSS goes in the `<style>` tag in `<head>`. All JS goes in `<script>` tags.
- The `DADOS` object is the single source of truth for all catalog data. The HTML rendering reads from it.
- WhatsApp number: `5516997126577` (formatted: `(16) 99712-6577`)
- WhatsApp link format: `https://wa.me/5516997126577?text=ENCODED_MESSAGE`
- All copy is in Brazilian Portuguese
- Design tokens: see CSS custom properties in Task 1

---

### Task 1: Foundation — HTML shell, meta tags, CSS design system, DADOS object

Create `index.html` with the complete `<head>` (meta, SEO, Open Graph, JSON-LD, Google Fonts, full CSS), the `DADOS` object with ALL catalog data, and an empty `<body>` shell with section placeholders.

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html with head, CSS, and DADOS**

Create `index.html` with this content. This is the foundation — everything else builds on it.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maria Alice & Mirian | Bolos e Doces em Itápolis-SP | Encomendas para Festas</title>
  <meta name="description" content="Há 25 anos preparando bolos, doces finos, bombons e trufas em Itápolis-SP. Encomendas para casamentos, aniversários e eventos. Faça seu pedido pelo WhatsApp!">
  <meta name="keywords" content="bolos em Itápolis, doces para festa em Itápolis, bolo de aniversário Itápolis, doces finos Itápolis, encomenda de bolo Itápolis, bolos e doces para casamento Itápolis">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Maria Alice & Mirian - Bolos e Doces">
  <link rel="canonical" href="https://marialiceemirian.com.br">

  <!-- Open Graph -->
  <meta property="og:title" content="Maria Alice & Mirian | Bolos e Doces em Itápolis-SP">
  <meta property="og:description" content="Há 25 anos preparando bolos, doces finos e encomendas com carinho artesanal para casamentos, aniversários e eventos em Itápolis.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:url" content="https://marialiceemirian.com.br">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Maria Alice & Mirian - Bolos e Doces",
    "description": "Confeitaria artesanal com 25 anos de tradição em Itápolis-SP. Bolos, doces finos, bombons e trufas para casamentos, aniversários e eventos.",
    "url": "https://marialiceemirian.com.br",
    "telephone": "+55-16-99712-6577",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Dr. Fouad Mucari, 1252",
      "addressLocality": "Itápolis",
      "addressRegion": "SP",
      "postalCode": "14900-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -21.5951,
      "longitude": -48.8128
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "16:00" }
    ],
    "priceRange": "$$",
    "servesCuisine": "Confeitaria",
    "areaServed": { "@type": "City", "name": "Itápolis" }
  }
  </script>

  <style>
    /* ===== RESET & BASE ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; scroll-padding-top: 80px; }
    body { font-family: 'Inter', sans-serif; color: var(--text); background: #fff; line-height: 1.6; -webkit-font-smoothing: antialiased; }
    img { max-width: 100%; display: block; }
    a { text-decoration: none; color: inherit; }
    ul { list-style: none; }
    button, input, select, textarea { font-family: inherit; font-size: inherit; border: none; outline: none; }

    /* ===== DESIGN TOKENS ===== */
    :root {
      --rosa: #d4607a;
      --rosa-hover: #c24e68;
      --rosa-claro: #e8849a;
      --rosa-bg: #fdf2f4;
      --rosa-bg2: #fce8ec;
      --nude: #fdf8f5;
      --dourado: #c9a96e;
      --dourado-claro: #e0c992;
      --marrom: #4a3728;
      --grafite: #7a6b63;
      --grafite-claro: #9a8b83;
      --borda: #f0e6e0;
      --whatsapp: #25D366;
      --whatsapp-hover: #1fba59;
      --branco: #ffffff;
      --sombra: 0 2px 12px rgba(74,55,40,0.08);
      --sombra-hover: 0 8px 30px rgba(74,55,40,0.12);
      --radius: 12px;
      --radius-lg: 20px;
      --radius-pill: 50px;
      --transition: 0.3s ease;
      --max-width: 1200px;
    }

    /* ===== TYPOGRAPHY ===== */
    h1, h2, h3, h4 { font-family: 'Playfair Display', serif; color: var(--marrom); line-height: 1.3; }
    h1 { font-size: 2rem; font-weight: 700; }
    h2 { font-size: 1.75rem; font-weight: 700; }
    h3 { font-size: 1.25rem; font-weight: 600; }
    p { color: var(--grafite); }

    /* ===== UTILITIES ===== */
    .container { max-width: var(--max-width); margin: 0 auto; padding: 0 20px; }
    .section-label { font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; color: var(--rosa); margin-bottom: 8px; }
    .section-title { margin-bottom: 16px; }
    .section-title em { font-style: italic; }
    .section-subtitle { font-size: 1rem; color: var(--grafite); max-width: 600px; margin: 0 auto 32px; }
    .section-padding { padding: 80px 0; }
    .text-center { text-align: center; }
    .decorative-line { width: 60px; height: 2px; background: var(--dourado); margin: 24px auto; }

    /* ===== BUTTONS ===== */
    .btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: var(--radius-pill); font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all var(--transition); border: 2px solid transparent; }
    .btn-whatsapp { background: var(--whatsapp); color: #fff; border-color: var(--whatsapp); }
    .btn-whatsapp:hover { background: var(--whatsapp-hover); border-color: var(--whatsapp-hover); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(37,211,102,0.3); }
    .btn-outline { background: transparent; color: var(--rosa); border-color: var(--rosa); }
    .btn-outline:hover { background: var(--rosa); color: #fff; transform: translateY(-2px); }
    .btn-rosa { background: var(--rosa); color: #fff; border-color: var(--rosa); }
    .btn-rosa:hover { background: var(--rosa-hover); border-color: var(--rosa-hover); transform: translateY(-2px); }
    .btn-sm { padding: 10px 20px; font-size: 0.85rem; }

    /* ===== CARDS ===== */
    .card { background: var(--branco); border-radius: var(--radius-lg); box-shadow: var(--sombra); overflow: hidden; transition: all var(--transition); }
    .card:hover { transform: translateY(-4px); box-shadow: var(--sombra-hover); }

    /* ===== HEADER ===== */
    .header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(255,255,255,0.97); backdrop-filter: blur(10px); transition: box-shadow var(--transition); }
    .header.scrolled { box-shadow: 0 2px 20px rgba(74,55,40,0.1); }
    .header-inner { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; max-width: var(--max-width); margin: 0 auto; }
    .header-logo { height: 50px; width: auto; }
    .header-nav { display: flex; align-items: center; gap: 28px; }
    .header-nav a { font-size: 0.9rem; font-weight: 500; color: var(--grafite); transition: color var(--transition); }
    .header-nav a:hover { color: var(--rosa); }
    .header-whatsapp { display: inline-flex; align-items: center; gap: 6px; background: var(--whatsapp); color: #fff; padding: 8px 18px; border-radius: var(--radius-pill); font-size: 0.85rem; font-weight: 600; transition: all var(--transition); }
    .header-whatsapp:hover { background: var(--whatsapp-hover); transform: translateY(-1px); }
    .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; background: none; }
    .hamburger span { display: block; width: 24px; height: 2px; background: var(--marrom); transition: all var(--transition); border-radius: 2px; }
    .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .hamburger.active span:nth-child(2) { opacity: 0; }
    .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

    /* ===== MOBILE NAV ===== */
    .mobile-nav { display: none; position: fixed; top: 0; right: -100%; width: 280px; height: 100vh; background: var(--branco); z-index: 999; padding: 80px 30px 30px; transition: right var(--transition); box-shadow: -4px 0 20px rgba(0,0,0,0.1); }
    .mobile-nav.open { right: 0; }
    .mobile-nav a { display: block; padding: 16px 0; font-size: 1.1rem; font-weight: 500; color: var(--marrom); border-bottom: 1px solid var(--borda); }
    .mobile-nav a:hover { color: var(--rosa); }
    .mobile-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 998; opacity: 0; transition: opacity var(--transition); }
    .mobile-overlay.open { opacity: 1; }

    /* ===== HERO ===== */
    .hero { padding: 120px 0 80px; background: linear-gradient(135deg, var(--rosa-bg) 0%, var(--rosa-bg2) 100%); }
    .hero-content { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
    .hero-badge { display: inline-block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; color: var(--rosa); margin-bottom: 16px; }
    .hero h1 { font-size: 2.5rem; margin-bottom: 16px; }
    .hero h1 em { font-style: italic; color: var(--rosa); }
    .hero-text { font-size: 1.05rem; color: var(--grafite); margin-bottom: 28px; line-height: 1.7; }
    .hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 32px; }
    .hero-badges { display: flex; gap: 20px; flex-wrap: wrap; }
    .hero-badges span { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--grafite-claro); }
    .hero-badges span::before { content: ''; width: 6px; height: 6px; background: var(--dourado); border-radius: 50%; }
    .hero-image { position: relative; aspect-ratio: 4/3; background: linear-gradient(135deg, var(--rosa-claro), var(--rosa)); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .hero-image-placeholder { text-align: center; color: rgba(255,255,255,0.8); }
    .hero-image-placeholder svg { width: 80px; height: 80px; opacity: 0.6; }
    .hero-image-placeholder p { font-size: 0.85rem; margin-top: 8px; font-weight: 500; }

    /* ===== SOBRE ===== */
    .sobre { background: var(--branco); }
    .sobre-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .sobre-image { aspect-ratio: 4/3; background: linear-gradient(135deg, var(--nude), var(--rosa-bg)); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; }
    .sobre-text p { margin-bottom: 16px; font-size: 1rem; line-height: 1.8; }
    .sobre-text .destaque { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-style: italic; color: var(--rosa); border-left: 3px solid var(--dourado); padding-left: 16px; margin: 24px 0; }

    /* ===== CATEGORIAS ===== */
    .categorias { background: var(--nude); }
    .categorias-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .categoria-card { background: var(--branco); border-radius: var(--radius-lg); padding: 32px 20px; text-align: center; cursor: pointer; transition: all var(--transition); box-shadow: var(--sombra); border: 2px solid transparent; }
    .categoria-card:hover { transform: translateY(-6px); box-shadow: var(--sombra-hover); border-color: var(--rosa-claro); }
    .categoria-card .icon { width: 60px; height: 60px; margin: 0 auto 16px; background: var(--rosa-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
    .categoria-card h3 { font-size: 1rem; margin-bottom: 6px; }
    .categoria-card p { font-size: 0.85rem; color: var(--grafite-claro); }

    /* ===== CATALOGO ===== */
    .catalogo { background: var(--branco); }
    .tabs-nav { display: flex; gap: 0; border-bottom: 2px solid var(--borda); margin-bottom: 32px; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
    .tabs-nav::-webkit-scrollbar { display: none; }
    .tab-btn { padding: 14px 24px; font-size: 0.9rem; font-weight: 600; color: var(--grafite-claro); background: none; cursor: pointer; border: none; border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap; transition: all var(--transition); }
    .tab-btn.active { color: var(--rosa); border-bottom-color: var(--rosa); }
    .tab-btn:hover:not(.active) { color: var(--marrom); }
    .tab-panel { display: none; animation: fadeIn 0.3s ease; }
    .tab-panel.active { display: block; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

    /* Bolos tab */
    .bolo-card { background: var(--nude); border-radius: var(--radius); padding: 24px; margin-bottom: 20px; }
    .bolo-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
    .bolo-header h3 { font-size: 1.15rem; }
    .bolo-badges { display: flex; gap: 8px; flex-wrap: wrap; }
    .bolo-badge { font-size: 0.75rem; background: var(--rosa-bg); color: var(--rosa); padding: 4px 12px; border-radius: var(--radius-pill); font-weight: 500; }
    .bolo-lista { margin-bottom: 16px; }
    .bolo-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--borda); font-size: 0.9rem; }
    .bolo-item:last-child { border-bottom: none; }
    .bolo-item span:first-child { color: var(--grafite); }
    .bolo-item span:last-child { color: var(--rosa); font-weight: 600; white-space: nowrap; }
    .bolo-especial { background: linear-gradient(135deg, var(--rosa-bg), var(--nude)); border-radius: var(--radius); padding: 20px; margin-top: 24px; border-left: 4px solid var(--dourado); }
    .bolo-especial h3 { font-size: 1rem; margin-bottom: 12px; color: var(--marrom); }
    .bolo-nota { font-size: 0.85rem; color: var(--grafite-claro); font-style: italic; margin-top: 16px; padding: 12px; background: rgba(201,169,110,0.08); border-radius: 8px; }

    /* Doces tab */
    .doces-filter { position: relative; margin-bottom: 24px; }
    .doces-filter input { width: 100%; padding: 12px 20px 12px 44px; border: 2px solid var(--borda); border-radius: var(--radius-pill); font-size: 0.9rem; transition: border-color var(--transition); background: var(--nude); }
    .doces-filter input:focus { border-color: var(--rosa-claro); }
    .doces-filter svg { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); width: 18px; height: 18px; color: var(--grafite-claro); }
    .doces-grupo-titulo { font-size: 1.1rem; margin: 28px 0 16px; padding-bottom: 8px; border-bottom: 2px solid var(--borda); }
    .doces-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .doce-card { background: var(--nude); border-radius: var(--radius); padding: 16px; transition: all var(--transition); }
    .doce-card:hover { box-shadow: var(--sombra); }
    .doce-card h4 { font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 600; color: var(--marrom); margin-bottom: 8px; }
    .doce-precos { display: flex; gap: 16px; font-size: 0.8rem; margin-bottom: 10px; }
    .doce-precos span { color: var(--grafite); }
    .doce-precos strong { color: var(--rosa); font-weight: 600; }
    .doce-card .btn-sm { width: 100%; justify-content: center; font-size: 0.8rem; padding: 8px 14px; }

    /* Kits tab */
    .kits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .kit-card { background: var(--nude); border-radius: var(--radius-lg); padding: 28px; text-align: center; border: 2px solid var(--borda); transition: all var(--transition); }
    .kit-card:hover { border-color: var(--rosa-claro); box-shadow: var(--sombra-hover); }
    .kit-card .kit-preco { font-family: 'Playfair Display', serif; font-size: 1.75rem; color: var(--rosa); font-weight: 700; margin: 12px 0; }
    .kit-card .kit-desc { font-size: 0.85rem; color: var(--grafite); margin-bottom: 16px; }
    .kit-sabores { text-align: left; margin-bottom: 20px; }
    .kit-sabores h4 { font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 600; color: var(--marrom); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
    .kit-sabores-lista { display: flex; flex-wrap: wrap; gap: 6px; }
    .kit-sabores-lista span { font-size: 0.75rem; background: var(--rosa-bg); color: var(--rosa); padding: 4px 10px; border-radius: var(--radius-pill); }

    /* Recheios tab */
    .recheios-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .recheio-pill { display: inline-flex; align-items: center; padding: 10px 16px; background: var(--nude); border-radius: var(--radius-pill); font-size: 0.85rem; color: var(--marrom); transition: all var(--transition); border: 1px solid var(--borda); }
    .recheio-pill:hover { background: var(--rosa-bg); border-color: var(--rosa-claro); }

    /* Personalizados tab */
    .personalizados-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .personalizado-card { background: var(--nude); border-radius: var(--radius); padding: 24px; text-align: center; }
    .personalizado-card .icon { width: 50px; height: 50px; margin: 0 auto 12px; background: var(--rosa-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; }
    .personalizado-card h4 { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--marrom); }

    /* ===== COMO PEDIR ===== */
    .como-pedir { background: var(--rosa-bg); }
    .passos { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; position: relative; }
    .passo { text-align: center; flex: 1; min-width: 140px; max-width: 180px; position: relative; }
    .passo-num { width: 56px; height: 56px; margin: 0 auto 12px; background: var(--branco); border: 2px solid var(--rosa); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: var(--rosa); position: relative; z-index: 1; }
    .passo h4 { font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: var(--marrom); margin-bottom: 4px; }
    .passo p { font-size: 0.78rem; color: var(--grafite-claro); }

    /* ===== CONFIGURADOR ===== */
    .configurador { background: linear-gradient(135deg, var(--rosa-bg), var(--rosa-bg2)); }
    .config-form { background: var(--branco); border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--sombra-hover); max-width: 700px; margin: 0 auto; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group.full { grid-column: span 2; }
    .form-group label { font-size: 0.85rem; font-weight: 500; color: var(--marrom); }
    .form-group input, .form-group select, .form-group textarea { padding: 12px 16px; border: 2px solid var(--borda); border-radius: var(--radius); background: var(--nude); transition: border-color var(--transition); color: var(--marrom); }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--rosa-claro); }
    .form-group textarea { resize: vertical; min-height: 80px; }
    .form-group select { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237a6b63' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 36px; }
    .conditional-fields { display: none; }
    .conditional-fields.visible { display: contents; }

    /* ===== DIFERENCIAIS ===== */
    .diferenciais { background: var(--branco); }
    .diferenciais-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .diferencial-card { text-align: center; padding: 32px 20px; border-radius: var(--radius-lg); border: 1px solid var(--borda); transition: all var(--transition); }
    .diferencial-card:hover { border-color: var(--rosa-claro); box-shadow: var(--sombra); }
    .diferencial-card .icon { width: 56px; height: 56px; margin: 0 auto 16px; background: linear-gradient(135deg, var(--dourado-claro), var(--dourado)); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.3rem; }
    .diferencial-card h3 { font-size: 1rem; margin-bottom: 8px; }
    .diferencial-card p { font-size: 0.85rem; color: var(--grafite-claro); }

    /* ===== AVALIACOES ===== */
    .avaliacoes { background: var(--nude); }
    .avaliacoes-grid { display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; padding-bottom: 8px; scrollbar-width: none; }
    .avaliacoes-grid::-webkit-scrollbar { display: none; }
    .avaliacao-card { min-width: 300px; flex-shrink: 0; scroll-snap-align: start; background: var(--branco); border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--sombra); }
    .avaliacao-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
    .avaliacao-avatar { width: 44px; height: 44px; background: var(--rosa-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-weight: 700; color: var(--rosa); font-size: 1rem; }
    .avaliacao-nome { font-weight: 600; color: var(--marrom); font-size: 0.9rem; }
    .avaliacao-estrelas { color: var(--dourado); font-size: 0.85rem; letter-spacing: 2px; }
    .avaliacao-texto { font-size: 0.9rem; color: var(--grafite); line-height: 1.7; font-style: italic; }

    /* ===== GALERIA ===== */
    .galeria { background: var(--branco); }
    .galeria-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
    .galeria-item { aspect-ratio: 1; background: linear-gradient(135deg, var(--rosa-bg), var(--rosa-claro)); border-radius: var(--radius); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all var(--transition); position: relative; overflow: hidden; }
    .galeria-item:hover { transform: scale(1.03); }
    .galeria-item::after { content: ''; position: absolute; inset: 0; background: rgba(212,96,122,0.3); opacity: 0; transition: opacity var(--transition); }
    .galeria-item:hover::after { opacity: 1; }
    .galeria-item svg { color: rgba(255,255,255,0.6); width: 28px; height: 28px; }

    /* ===== LOCALIZACAO ===== */
    .localizacao { background: var(--rosa-bg); }
    .localizacao-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
    .localizacao-info h3 { font-size: 1.1rem; margin-bottom: 20px; }
    .info-item { display: flex; gap: 12px; margin-bottom: 16px; align-items: flex-start; }
    .info-item .icon-circle { width: 36px; height: 36px; min-width: 36px; background: var(--branco); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--rosa); font-size: 0.9rem; box-shadow: var(--sombra); }
    .info-item p { font-size: 0.9rem; color: var(--grafite); }
    .info-item strong { color: var(--marrom); }
    .horarios-card { background: var(--branco); border-radius: var(--radius); padding: 20px; margin: 20px 0; box-shadow: var(--sombra); }
    .horario-linha { display: flex; justify-content: space-between; padding: 8px 0; font-size: 0.85rem; border-bottom: 1px solid var(--borda); }
    .horario-linha:last-child { border-bottom: none; }
    .horario-linha .dia { color: var(--marrom); font-weight: 500; }
    .horario-linha .hora { color: var(--grafite); }
    .horario-linha .fechado { color: var(--rosa); font-weight: 500; }
    .localizacao-mapa { border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--sombra); height: 400px; }
    .localizacao-mapa iframe { width: 100%; height: 100%; border: 0; }

    /* ===== FAQ ===== */
    .faq { background: var(--branco); }
    .faq-lista { max-width: 800px; margin: 0 auto; }
    .faq-item { border-bottom: 1px solid var(--borda); }
    .faq-pergunta { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 0; background: none; cursor: pointer; text-align: left; }
    .faq-pergunta h3 { font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--marrom); }
    .faq-pergunta .arrow { width: 20px; height: 20px; color: var(--rosa); transition: transform var(--transition); flex-shrink: 0; }
    .faq-item.open .arrow { transform: rotate(180deg); }
    .faq-resposta { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
    .faq-resposta-inner { padding: 0 0 20px; font-size: 0.9rem; color: var(--grafite); line-height: 1.7; }

    /* ===== FOOTER ===== */
    .footer { background: var(--marrom); color: rgba(255,255,255,0.8); padding: 60px 0 24px; }
    .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
    .footer h4 { color: #fff; font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 600; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px; }
    .footer p, .footer a { font-size: 0.85rem; line-height: 1.8; }
    .footer a:hover { color: var(--rosa-claro); }
    .footer-brand p { margin-bottom: 12px; }
    .footer-social { display: flex; gap: 12px; margin-top: 12px; }
    .footer-social a { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; transition: all var(--transition); font-size: 0.85rem; }
    .footer-social a:hover { background: var(--rosa); color: #fff; }
    .footer-links a { display: block; padding: 4px 0; }
    .footer-cta { text-align: center; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.1); }
    .footer-bottom { text-align: center; margin-top: 24px; font-size: 0.78rem; color: rgba(255,255,255,0.5); }

    /* ===== WHATSAPP FLOAT ===== */
    .whatsapp-float { position: fixed; bottom: 24px; right: 24px; z-index: 900; }
    .whatsapp-float a { display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; background: var(--whatsapp); border-radius: 50%; box-shadow: 0 4px 20px rgba(37,211,102,0.4); transition: all var(--transition); animation: pulse 3s ease-in-out infinite; }
    .whatsapp-float a:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,0.5); }
    .whatsapp-float svg { width: 30px; height: 30px; fill: #fff; }
    .whatsapp-float .tooltip { position: absolute; right: 70px; top: 50%; transform: translateY(-50%); background: var(--marrom); color: #fff; padding: 8px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 500; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity var(--transition); }
    .whatsapp-float a:hover + .tooltip, .whatsapp-float .tooltip:hover { opacity: 1; }
    @keyframes pulse { 0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); } 50% { box-shadow: 0 4px 30px rgba(37,211,102,0.6), 0 0 0 12px rgba(37,211,102,0.1); } }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      h1 { font-size: 1.75rem; }
      h2 { font-size: 1.4rem; }
      .section-padding { padding: 60px 0; }
      .hamburger { display: flex; }
      .mobile-nav { display: block; }
      .header-nav { display: none; }
      .hero { padding: 100px 0 60px; }
      .hero-content { grid-template-columns: 1fr; text-align: center; }
      .hero-buttons { justify-content: center; }
      .hero-badges { justify-content: center; }
      .hero-image { max-height: 250px; }
      .hero h1 { font-size: 1.85rem; }
      .sobre-grid { grid-template-columns: 1fr; gap: 32px; }
      .categorias-grid { grid-template-columns: repeat(2, 1fr); }
      .doces-grid { grid-template-columns: 1fr; }
      .kits-grid { grid-template-columns: 1fr; }
      .personalizados-grid { grid-template-columns: repeat(2, 1fr); }
      .recheios-grid { grid-template-columns: repeat(2, 1fr); }
      .form-grid { grid-template-columns: 1fr; }
      .form-group.full { grid-column: span 1; }
      .diferenciais-grid { grid-template-columns: repeat(2, 1fr); }
      .galeria-grid { grid-template-columns: repeat(2, 1fr); }
      .localizacao-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
      .passos { flex-direction: column; align-items: center; }
      .config-form { padding: 24px; }
      .whatsapp-float a { width: 54px; height: 54px; }
      .whatsapp-float svg { width: 26px; height: 26px; }
    }
    @media (max-width: 480px) {
      .hero h1 { font-size: 1.55rem; }
      .categorias-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
      .footer-grid { grid-template-columns: 1fr; }
      .diferenciais-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

<script>
// ===== DADOS DO NEGOCIO (edite aqui para atualizar o site) =====
const DADOS = {
  empresa: {
    nome: "Maria Alice & Mirian",
    subtitulo: "Bolos e Doces",
    endereco: "R. Dr. Fouad Mucari, 1252 – Jardim Campestre, Itápolis – SP",
    whatsapp: "5516997126577",
    whatsappFormatado: "(16) 99712-6577",
    fixo: "(16) 3262-8573",
    instagram: "@marialicemirianbolosedoces",
    instagramUrl: "https://www.instagram.com/marialicemirianbolosedoces",
    facebookUrl: "https://www.facebook.com/marialicemirianbolosedoces",
    facebook: "Maria Alice & Mirian - Bolos e Doces",
    mapsUrl: "https://www.google.com/maps/place/R.+Dr.+Fouad+Mucari,+1252+-+Jardim+Campestre,+It%C3%A1polis+-+SP",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.5!2d-48.8128!3d-21.5951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+Dr.+Fouad+Mucari%2C+1252+-+Itapolis!5e0!3m2!1spt-BR!2sbr",
    horarios: [
      { dias: "Terça a Sexta", horas: "08:00 às 18:00" },
      { dias: "Sábado", horas: "08:00 às 16:00" },
      { dias: "Domingo e Segunda", horas: "Fechado", fechado: true }
    ]
  },

  bolos: [
    {
      peso: "1,5 kg", pessoas: 10, diametro: "17 cm", fatias: "~15",
      coberturas: [
        { nome: "Chantilly", preco: "R$ 115,00" },
        { nome: "Ganache escorrido", preco: "R$ 115,00" },
        { nome: "Marshmallow", preco: "R$ 115,00" },
        { nome: "Ganache no bolo todo", preco: "R$ 135,00" },
        { nome: "Brigadeiro no bolo todo", preco: "R$ 135,00" },
        { nome: "Brigadeiro com raspas de chocolate e laço decorativo", preco: "R$ 155,00" },
        { nome: "Leite ninho", preco: "R$ 155,00" },
        { nome: "Naked cake (com frutas)", preco: "R$ 145,00" }
      ]
    },
    {
      peso: "2,5 kg", pessoas: 25, diametro: "24 cm", fatias: "~30",
      coberturas: [
        { nome: "Chantilly", preco: "R$ 190,00" },
        { nome: "Ganache escorrido", preco: "R$ 190,00" },
        { nome: "Marshmallow", preco: "R$ 190,00" },
        { nome: "Ganache no bolo todo", preco: "R$ 215,00" },
        { nome: "Brigadeiro no bolo todo", preco: "R$ 215,00" },
        { nome: "Brigadeiro com raspas de chocolate e laço decorativo", preco: "R$ 240,00" },
        { nome: "Leite ninho", preco: "R$ 240,00" },
        { nome: "Naked cake (com frutas)", preco: "R$ 230,00" }
      ]
    },
    {
      peso: "3,5 kg", pessoas: 35, diametro: "28 cm", fatias: "~40",
      coberturas: [
        { nome: "Chantilly", preco: "R$ 310,00" },
        { nome: "Ganache escorrido", preco: "R$ 310,00" },
        { nome: "Marshmallow", preco: "R$ 310,00" },
        { nome: "Ganache no bolo todo", preco: "R$ 340,00" },
        { nome: "Brigadeiro no bolo todo", preco: "R$ 340,00" },
        { nome: "Brigadeiro com raspas de chocolate e laço decorativo", preco: "R$ 370,00" },
        { nome: "Leite ninho", preco: "R$ 370,00" },
        { nome: "Naked cake (com frutas)", preco: "R$ 360,00" }
      ]
    },
    {
      peso: "4,5 kg", pessoas: 45, diametro: "", fatias: "~60",
      coberturas: [
        { nome: "Chantilly", preco: "R$ 390,00" },
        { nome: "Ganache escorrido", preco: "R$ 390,00" },
        { nome: "Marshmallow", preco: "R$ 390,00" },
        { nome: "Ganache no bolo todo", preco: "R$ 430,00" },
        { nome: "Brigadeiro no bolo todo", preco: "R$ 430,00" },
        { nome: "Brigadeiro com raspas de chocolate e laço decorativo", preco: "R$ 460,00" },
        { nome: "Leite ninho", preco: "R$ 460,00" },
        { nome: "Naked cake (com frutas)", preco: "R$ 450,00" }
      ]
    },
    {
      peso: "6,5 kg", pessoas: 60, diametro: "", fatias: "~90",
      coberturas: [
        { nome: "Chantilly", preco: "R$ 460,00" },
        { nome: "Ganache escorrido", preco: "R$ 460,00" },
        { nome: "Marshmallow", preco: "R$ 460,00" },
        { nome: "Ganache no bolo todo", preco: "R$ 520,00" },
        { nome: "Brigadeiro no bolo todo", preco: "R$ 520,00" },
        { nome: "Brigadeiro com raspas de chocolate e laço decorativo", preco: "R$ 550,00" },
        { nome: "Leite ninho", preco: "R$ 550,00" },
        { nome: "Naked cake (com frutas)", preco: "R$ 540,00" }
      ]
    }
  ],

  bolosEspeciais: [
    { nome: "Charge", recheios: "Brigadeiro preto / leite ninho com doce de leite e amendoim" },
    { nome: "Floresta Negra", recheios: "Trufa de chocolate com cereja e chantilly" },
    { nome: "Marta Rocha", recheios: "Bába de moça / strogonoff de nozes e suspiro" },
    { nome: "Napolitano", recheios: "Brigadeiro branco, romance e brigadeiro preto" }
  ],

  coberturasDisponiveis: [
    "Brigadeiro branco ou preto",
    "Ganache branco ou preto",
    "Marshmallow limão ou baunilha"
  ],

  recheios: [
    "Abacaxi com coco","Abacaxi com creme","Alpino","Bába de moça","Beijinho de coco",
    "Brigadeiro branco","Brigadeiro branco com cereja","Brigadeiro de nutella","Brigadeiro preto",
    "Brigadeiro preto com cereja","Chandelle de chocolate","Coco","Coco com ameixa","Creme",
    "Creme com nozes","Damasco com brigadeiro branco","Doce de leite","Doce de leite com ameixa",
    "Doce de leite com coco","Doce de leite com nozes","Doce de leite trufado","Ferrero rocher",
    "Frutas vermelhas com brigadeiro branco","Leite ninho","Leite ninho com cereja",
    "Leite ninho com frutas vermelhas","Leite ninho com nozes","Leite ninho com nutella",
    "Leite ninho com polpa de morango","Leite ninho trufado","Mousse de coco",
    "Mousse de chocolate ao leite","Mousse de chocolate branco","Mousse de chocolate meio amargo",
    "Mousse de limão","Mousse de maracujá","Ouro branco","Prestígio","Rafaello","Romance",
    "Sonho de valsa","Strogonoff de nozes","Três amores","Trufa de chocolate ao leite",
    "Trufa de chocolate branco","Trufa de chocolate meio amargo"
  ],

  doces: {
    grupo1: [
      { nome: "Brigadeiro (branco, preto, romance, coco, cereja, damasco, abacaxi, leite ninho, ameixa, cajuzinho)", p100: "R$ 150,00", p50: "R$ 75,00" },
      { nome: "Brigadeiro com escamas", p100: "R$ 165,00", p50: "R$ 83,00" },
      { nome: "Casadinho (dois sabores)", p100: "R$ 185,00", p50: "R$ 93,00" },
      { nome: "Tricolor (três sabores) / Brigadeiro broulet", p100: "R$ 215,00", p50: "R$ 108,00" },
      { nome: "Brigadeiro ovomaltine, noir, laranja, café, limão, limão siciliano, capuccino, beijo doce de leite com coco queimado", p100: "R$ 190,00", p50: "R$ 95,00" },
      { nome: "Ninho com nutella, joe maracujá, joe morango, brigadeiro com nutella", p100: "R$ 215,00", p50: "R$ 108,00" },
      { nome: "Churros, prestígio, Romeu e Julieta, limão com merengue", p100: "R$ 195,00", p50: "R$ 98,00" },
      { nome: "Bombom de brigadeiro (branco, preto, romance, coco, cereja, damasco, abacaxi, leite ninho, doce de leite, beijo rosado)", p100: "R$ 220,00", p50: "R$ 110,00" },
      { nome: "Bala baiana", p100: "R$ 250,00", p50: "R$ 125,00" },
      { nome: "Camafeu", p100: "R$ 260,00", p50: "R$ 130,00" },
      { nome: "Bombom de ninho com nutella", p100: "R$ 260,00", p50: "R$ 130,00" },
      { nome: "Bombom de uva, limão siciliano, churros", p100: "R$ 255,00", p50: "R$ 128,00" },
      { nome: "Olho de sogra simples", p100: "R$ 230,00", p50: "R$ 115,00" },
      { nome: "Olho de sogra caramelizado", p100: "R$ 260,00", p50: "R$ 130,00" },
      { nome: "Damasco recheado com amêndoas / Olho de sogro caramelado", p100: "R$ 310,00", p50: "R$ 155,00" },
      { nome: "Tâmaras carameladas", p100: "R$ 370,00", p50: "R$ 185,00" },
      { nome: "Trufas (suflair, ao leite, capuccino, negresco, maracujá, limão, frutas vermelhas, morango, napolitano, caipirinha)", p100: "R$ 250,00", p50: "R$ 125,00" },
      { nome: "Ferrero rocher, Rafaello, Pistache, Lollo", p100: "R$ 320,00", p50: "R$ 160,00" },
      { nome: "Copinho de chocolate trufado com cereja", p100: "R$ 320,00", p50: "R$ 160,00" },
      { nome: "Gotas ou coração de chocolate trufado", p100: "R$ 340,00", p50: "R$ 170,00" },
      { nome: "Cestinha de frutas", p100: "R$ 340,00", p50: "R$ 170,00" },
      { nome: "Escondidinho de cereja", p100: "R$ 360,00", p50: "R$ 180,00" },
      { nome: "Tortinha de limão ou maracujá", p100: "R$ 420,00", p50: "R$ 210,00" },
      { nome: "Tortinha de maçã, morango e nozes", p100: "R$ 530,00", p50: "R$ 265,00" },
      { nome: "Romeu e Julieta com queijo parmesão", p100: "R$ 400,00", p50: "R$ 200,00" },
      { nome: "Rosas de fita de coco", p100: "R$ 440,00", p50: "R$ 220,00" },
      { nome: "Surpresa de Brownie", p100: "R$ 380,00", p50: "R$ 190,00" },
      { nome: "Ninho de amor", p100: "R$ 290,00", p50: "R$ 145,00" }
    ],
    grupo2: [
      { nome: "Coquelita", p100: "R$ 340,00", p50: "R$ 170,00" },
      { nome: "Brigadeiro Red Velvet", p100: "R$ 215,00", p50: "R$ 108,00" },
      { nome: "Ouriço de doce de leite / Brigadeiro de flor de sal", p100: "R$ 240,00", p50: "R$ 120,00" },
      { nome: "Bombom surpresa de abacaxi / Bombom torta de limão", p100: "R$ 260,00", p50: "R$ 130,00" },
      { nome: "Tricelanica (coco, nozes e castanha de caju)", p100: "R$ 480,00", p50: "R$ 240,00" },
      { nome: "Surpresa de uva", p100: "R$ 230,00", p50: "R$ 115,00" },
      { nome: "Olho de sogro simples", p100: "R$ 280,00", p50: "R$ 140,00" },
      { nome: "Tortinha holandesa", p100: "R$ 470,00", p50: "R$ 235,00" },
      { nome: "Prestígio divino", p100: "R$ 220,00", p50: "R$ 110,00" },
      { nome: "Copinho de chocolate com Ferrero Rocher", p100: "R$ 430,00", p50: "R$ 215,00" },
      { nome: "Bala de coco gourmet (cento)", p100: "R$ 260,00", p50: null },
      { nome: "Bala de coco simples (receita ~200 balas, sem embrulhar)", p100: "R$ 90,00", p50: null },
      { nome: "Bala de coco gelada", p100: "R$ 110,00", p50: null }
    ]
  },

  kits: [
    {
      nome: "Kit Doces Simples",
      preco: "R$ 175,00",
      descricao: "100 doces divididos em 4 sabores à escolha",
      sabores: ["Brigadeiro","Brigadeiro branco","Romance","Beijinho de coco","Beijinho de cereja","Beijinho de abacaxi","Beijinho de damasco","Leite ninho","Cajuzinho"]
    },
    {
      nome: "Kit Doces Recheados",
      preco: "R$ 230,00",
      descricao: "100 doces divididos em 4 sabores à escolha",
      sabores: ["Churros","Prestígio","Romeu e Julieta","Ninho com nutella","Limão com merengue","Joe de morango","Joe de maracujá"]
    },
    {
      nome: "Kit Bombons e Trufas",
      preco: "R$ 265,00",
      descricao: "100 doces divididos em 4 sabores à escolha",
      sabores: ["Brigadeiro","Brigadeiro branco","Romance","Coco","Cereja","Abacaxi","Damasco","Leite ninho","Camafeu","Suflair","Limão","Maracujá","Frutas vermelhas","Morango","Caipirinha"]
    }
  ],

  personalizados: [
    { nome: "Pirulitos de chocolate", icone: "🍭" },
    { nome: "Pães de mel", icone: "🍯" },
    { nome: "Porta retrato", icone: "🖼️" },
    { nome: "Trufas", icone: "🍫" },
    { nome: "Cupcakes", icone: "🧁" },
    { nome: "Apliques para doces", icone: "✨" }
  ],

  avaliacoes: [
    { nome: "Fernanda L.", iniciais: "FL", texto: "Encomendei o bolo para o aniversário da minha filha e superou todas as expectativas. Massa molhadinha, recheio na medida certa e uma apresentação impecável. Já virou tradição pedir aqui!" },
    { nome: "Carla M.", iniciais: "CM", texto: "Os doces para o meu casamento ficaram maravilhosos. Grande variedade de sabores, todos muito bem feitos e com acabamento perfeito. As convidadas não pararam de elogiar!" },
    { nome: "Patrícia R.", iniciais: "PR", texto: "Sempre peço os bolos da Maria Alice e Mirian para os eventos da família. Qualidade consistente, ótimo atendimento e preço justo. Recomendo de olhos fechados!" },
    { nome: "Juliana S.", iniciais: "JS", texto: "Boa variedade de bolos, recheios e doces. Tudo muito saboroso, com aquele toque artesanal que faz toda a diferença. Atendimento sempre com muita atenção e carinho." }
  ],

  faq: [
    { pergunta: "Vocês fazem bolos personalizados?", resposta: "Sim! Fazemos bolos decorados e personalizados para todos os tipos de eventos. Bolos coloridos ou com decoração especial têm acréscimo no valor — envie o tema ou foto de inspiração pelo WhatsApp para orçamento." },
    { pergunta: "Como faço meu pedido?", resposta: "É muito simples! Escolha seus produtos no nosso cardápio, defina quantidades e sabores, e envie seu pedido pelo WhatsApp. Você também pode usar nosso formulário de encomenda aqui no site para montar o pedido completo." },
    { pergunta: "Qual a antecedência ideal para encomendar?", resposta: "Recomendamos fazer o pedido com pelo menos 3 a 5 dias de antecedência. Para eventos maiores, como casamentos, o ideal é entrar em contato com 2 a 4 semanas de antecedência." },
    { pergunta: "Posso montar orçamento pelo WhatsApp?", resposta: "Claro! Envie uma mensagem pelo WhatsApp com os detalhes do que precisa (tipo de produto, quantidade, data do evento) e retornamos com o orçamento completo." },
    { pergunta: "Quais sabores de recheio estão disponíveis?", resposta: "Temos mais de 45 opções de recheio! Desde os clássicos como brigadeiro e doce de leite até opções especiais como Ferrero Rocher, leite ninho com nutella e frutas vermelhas. Confira a lista completa na seção de recheios do nosso cardápio." },
    { pergunta: "Vocês fazem doces para casamento e aniversário?", resposta: "Sim! Somos especialistas em doces para festas e eventos. Atendemos casamentos, aniversários, formaturas, chás de bebê e confraternizações. Temos kits prontos e também montamos pedidos personalizados." },
    { pergunta: "Qual o pedido mínimo de doces?", resposta: "O pedido mínimo é de 50 unidades do mesmo sabor. Para os kits, o mínimo é de 100 doces divididos em 4 sabores." },
    { pergunta: "Vocês entregam?", resposta: "Consulte a disponibilidade de entrega pelo WhatsApp. Atendemos Itápolis e região." }
  ]
};
</script>

  <!-- HTML sections will be added in subsequent tasks -->

  <!-- JS for interactivity will be added at the end -->

</body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Open `index.html` in a browser. The page should load with a blank body but no console errors. Check:
- DevTools console is clean (no errors)
- Google Fonts loaded (check Network tab)
- JSON-LD is valid (paste it into Google's Rich Results Test)

- [ ] **Step 3: Commit**

```bash
git init
git add index.html
git commit -m "feat: foundation — HTML shell with CSS design system and DADOS catalog object"
```

---

### Task 2: Header + Hero + WhatsApp float

Add the fixed header with mobile hamburger, hero section, and floating WhatsApp button. These are the first visible elements and establish the visual tone.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add header HTML**

Replace the `<!-- HTML sections will be added in subsequent tasks -->` comment in `index.html` with:

```html
  <!-- HEADER -->
  <header class="header" id="header">
    <div class="header-inner">
      <a href="#" aria-label="Maria Alice & Mirian - Página inicial">
        <img src="logo.png" alt="Maria Alice & Mirian - Bolos e Doces" class="header-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span style="display:none;font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:700;color:var(--rosa);font-style:italic;">Maria Alice & Mirian</span>
      </a>
      <nav class="header-nav">
        <a href="#sobre">Sobre</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#como-pedir">Como Pedir</a>
        <a href="#contato">Contato</a>
        <a href="https://wa.me/5516997126577?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20%F0%9F%98%8A" target="_blank" rel="noopener" class="header-whatsapp">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </nav>
      <button class="hamburger" id="hamburger" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- MOBILE NAV -->
  <div class="mobile-overlay" id="mobile-overlay"></div>
  <nav class="mobile-nav" id="mobile-nav">
    <a href="#sobre" class="mobile-link">Sobre</a>
    <a href="#cardapio" class="mobile-link">Cardápio</a>
    <a href="#como-pedir" class="mobile-link">Como Pedir</a>
    <a href="#contato" class="mobile-link">Contato</a>
    <a href="https://wa.me/5516997126577?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20%F0%9F%98%8A" target="_blank" rel="noopener" class="btn btn-whatsapp" style="margin-top:20px;width:100%;justify-content:center;">
      WhatsApp
    </a>
  </nav>

  <main>

  <!-- HERO -->
  <section class="hero" id="inicio">
    <div class="container">
      <div class="hero-content">
        <div>
          <span class="hero-badge">Desde 2000 em Itápolis</span>
          <h1>Doces que marcam seus <em>momentos mais especiais</em></h1>
          <p class="hero-text">Há 25 anos criando bolos, doces finos e encomendas com carinho artesanal para casamentos, aniversários e celebrações em Itápolis e região.</p>
          <div class="hero-buttons">
            <a href="https://wa.me/5516997126577?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20%F0%9F%8E%82" target="_blank" rel="noopener" class="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Fazer Pedido
            </a>
            <a href="#cardapio" class="btn btn-outline">Ver Cardápio</a>
          </div>
          <div class="hero-badges">
            <span>25 anos de tradição</span>
            <span>Produção artesanal</span>
            <span>Ingredientes selecionados</span>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-image-placeholder">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="65" r="30" stroke="currentColor" stroke-width="2"/><ellipse cx="50" cy="35" rx="25" ry="8" stroke="currentColor" stroke-width="2"/><path d="M25 65 C25 45 35 35 50 35 C65 35 75 45 75 65" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="22" r="5" stroke="currentColor" stroke-width="2"/></svg>
            <p>Adicione sua foto aqui</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Remaining sections placeholder -->

  </main>

  <!-- WHATSAPP FLOAT -->
  <div class="whatsapp-float">
    <a href="https://wa.me/5516997126577?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20%F0%9F%98%8A" target="_blank" rel="noopener" aria-label="Fale conosco pelo WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
    <span class="tooltip">Fale conosco</span>
  </div>
```

- [ ] **Step 2: Add header/nav JS**

Replace the `<!-- JS for interactivity will be added at the end -->` comment with:

```html
<script>
// ===== HEADER SCROLL SHADOW =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileOverlay = document.getElementById('mobile-overlay');

function toggleMobile() {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('open');
  mobileOverlay.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMobile);
mobileOverlay.addEventListener('click', toggleMobile);
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', toggleMobile);
});
</script>
```

- [ ] **Step 3: Verify in browser**

Open `index.html`. Check:
- Header is fixed at top with logo fallback text, nav links, green WhatsApp button
- On scroll, header gets a subtle shadow
- Hero section shows with gradient background, title, subtitle, two buttons, three badges, image placeholder
- Green WhatsApp float button in bottom-right with pulse animation
- Resize to mobile: hamburger appears, menu drawer works, hero stacks vertically

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: header with mobile menu, hero section, WhatsApp floating button"
```

---

### Task 3: Sobre + Categorias sections

Add the about section with emotional copy and the category cards grid.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Sobre and Categorias HTML**

Insert after the closing `</section>` of the hero (before `<!-- Remaining sections placeholder -->`):

```html
  <!-- SOBRE -->
  <section class="sobre section-padding" id="sobre">
    <div class="container">
      <div class="sobre-grid">
        <div class="sobre-image">
          <div class="hero-image-placeholder">
            <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="1.5" style="width:70px;opacity:0.5"><rect x="10" y="10" width="80" height="60" rx="4"/><circle cx="35" cy="35" r="8"/><path d="M10 55 L35 35 L55 50 L70 40 L90 55 L90 70 L10 70Z"/></svg>
            <p style="font-size:0.85rem;margin-top:8px;color:rgba(74,55,40,0.5);">Foto da confeitaria</p>
          </div>
        </div>
        <div class="sobre-text">
          <p class="section-label">Nossa História</p>
          <h2 class="section-title">Tradição, carinho e <em>sabor em cada detalhe</em></h2>
          <p>Há mais de 25 anos, a <strong>Maria Alice & Mirian</strong> é sinônimo de qualidade e sabor em Itápolis e região. O que começou com receitas de família e o sonho de adoçar a vida das pessoas se transformou em uma das confeitarias mais queridas da cidade.</p>
          <p class="destaque">"Cada bolo que sai das nossas mãos carrega o carinho de quem faz com amor o que ama fazer."</p>
          <p>Nossos bolos e doces são preparados artesanalmente, com ingredientes selecionados e o cuidado que só a tradição familiar ensina. Atendemos casamentos, aniversários, formaturas, chás de bebê e todas as celebrações que merecem o melhor.</p>
          <p>Com atendimento personalizado e atenção a cada detalhe, ajudamos você a escolher os sabores perfeitos e a quantidade ideal para o seu evento. Porque acreditamos que momentos especiais pedem doces especiais.</p>
          <div class="decorative-line" style="margin-left:0;"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CATEGORIAS -->
  <section class="categorias section-padding" id="categorias">
    <div class="container text-center">
      <p class="section-label">Nossos Produtos</p>
      <h2 class="section-title">O que preparamos <em>para você</em></h2>
      <p class="section-subtitle">Escolha uma categoria e conheça nossas opções</p>
      <div class="categorias-grid">
        <div class="categoria-card" onclick="ativarAba('bolos')">
          <div class="icon">🎂</div>
          <h3>Bolos Decorados</h3>
          <p>De 1,5kg a 6,5kg com diversos recheios e coberturas</p>
        </div>
        <div class="categoria-card" onclick="ativarAba('doces')">
          <div class="icon">🍬</div>
          <h3>Doces Finos</h3>
          <p>Brigadeiros, bombons, trufas e muito mais</p>
        </div>
        <div class="categoria-card" onclick="ativarAba('kits')">
          <div class="icon">🎁</div>
          <h3>Kits para Festas</h3>
          <p>100 doces em 4 sabores a partir de R$ 175</p>
        </div>
        <div class="categoria-card" onclick="ativarAba('recheios')">
          <div class="icon">🍰</div>
          <h3>Recheios</h3>
          <p>Mais de 45 opções para o seu bolo</p>
        </div>
        <div class="categoria-card" onclick="ativarAba('personalizados')">
          <div class="icon">⭐</div>
          <h3>Personalizados</h3>
          <p>Pirulitos, pães de mel, cupcakes e mais</p>
        </div>
        <div class="categoria-card" onclick="ativarAba('bolos')">
          <div class="icon">🏆</div>
          <h3>Bolos Especiais</h3>
          <p>Charge, Floresta Negra, Marta Rocha e Napolitano</p>
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Add ativarAba JS stub**

In the `<script>` at end of body, add before the closing `</script>`:

```javascript

// ===== ATIVAR ABA DO CATALOGO =====
function ativarAba(aba) {
  const section = document.getElementById('cardapio');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    // Tab activation will be wired in Task 4
    const btn = document.querySelector(`[data-tab="${aba}"]`);
    if (btn) btn.click();
  }
}
```

- [ ] **Step 3: Verify in browser**

Check:
- Sobre section shows with text on right, image placeholder on left
- Decorative quote with gold left border
- Categorias section has 6 cards in 3-column grid (desktop), 2 columns on mobile
- Cards have hover effect (lift + shadow)
- Clicking a card scrolls but no error (catalog not built yet)

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: sobre section with brand story, categorias grid with 6 clickable cards"
```

---

### Task 4: Catalogo — tab system + Bolos tab

Build the tabbed catalog section with full tab switching logic and the complete Bolos tab rendered from DADOS.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Catalogo HTML shell and Bolos tab**

Insert after the categorias `</section>`:

```html
  <!-- CATALOGO -->
  <section class="catalogo section-padding" id="cardapio">
    <div class="container">
      <div class="text-center">
        <p class="section-label">Cardápio Completo</p>
        <h2 class="section-title">Escolha o que há <em>de melhor</em></h2>
        <p class="section-subtitle">Navegue pelas categorias e encontre os sabores perfeitos para sua ocasião</p>
      </div>

      <div class="tabs-nav" role="tablist">
        <button class="tab-btn active" data-tab="bolos" role="tab" aria-selected="true">Bolos</button>
        <button class="tab-btn" data-tab="doces" role="tab" aria-selected="false">Doces</button>
        <button class="tab-btn" data-tab="kits" role="tab" aria-selected="false">Kits</button>
        <button class="tab-btn" data-tab="recheios" role="tab" aria-selected="false">Recheios</button>
        <button class="tab-btn" data-tab="personalizados" role="tab" aria-selected="false">Personalizados</button>
      </div>

      <!-- BOLOS TAB -->
      <div class="tab-panel active" id="tab-bolos" role="tabpanel">
        <div id="bolos-content"></div>

        <div class="bolo-especial">
          <h3>🌟 Bolos Especiais — já com 2 recheios</h3>
          <div id="bolos-especiais-content"></div>
        </div>

        <div class="bolo-nota">
          <strong>Coberturas disponíveis para bolos com 2 recheios:</strong> Brigadeiro branco ou preto · Ganache branco ou preto · Marshmallow limão ou baunilha
          <br><br>
          <strong>Observação:</strong> Bolos coloridos ou personalizados têm acréscimo no valor. Consulte no ato da encomenda.
        </div>
      </div>

      <!-- DOCES TAB (placeholder for Task 5) -->
      <div class="tab-panel" id="tab-doces" role="tabpanel">
        <div id="doces-content"></div>
      </div>

      <!-- KITS TAB (placeholder for Task 5) -->
      <div class="tab-panel" id="tab-kits" role="tabpanel">
        <div id="kits-content"></div>
      </div>

      <!-- RECHEIOS TAB (placeholder for Task 5) -->
      <div class="tab-panel" id="tab-recheios" role="tabpanel">
        <div id="recheios-content"></div>
      </div>

      <!-- PERSONALIZADOS TAB (placeholder for Task 5) -->
      <div class="tab-panel" id="tab-personalizados" role="tabpanel">
        <div id="personalizados-content"></div>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Add tab switching + Bolos rendering JS**

In the `<script>` at end of body, add before the closing `</script>`:

```javascript

// ===== TABS =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected','true');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ===== RENDER BOLOS =====
function renderBolos() {
  const container = document.getElementById('bolos-content');
  container.innerHTML = DADOS.bolos.map(bolo => {
    const badges = [
      `${bolo.peso}`,
      `${bolo.pessoas} pessoas`,
      bolo.diametro ? `Ø ${bolo.diametro}` : '',
      `${bolo.fatias} fatias`
    ].filter(Boolean);

    const items = bolo.coberturas.map(c =>
      `<div class="bolo-item"><span>${c.nome}</span><span>${c.preco}</span></div>`
    ).join('');

    const msg = encodeURIComponent(`Olá! Gostaria de encomendar um bolo de ${bolo.peso}. Poderia me ajudar? 🎂`);

    return `
      <div class="bolo-card">
        <div class="bolo-header">
          <h3>Bolo ${bolo.peso}</h3>
          <div class="bolo-badges">${badges.map(b => `<span class="bolo-badge">${b}</span>`).join('')}</div>
        </div>
        <div class="bolo-lista">${items}</div>
        <a href="https://wa.me/${DADOS.empresa.whatsapp}?text=${msg}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="width:100%;justify-content:center;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Encomendar este bolo
        </a>
      </div>
    `;
  }).join('');

  // Bolos especiais
  const especiais = document.getElementById('bolos-especiais-content');
  especiais.innerHTML = DADOS.bolosEspeciais.map(b =>
    `<div style="padding:8px 0;border-bottom:1px solid var(--borda);">
      <strong style="color:var(--marrom);">${b.nome}</strong>
      <span style="color:var(--grafite);font-size:0.85rem;"> — ${b.recheios}</span>
    </div>`
  ).join('');
}

renderBolos();
```

- [ ] **Step 3: Verify in browser**

Check:
- Tab bar shows 5 tabs, "Bolos" active by default
- Clicking tabs switches content with fade animation
- Bolos tab shows 5 size cards with all prices
- Bolos especiais section shows 4 special cakes
- "Encomendar este bolo" buttons open WhatsApp with pre-filled message
- Mobile: tabs scroll horizontally, price list stacks well

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: tabbed catalog with complete Bolos tab and all pricing data"
```

---

### Task 5: Catalogo — Doces, Kits, Recheios, Personalizados tabs

Render the remaining 4 tabs from DADOS.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add rendering functions for all remaining tabs**

In the `<script>` at end of body, add before the closing `</script>`:

```javascript

// ===== RENDER DOCES =====
function renderDoces() {
  const container = document.getElementById('doces-content');

  function renderGrupo(titulo, items) {
    const cards = items.map(d => {
      const msg = encodeURIComponent(`Olá! Gostaria de encomendar: ${d.nome}. Poderia me passar mais informações? 🍬`);
      const p50 = d.p50 ? `<span>50 un: <strong>${d.p50}</strong></span>` : '';
      return `
        <div class="doce-card" data-nome="${d.nome.toLowerCase()}">
          <h4>${d.nome}</h4>
          <div class="doce-precos">
            <span>100 un: <strong>${d.p100}</strong></span>
            ${p50}
          </div>
          <a href="https://wa.me/${DADOS.empresa.whatsapp}?text=${msg}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">Pedir este doce</a>
        </div>
      `;
    }).join('');
    return `<h3 class="doces-grupo-titulo">${titulo}</h3><div class="doces-grid">${cards}</div>`;
  }

  container.innerHTML = `
    <div class="doces-filter">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="text" id="doces-search" placeholder="Buscar doce por nome..." oninput="filtrarDoces(this.value)">
    </div>
    <div id="doces-lista">
      ${renderGrupo('Doces Tradicionais', DADOS.doces.grupo1)}
      ${renderGrupo('Novidades & Especiais', DADOS.doces.grupo2)}
    </div>
  `;
}

function filtrarDoces(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.doce-card').forEach(card => {
    card.style.display = card.dataset.nome.includes(q) ? '' : 'none';
  });
}

// ===== RENDER KITS =====
function renderKits() {
  const container = document.getElementById('kits-content');
  container.innerHTML = `
    <div class="kits-grid">
      ${DADOS.kits.map(kit => {
        const msg = encodeURIComponent(`Olá! Gostaria de encomendar o ${kit.nome} (${kit.preco}). Poderia me ajudar com os sabores? 🎁`);
        return `
          <div class="kit-card">
            <h3>${kit.nome}</h3>
            <div class="kit-preco">${kit.preco}</div>
            <p class="kit-desc">${kit.descricao}</p>
            <div class="kit-sabores">
              <h4>Sabores disponíveis</h4>
              <div class="kit-sabores-lista">
                ${kit.sabores.map(s => `<span>${s}</span>`).join('')}
              </div>
            </div>
            <a href="https://wa.me/${DADOS.empresa.whatsapp}?text=${msg}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="width:100%;justify-content:center;">Montar meu kit</a>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ===== RENDER RECHEIOS =====
function renderRecheios() {
  const container = document.getElementById('recheios-content');
  container.innerHTML = `
    <p style="color:var(--grafite);margin-bottom:24px;font-size:0.95rem;">Escolha 2 recheios para o seu bolo. Todos os sabores abaixo estão disponíveis:</p>
    <div class="recheios-grid">
      ${DADOS.recheios.map(r => `<div class="recheio-pill">${r}</div>`).join('')}
    </div>
    <div class="bolo-especial" style="margin-top:32px;">
      <h3>🌟 Bolos Especiais — combinações clássicas com 2 recheios</h3>
      ${DADOS.bolosEspeciais.map(b =>
        `<div style="padding:8px 0;border-bottom:1px solid var(--borda);">
          <strong style="color:var(--marrom);">${b.nome}</strong>
          <span style="color:var(--grafite);font-size:0.85rem;"> — ${b.recheios}</span>
        </div>`
      ).join('')}
    </div>
  `;
}

// ===== RENDER PERSONALIZADOS =====
function renderPersonalizados() {
  const container = document.getElementById('personalizados-content');
  const msg = encodeURIComponent('Olá! Gostaria de consultar valores para produtos personalizados. Poderia me ajudar? ✨');
  container.innerHTML = `
    <div class="personalizados-grid">
      ${DADOS.personalizados.map(p => `
        <div class="personalizado-card">
          <div class="icon">${p.icone}</div>
          <h4>${p.nome}</h4>
        </div>
      `).join('')}
    </div>
    <div style="text-align:center;margin-top:28px;">
      <p style="color:var(--grafite);margin-bottom:16px;font-style:italic;">Para consultar valores, envie o tema ou foto de inspiração pelo WhatsApp.</p>
      <a href="https://wa.me/${DADOS.empresa.whatsapp}?text=${msg}" target="_blank" rel="noopener" class="btn btn-whatsapp">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Consultar personalizado
      </a>
    </div>
  `;
}

// ===== INIT ALL TABS =====
renderDoces();
renderKits();
renderRecheios();
renderPersonalizados();
```

- [ ] **Step 2: Verify in browser**

Check:
- Doces tab: search input filters cards in real-time, 2-column grid on desktop, 1-column mobile, all prices correct, WhatsApp buttons work
- Kits tab: 3 featured kit cards with prices, flavor lists, and CTA buttons
- Recheios tab: 46 pills in 3-column grid, special cakes section below
- Personalizados tab: 6 product cards with icons, WhatsApp CTA
- Category cards from previous task now scroll to catalog AND activate correct tab

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: complete catalog — doces, kits, recheios, personalizados tabs with search filter"
```

---

### Task 6: Como Pedir + Configurador WhatsApp

Add the step-by-step ordering guide and the smart order form that builds a WhatsApp message.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Como Pedir + Configurador HTML**

Insert after the catalogo `</section>` (before `</main>`):

```html
  <!-- COMO PEDIR -->
  <section class="como-pedir section-padding" id="como-pedir">
    <div class="container text-center">
      <p class="section-label">Passo a Passo</p>
      <h2 class="section-title">Como fazer <em>seu pedido</em></h2>
      <p class="section-subtitle">É simples, rápido e todo o atendimento é personalizado</p>
      <div class="passos">
        <div class="passo">
          <div class="passo-num">1</div>
          <h4>Escolha a categoria</h4>
          <p>Bolos, doces, kits ou personalizados</p>
        </div>
        <div class="passo">
          <div class="passo-num">2</div>
          <h4>Defina os detalhes</h4>
          <p>Sabores, quantidades e tamanho</p>
        </div>
        <div class="passo">
          <div class="passo-num">3</div>
          <h4>Informe a data</h4>
          <p>Data e horário do seu evento</p>
        </div>
        <div class="passo">
          <div class="passo-num">4</div>
          <h4>Envie pelo WhatsApp</h4>
          <p>Mensagem pronta em um clique</p>
        </div>
        <div class="passo">
          <div class="passo-num">5</div>
          <h4>Atendimento especial</h4>
          <p>Retornamos com carinho e agilidade</p>
        </div>
      </div>
      <div style="margin-top:40px;">
        <a href="#configurador" class="btn btn-whatsapp">Fazer meu pedido agora</a>
      </div>
    </div>
  </section>

  <!-- CONFIGURADOR -->
  <section class="configurador section-padding" id="configurador">
    <div class="container text-center">
      <p class="section-label">Monte Seu Pedido</p>
      <h2 class="section-title">Envie sua encomenda <em>pelo WhatsApp</em></h2>
      <p class="section-subtitle">Preencha os dados abaixo e clique para enviar — a mensagem vai pronta!</p>
    </div>
    <div class="config-form" id="config-form">
      <div class="form-grid">
        <div class="form-group">
          <label for="cfg-nome">Seu nome</label>
          <input type="text" id="cfg-nome" placeholder="Nome completo">
        </div>
        <div class="form-group">
          <label for="cfg-tel">Seu telefone</label>
          <input type="tel" id="cfg-tel" placeholder="(00) 00000-0000">
        </div>
        <div class="form-group">
          <label for="cfg-tipo">Tipo de encomenda</label>
          <select id="cfg-tipo" onchange="toggleCamposCondicionais()">
            <option value="">Selecione...</option>
            <option value="Bolo">Bolo</option>
            <option value="Doces">Doces</option>
            <option value="Kit de doces">Kit de doces</option>
            <option value="Personalizado">Personalizado</option>
          </select>
        </div>
        <div class="form-group">
          <label for="cfg-data">Data do evento</label>
          <input type="date" id="cfg-data">
        </div>
        <div class="form-group">
          <label for="cfg-pessoas">Quantidade de pessoas</label>
          <input type="number" id="cfg-pessoas" placeholder="Ex: 50" min="1">
        </div>

        <!-- Campos condicionais: Bolo -->
        <div class="conditional-fields" id="campos-bolo">
          <div class="form-group">
            <label for="cfg-tamanho">Tamanho do bolo</label>
            <select id="cfg-tamanho">
              <option value="">Selecione...</option>
              <option value="1,5 kg (~15 fatias)">1,5 kg — ~15 fatias</option>
              <option value="2,5 kg (~30 fatias)">2,5 kg — ~30 fatias</option>
              <option value="3,5 kg (~40 fatias)">3,5 kg — ~40 fatias</option>
              <option value="4,5 kg (~60 fatias)">4,5 kg — ~60 fatias</option>
              <option value="6,5 kg (~90 fatias)">6,5 kg — ~90 fatias</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cfg-recheio1">Recheio 1</label>
            <select id="cfg-recheio1">
              <option value="">Selecione o recheio...</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cfg-recheio2">Recheio 2</label>
            <select id="cfg-recheio2">
              <option value="">Selecione o recheio...</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cfg-cobertura">Cobertura</label>
            <select id="cfg-cobertura">
              <option value="">Selecione a cobertura...</option>
              <option>Chantilly</option>
              <option>Ganache escorrido</option>
              <option>Marshmallow</option>
              <option>Ganache no bolo todo</option>
              <option>Brigadeiro no bolo todo</option>
              <option>Brigadeiro com raspas de chocolate e laço decorativo</option>
              <option>Leite ninho</option>
              <option>Naked cake (com frutas)</option>
            </select>
          </div>
        </div>

        <!-- Campos condicionais: Doces -->
        <div class="conditional-fields" id="campos-doces">
          <div class="form-group full">
            <label for="cfg-sabores-doces">Sabores e quantidades desejados</label>
            <textarea id="cfg-sabores-doces" placeholder="Ex: 50 brigadeiros, 50 beijinhos de coco..."></textarea>
          </div>
        </div>

        <!-- Campos condicionais: Kit -->
        <div class="conditional-fields" id="campos-kit">
          <div class="form-group">
            <label for="cfg-tipo-kit">Tipo de kit</label>
            <select id="cfg-tipo-kit">
              <option value="">Selecione...</option>
              <option>Kit Doces Simples — R$ 175,00</option>
              <option>Kit Doces Recheados — R$ 230,00</option>
              <option>Kit Bombons e Trufas — R$ 265,00</option>
            </select>
          </div>
        </div>

        <!-- Campos condicionais: Personalizado -->
        <div class="conditional-fields" id="campos-personalizado">
          <div class="form-group full">
            <label for="cfg-desc-pers">Descreva o que precisa (tema, foto de inspiração, etc.)</label>
            <textarea id="cfg-desc-pers" placeholder="Descreva o produto desejado e envie fotos de referência pelo WhatsApp..."></textarea>
          </div>
        </div>

        <div class="form-group full">
          <label for="cfg-obs">Observações</label>
          <textarea id="cfg-obs" placeholder="Alguma informação adicional?"></textarea>
        </div>
      </div>

      <div style="text-align:center;margin-top:24px;">
        <button type="button" class="btn btn-whatsapp" onclick="enviarWhatsApp()" style="font-size:1.05rem;padding:16px 36px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Enviar Pedido no WhatsApp
        </button>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Add configurador JS**

In the `<script>`, add before closing `</script>`:

```javascript

// ===== POPULATE RECHEIOS SELECTS =====
function populateRecheios() {
  ['cfg-recheio1', 'cfg-recheio2'].forEach(id => {
    const sel = document.getElementById(id);
    DADOS.recheios.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r; opt.textContent = r;
      sel.appendChild(opt);
    });
  });
}
populateRecheios();

// ===== CONDITIONAL FIELDS =====
function toggleCamposCondicionais() {
  const tipo = document.getElementById('cfg-tipo').value;
  document.querySelectorAll('.conditional-fields').forEach(el => el.classList.remove('visible'));
  const map = { 'Bolo': 'campos-bolo', 'Doces': 'campos-doces', 'Kit de doces': 'campos-kit', 'Personalizado': 'campos-personalizado' };
  if (map[tipo]) document.getElementById(map[tipo]).classList.add('visible');
}

// ===== BUILD WHATSAPP MESSAGE =====
function enviarWhatsApp() {
  const nome = document.getElementById('cfg-nome').value.trim();
  const tel = document.getElementById('cfg-tel').value.trim();
  const tipo = document.getElementById('cfg-tipo').value;
  const data = document.getElementById('cfg-data').value;
  const pessoas = document.getElementById('cfg-pessoas').value;
  const obs = document.getElementById('cfg-obs').value.trim();

  if (!nome) { alert('Por favor, informe seu nome.'); return; }
  if (!tipo) { alert('Por favor, selecione o tipo de encomenda.'); return; }

  let msg = `Olá! Gostaria de fazer uma encomenda 🎂\n\n`;
  msg += `*Nome:* ${nome}\n`;
  if (tel) msg += `*Telefone:* ${tel}\n`;
  msg += `*Tipo:* ${tipo}\n`;
  if (data) { const [y,m,d] = data.split('-'); msg += `*Data do evento:* ${d}/${m}/${y}\n`; }
  if (pessoas) msg += `*Pessoas:* ${pessoas}\n`;

  if (tipo === 'Bolo') {
    const tam = document.getElementById('cfg-tamanho').value;
    const r1 = document.getElementById('cfg-recheio1').value;
    const r2 = document.getElementById('cfg-recheio2').value;
    const cob = document.getElementById('cfg-cobertura').value;
    if (tam) msg += `*Tamanho:* ${tam}\n`;
    if (r1) msg += `*Recheio 1:* ${r1}\n`;
    if (r2) msg += `*Recheio 2:* ${r2}\n`;
    if (cob) msg += `*Cobertura:* ${cob}\n`;
  } else if (tipo === 'Doces') {
    const sab = document.getElementById('cfg-sabores-doces').value.trim();
    if (sab) msg += `*Sabores/Qtd:* ${sab}\n`;
  } else if (tipo === 'Kit de doces') {
    const kit = document.getElementById('cfg-tipo-kit').value;
    if (kit) msg += `*Kit:* ${kit}\n`;
  } else if (tipo === 'Personalizado') {
    const desc = document.getElementById('cfg-desc-pers').value.trim();
    if (desc) msg += `*Descrição:* ${desc}\n`;
  }

  if (obs) msg += `*Observações:* ${obs}\n`;
  msg += `\nAguardo retorno! 😊`;

  window.open(`https://wa.me/${DADOS.empresa.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}
```

- [ ] **Step 3: Verify in browser**

Check:
- "Como Pedir" shows 5 numbered steps in a row (desktop) or stacked (mobile)
- Configurador form: selecting "Bolo" shows size/recheio/cobertura selects; "Doces" shows textarea; "Kit" shows kit select; "Personalizado" shows textarea
- Recheio dropdowns populated with all 46 options
- Click "Enviar" without name shows alert
- Fill form and click: WhatsApp opens with formatted message

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: how-to-order steps and smart WhatsApp order builder with conditional fields"
```

---

### Task 7: Diferenciais + Avaliacoes + Galeria

Add the features grid, testimonials carousel, and Instagram gallery placeholder.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add three sections HTML**

Insert after the configurador `</section>`:

```html
  <!-- DIFERENCIAIS -->
  <section class="diferenciais section-padding">
    <div class="container text-center">
      <p class="section-label">Nossos Diferenciais</p>
      <h2 class="section-title">Por que escolher a <em>Maria Alice & Mirian?</em></h2>
      <div class="decorative-line"></div>
      <div class="diferenciais-grid">
        <div class="diferencial-card">
          <div class="icon">🕰️</div>
          <h3>25 anos de tradição</h3>
          <p>Desde 2000 adoçando os momentos mais especiais de Itápolis e região com qualidade e dedicação.</p>
        </div>
        <div class="diferencial-card">
          <div class="icon">🎉</div>
          <h3>Festas e eventos</h3>
          <p>Casamentos, aniversários, formaturas e confraternizações — cuidamos de cada detalhe do seu evento.</p>
        </div>
        <div class="diferencial-card">
          <div class="icon">⭐</div>
          <h3>Personalizados</h3>
          <p>Bolos e doces feitos sob medida para o seu tema, com acabamento impecável e sabor inesquecível.</p>
        </div>
        <div class="diferencial-card">
          <div class="icon">💛</div>
          <h3>Atendimento com carinho</h3>
          <p>Cada cliente é especial. Ajudamos você a escolher os sabores e quantidades ideais para sua ocasião.</p>
        </div>
        <div class="diferencial-card">
          <div class="icon">✅</div>
          <h3>Ingredientes de qualidade</h3>
          <p>Selecionamos os melhores ingredientes para garantir sabor, textura e frescor em cada produto.</p>
        </div>
        <div class="diferencial-card">
          <div class="icon">🧁</div>
          <h3>Produção artesanal</h3>
          <p>Cada bolo e doce é preparado à mão, com técnicas tradicionais e o capricho que só o artesanal oferece.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- AVALIACOES -->
  <section class="avaliacoes section-padding">
    <div class="container text-center">
      <p class="section-label">Depoimentos</p>
      <h2 class="section-title">O que nossos clientes <em>dizem</em></h2>
      <div class="decorative-line"></div>
    </div>
    <div class="container">
      <div class="avaliacoes-grid" id="avaliacoes-grid"></div>
    </div>
  </section>

  <!-- GALERIA -->
  <section class="galeria section-padding">
    <div class="container text-center">
      <p class="section-label">Inspirações</p>
      <h2 class="section-title">Confira nossas <em>criações</em></h2>
      <p class="section-subtitle">Siga-nos no Instagram <a href="https://www.instagram.com/marialicemirianbolosedoces" target="_blank" rel="noopener" style="color:var(--rosa);font-weight:600;">@marialicemirianbolosedoces</a></p>
      <div class="galeria-grid">
        <div class="galeria-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
        <div class="galeria-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
        <div class="galeria-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
        <div class="galeria-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
        <div class="galeria-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
        <div class="galeria-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
        <div class="galeria-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
        <div class="galeria-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>
      </div>
      <div style="margin-top:28px;">
        <a href="https://www.instagram.com/marialicemirianbolosedoces" target="_blank" rel="noopener" class="btn btn-outline">Seguir no Instagram</a>
      </div>
    </div>
  </section>
```

- [ ] **Step 2: Add avaliacoes rendering JS**

In the `<script>`, add before closing `</script>`:

```javascript

// ===== RENDER AVALIACOES =====
function renderAvaliacoes() {
  const container = document.getElementById('avaliacoes-grid');
  container.innerHTML = DADOS.avaliacoes.map(a => `
    <div class="avaliacao-card">
      <div class="avaliacao-header">
        <div class="avaliacao-avatar">${a.iniciais}</div>
        <div>
          <div class="avaliacao-nome">${a.nome}</div>
          <div class="avaliacao-estrelas">★★★★★</div>
        </div>
      </div>
      <p class="avaliacao-texto">"${a.texto}"</p>
    </div>
  `).join('');
}
renderAvaliacoes();
```

- [ ] **Step 3: Verify in browser**

Check:
- 6 differential cards in 3-column grid (desktop), 2-column (mobile)
- Cards have gold icons and hover effect
- 4 testimonial cards with scroll-snap on mobile (swipe works)
- Stars are gold, quotes are italic
- 8 gallery placeholder items in 4-column grid (desktop), 2 (mobile)
- Hover shows overlay effect on gallery items
- Instagram link works

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: diferenciais grid, testimonials carousel, instagram gallery placeholders"
```

---

### Task 8: Localizacao + FAQ + Footer

Add the location/contact section with map, FAQ accordion, and complete footer.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add Location + FAQ + Footer HTML**

Insert after the galeria `</section>` and before `</main>`:

```html
  <!-- LOCALIZACAO -->
  <section class="localizacao section-padding" id="contato">
    <div class="container">
      <div class="text-center" style="margin-bottom:40px;">
        <p class="section-label">Localização & Contato</p>
        <h2 class="section-title">Venha nos <em>visitar</em></h2>
        <p class="section-subtitle">Atendemos Itápolis e região com carinho e dedicação</p>
      </div>
      <div class="localizacao-grid">
        <div class="localizacao-info">
          <div class="info-item">
            <div class="icon-circle">📍</div>
            <div><strong>Endereço</strong><p>R. Dr. Fouad Mucari, 1252 – Jardim Campestre, Itápolis – SP</p></div>
          </div>
          <div class="info-item">
            <div class="icon-circle">📱</div>
            <div><strong>WhatsApp</strong><p><a href="https://wa.me/5516997126577" target="_blank" rel="noopener" style="color:var(--rosa);font-weight:500;">(16) 99712-6577</a></p></div>
          </div>
          <div class="info-item">
            <div class="icon-circle">📞</div>
            <div><strong>Telefone fixo</strong><p>(16) 3262-8573</p></div>
          </div>
          <div class="info-item">
            <div class="icon-circle">📷</div>
            <div><strong>Instagram</strong><p><a href="https://www.instagram.com/marialicemirianbolosedoces" target="_blank" rel="noopener" style="color:var(--rosa);font-weight:500;">@marialicemirianbolosedoces</a></p></div>
          </div>
          <div class="info-item">
            <div class="icon-circle">👍</div>
            <div><strong>Facebook</strong><p><a href="https://www.facebook.com/marialicemirianbolosedoces" target="_blank" rel="noopener" style="color:var(--rosa);font-weight:500;">Maria Alice & Mirian</a></p></div>
          </div>

          <div class="horarios-card">
            <h4 style="font-family:'Playfair Display',serif;font-size:1rem;color:var(--marrom);margin-bottom:12px;">Horário de Funcionamento</h4>
            <div class="horario-linha"><span class="dia">Terça a Sexta</span><span class="hora">08:00 às 18:00</span></div>
            <div class="horario-linha"><span class="dia">Sábado</span><span class="hora">08:00 às 16:00</span></div>
            <div class="horario-linha"><span class="dia">Domingo e Segunda</span><span class="fechado">Fechado</span></div>
          </div>

          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <a href="https://www.google.com/maps/place/R.+Dr.+Fouad+Mucari,+1252+-+Jardim+Campestre,+It%C3%A1polis+-+SP" target="_blank" rel="noopener" class="btn btn-outline btn-sm">📍 Como chegar</a>
            <a href="https://wa.me/5516997126577?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20%F0%9F%8E%82" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">📱 Chamar no WhatsApp</a>
          </div>
        </div>

        <div class="localizacao-mapa">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.5!2d-48.8128!3d-21.5951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+Dr.+Fouad+Mucari%2C+1252+-+Itapolis!5e0!3m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização Maria Alice & Mirian" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq section-padding" id="faq">
    <div class="container text-center">
      <p class="section-label">Dúvidas</p>
      <h2 class="section-title">Perguntas <em>Frequentes</em></h2>
      <div class="decorative-line"></div>
    </div>
    <div class="container">
      <div class="faq-lista" id="faq-lista"></div>
    </div>
  </section>

  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h4 style="font-family:'Playfair Display',serif;font-size:1.3rem;font-style:italic;margin-bottom:8px;">Maria Alice & Mirian</h4>
          <p>Bolos e doces artesanais com 25 anos de tradição em Itápolis-SP. Encomendas para casamentos, aniversários e eventos especiais.</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/marialicemirianbolosedoces" target="_blank" rel="noopener" aria-label="Instagram">📷</a>
            <a href="https://www.facebook.com/marialicemirianbolosedoces" target="_blank" rel="noopener" aria-label="Facebook">👍</a>
            <a href="https://wa.me/5516997126577" target="_blank" rel="noopener" aria-label="WhatsApp">📱</a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Navegação</h4>
          <a href="#sobre">Sobre nós</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#como-pedir">Como pedir</a>
          <a href="#configurador">Montar pedido</a>
          <a href="#contato">Contato</a>
          <a href="#faq">Dúvidas</a>
        </div>
        <div>
          <h4>Contato</h4>
          <p>R. Dr. Fouad Mucari, 1252<br>Jardim Campestre<br>Itápolis – SP</p>
          <p style="margin-top:8px;">(16) 99712-6577<br>(16) 3262-8573</p>
        </div>
        <div>
          <h4>Horários</h4>
          <p>Terça a Sexta<br>08:00 às 18:00</p>
          <p style="margin-top:8px;">Sábado<br>08:00 às 16:00</p>
          <p style="margin-top:8px;color:var(--rosa-claro);">Dom. e Seg.: fechado</p>
        </div>
      </div>

      <div class="footer-cta">
        <a href="https://wa.me/5516997126577?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20%F0%9F%8E%82" target="_blank" rel="noopener" class="btn btn-whatsapp" style="font-size:1rem;">
          Faça sua encomenda pelo WhatsApp
        </a>
      </div>
      <p class="footer-bottom">© 2026 Maria Alice & Mirian — Bolos e Doces. Todos os direitos reservados.</p>
    </div>
  </footer>
```

- [ ] **Step 2: Remove the old `</main>` and placeholder comment**

Delete the line `<!-- Remaining sections placeholder -->` and any duplicate `</main>` tag that was left from Task 2. The `</main>` is now inside the FAQ/Footer block above.

- [ ] **Step 3: Add FAQ rendering JS**

In the `<script>`, add before closing `</script>`:

```javascript

// ===== RENDER FAQ =====
function renderFAQ() {
  const container = document.getElementById('faq-lista');
  container.innerHTML = DADOS.faq.map((item, i) => `
    <div class="faq-item">
      <button class="faq-pergunta" onclick="toggleFAQ(this)" aria-expanded="false">
        <h3>${item.pergunta}</h3>
        <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="faq-resposta">
        <div class="faq-resposta-inner">${item.resposta}</div>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(btn) {
  const item = btn.parentElement;
  const resposta = item.querySelector('.faq-resposta');
  const inner = resposta.querySelector('.faq-resposta-inner');
  const isOpen = item.classList.contains('open');

  // Close all others
  document.querySelectorAll('.faq-item.open').forEach(other => {
    if (other !== item) {
      other.classList.remove('open');
      other.querySelector('.faq-pergunta').setAttribute('aria-expanded','false');
      other.querySelector('.faq-resposta').style.maxHeight = '0';
    }
  });

  if (isOpen) {
    item.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    resposta.style.maxHeight = '0';
  } else {
    item.classList.add('open');
    btn.setAttribute('aria-expanded','true');
    resposta.style.maxHeight = inner.scrollHeight + 'px';
  }
}

renderFAQ();
```

- [ ] **Step 4: Verify in browser**

Check:
- Location section: two columns — contact info left, map right (stacks on mobile)
- Map iframe loads (may show generic location)
- "Como chegar" and "Chamar no WhatsApp" buttons work
- Hours display correctly with "Fechado" in pink
- FAQ: clicking a question opens the answer with smooth animation, clicking again closes it
- Only one FAQ can be open at a time
- Footer: 4-column grid with brand, navigation links, contact, hours
- Footer WhatsApp CTA button works
- Social links in footer work
- Scroll navigation from header links reaches all sections correctly
- Mobile: everything stacks properly, footer becomes single column

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: location with map, FAQ accordion, complete footer — site fully functional"
```

---

### Task 9: Final polish and verification

Review the complete site for consistency, fix any issues, and ensure everything works end-to-end.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add scroll-based animation**

In the `<style>`, add before the closing `</style>`:

```css
    /* ===== SCROLL ANIMATIONS ===== */
    .animate-on-scroll { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
```

In the `<script>`, add before closing `</script>`:

```javascript

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
  document.querySelectorAll('.section-padding').forEach(el => el.classList.add('animate-on-scroll'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}
initAnimations();
```

- [ ] **Step 2: Full site verification checklist**

Open `index.html` in browser. Check every item:

**Desktop (1200px+):**
- [ ] Header: logo, 4 nav links, WhatsApp button, shadow on scroll
- [ ] Hero: two columns, title, subtitle, 2 buttons, 3 badges, image placeholder
- [ ] Sobre: two columns, text + placeholder image
- [ ] Categorias: 3-column grid, 6 cards, click navigates to correct tab
- [ ] Catalogo: 5 tabs switch correctly, Bolos shows 5 sizes with all prices, Doces search works, Kits shows 3 cards, Recheios shows 46 pills, Personalizados shows 6 items
- [ ] Como Pedir: 5 steps in row
- [ ] Configurador: conditional fields work, WhatsApp message builds correctly
- [ ] Diferenciais: 3-column grid
- [ ] Avaliacoes: 4 cards in row
- [ ] Galeria: 4-column grid
- [ ] Localizacao: 2 columns, map, hours, buttons
- [ ] FAQ: accordion works, one-at-a-time
- [ ] Footer: 4 columns, all links work, WhatsApp CTA
- [ ] Floating WhatsApp: bottom-right, pulse animation, tooltip on hover

**Mobile (375px):**
- [ ] Hamburger menu opens/closes drawer
- [ ] Hero stacks vertically, centered text
- [ ] All grids collapse to 1-2 columns
- [ ] Tabs scroll horizontally
- [ ] Form fields are full-width
- [ ] Testimonials scroll-snap works with swipe
- [ ] Footer stacks to single column
- [ ] WhatsApp float doesn't overlap content

**WhatsApp flows:**
- [ ] Header WhatsApp button opens with generic message
- [ ] Hero "Fazer Pedido" opens with order message
- [ ] Each bolo "Encomendar" includes bolo size
- [ ] Each doce "Pedir" includes doce name
- [ ] Each kit "Montar meu kit" includes kit name
- [ ] Configurador builds complete formatted message
- [ ] Floating button opens with generic message

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: scroll animations and full site polish — production ready"
```
