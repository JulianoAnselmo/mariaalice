# Carrinho de Pedidos + Instagram Feed — Design Spec

## Resumo

Adicionar sistema de carrinho ao site existente da Maria Alice & Mirian. O cliente configura cada produto inline (recheios, quantidades, sabores), adiciona ao carrinho, e envia tudo de uma vez pelo WhatsApp com seus dados. Tambem integrar feed do Instagram usando Puppeteer (mesmo padrao do projeto Marieta).

## 1. Sistema de Carrinho

### 1.1 Estrutura de dados do carrinho

Array JS em memoria (nao persiste entre sessoes):

```javascript
let carrinho = [];

// Formato de cada item:
{
  id: Date.now(),        // identificador unico
  tipo: "bolo",          // "bolo" | "doce" | "kit"
  nome: "Bolo 2,5 kg",
  detalhes: {            // varia por tipo
    cobertura: "Ganache no bolo todo",
    recheio1: "Brigadeiro preto",
    recheio2: "Leite ninho",
    // ou para doces:
    quantidade: 100,
    // ou para kits:
    sabores: ["Brigadeiro", "Romance", "Coco", "Leite ninho"]
  },
  preco: "R$ 215,00",    // string formatada
  precoNum: 215           // numerico para soma
}
```

### 1.2 Funcoes do carrinho

- `adicionarAoCarrinho(item)` — adiciona item ao array, atualiza badge e sidebar
- `removerDoCarrinho(id)` — remove por id, atualiza UI
- `atualizarBadge()` — atualiza contador no icone do header
- `abrirCarrinho()` / `fecharCarrinho()` — toggle da sidebar
- `calcularTotal()` — soma precoNum de todos os itens
- `gerarMensagemWhatsApp()` — monta mensagem completa com todos os itens + dados cliente
- `enviarCarrinhoWhatsApp()` — valida nome, gera mensagem, abre wa.me

### 1.3 Modificacoes nos produtos do catalogo

#### Bolos (renderBolos)

Cada card de tamanho de bolo mantem a lista de coberturas com precos. Abaixo da lista, adicionar um painel de configuracao:

- Select "Cobertura" (8 opcoes existentes no DADOS)
- Select "Recheio 1" (46 recheios do DADOS)
- Select "Recheio 2" (46 recheios do DADOS)
- Dois botoes lado a lado:
  - "Pedir agora" (verde WhatsApp — envia so esse bolo no WhatsApp)
  - "Adicionar ao pedido" (rosa — adiciona ao carrinho)
- O preco mostrado atualiza conforme a cobertura selecionada

#### Doces (renderDoces)

Cada card de doce ganha:

- Toggle/segmented control de quantidade: **50 un** | **100 un**
  - Ao trocar, preco exibido atualiza (p50 ou p100)
  - Doces sem opcao de 50un (balas de coco) mostram so o preco unico
- Dois botoes:
  - "Pedir agora" (verde)
  - "Adicionar ao pedido" (rosa)

#### Kits (renderKits)

Cada card de kit ganha:

- 4 selects de sabor, populados com `kit.sabores`
  - Labels: "Sabor 1", "Sabor 2", "Sabor 3", "Sabor 4"
- Dois botoes:
  - "Pedir agora" (verde)
  - "Adicionar ao pedido" (rosa)

#### Personalizados

Sem mudanca — continua com botao "Consultar no WhatsApp" apenas.

#### Recheios

Sem mudanca — e uma secao de referencia, nao de compra.

### 1.4 Icone de carrinho no Header

- Adicionar icone de carrinho (SVG) no header, entre o menu e o botao WhatsApp
- Badge circular rosa com numero de itens (escondido quando 0)
- Clique abre a sidebar do carrinho
- Mobile: icone visivel ao lado do hamburger

### 1.5 Sidebar do Carrinho

- Painel fixo na direita, 320px largura desktop, 100% mobile
- Overlay escuro no fundo (clique fecha)
- Transicao: desliza da direita (transform translateX)
- Z-index acima do header (1001+)

**Conteudo da sidebar:**

```
[X Fechar]

🛒 Seu Pedido (N itens)

--- Lista de itens ---
Para cada item:
  [Nome do produto]
  [Detalhes: cobertura, recheios, sabores, qtd]
  [Preco]                              [🗑 Remover]
  ─────────────────────────────────────

--- Subtotal ---
Estimativa: R$ XXX,00

--- Formulario ---
Nome completo *
Telefone
Data do evento
Observacoes

[  Enviar Pedido no WhatsApp  ] (botao verde grande)
```

**Formulario do carrinho:**

- Nome completo (obrigatorio)
- Telefone (opcional)
- Data do evento (date input, opcional)
- Observacoes (textarea, opcional)

### 1.6 Mensagem WhatsApp gerada pelo carrinho

```
Ola! Gostaria de fazer o seguinte pedido 🎂

*Nome:* [nome]
*Telefone:* [telefone]
*Data do evento:* [data DD/MM/YYYY]

📋 *Itens do pedido:*

1. Bolo 2,5kg — Ganache no bolo todo
   Recheio 1: Brigadeiro preto
   Recheio 2: Leite ninho
   Valor: R$ 215,00

2. Brigadeiro — 100 unidades
   Valor: R$ 150,00

3. Kit Doces Simples
   Sabores: Brigadeiro, Romance, Coco, Leite ninho
   Valor: R$ 175,00

*Observacoes:* [obs]

💰 *Estimativa total:* R$ 540,00

Aguardo retorno! 😊
```

### 1.7 CSS necessario

- `.cart-sidebar` — painel fixo, right: -320px (fechado), right: 0 (aberto)
- `.cart-overlay` — overlay escuro
- `.cart-item` — cada item na lista
- `.cart-badge` — badge no header
- `.cart-form` — formulario no final
- `.qty-toggle` — segmented control para 50/100 unidades nos doces
- `.bolo-config` — painel de configuracao do bolo
- `.kit-config` — painel de selecao de sabores do kit
- `.btn-add-cart` — botao rosa "Adicionar ao pedido"
- Responsivo: sidebar 100% width no mobile

### 1.8 Interacao com o configurador existente

O configurador (secao "Monte seu pedido") continua funcionando independentemente como alternativa. O carrinho e para quem navega o catalogo e vai montando o pedido item a item. O configurador e para quem ja sabe o que quer e prefere preencher um formulario.

## 2. Instagram Feed

### 2.1 Script de scraping

Criar `atualizar-instagram.js` no root do projeto, seguindo o padrao do projeto Marieta (`C:\dev\clientes\marieta\atualizar-instagram.js`):

- Puppeteer + puppeteer-extra-plugin-stealth
- Perfil: `marialicemirianbolosedoces`
- Baixar 9 posts mais recentes
- Salvar imagens em `imagens/instagram/post_1.jpg` ate `post_9.jpg`
- Gerar `imagens/instagram/posts.json` com metadata
- Atualizar inline JS no `index.html` (array `instagramPosts`)

### 2.2 Package.json

Criar `package.json` com dependencias:
- puppeteer
- puppeteer-extra
- puppeteer-extra-plugin-stealth

### 2.3 Modificacoes no index.html — Galeria

Substituir os 8 placeholders SVG da secao galeria por renderizacao dinamica:

- Manter a estrutura `<section class="galeria">`
- Container `<div class="galeria-grid" id="instagramGrid">`
- Array inline `var instagramPosts = [...]` (populado pelo script)
- JS de renderizacao: para cada post, cria `<a>` com imagem + icone Instagram no hover
- Grid: 3 colunas (desktop) / 2 colunas (mobile), gap 12px
- Aspect ratio 1:1 com object-fit cover
- Hover: zoom 1.05 + overlay rosa + icone Instagram

### 2.4 CSS adicional

- `.instagram-item` — aspect-ratio 1, overflow hidden, position relative
- `.instagram-item img` — object-fit cover, transition transform
- `.instagram-item:hover img` — transform scale(1.05)
- `.instagram-item .ig-icon` — overlay centered, opacity 0 -> 1 no hover
- Overlay: rgba(212,96,122,0.3) (rosa, no estilo do site)

### 2.5 GitHub Actions workflow

Criar `.github/workflows/atualizar-instagram.yml`:
- Schedule: diario as 06:00 UTC
- Manual dispatch habilitado
- Steps: checkout, setup node 20, npm install, run script, auto-commit se houver mudancas

### 2.6 Fallback

Se `instagramPosts` estiver vazio ou indefinido, manter os placeholders SVG atuais. O JS verifica antes de renderizar.

## 3. Resumo das mudancas no index.html

### CSS a adicionar:
- Estilos do carrinho (sidebar, overlay, badge, itens, form)
- Estilos dos controles inline (bolo-config, qty-toggle, kit-config, btn-add-cart)
- Estilos do Instagram grid (substituir galeria-item atual)

### HTML a modificar:
- Header: adicionar icone de carrinho com badge
- Sidebar do carrinho: novo bloco HTML antes do footer
- Galeria: substituir placeholders por container dinamico

### JS a adicionar:
- Sistema de carrinho (array, CRUD, sidebar toggle, badge, mensagem WhatsApp)
- Render functions modificadas (renderBolos, renderDoces, renderKits com controles inline)
- Renderizacao do Instagram feed

### JS a modificar:
- `renderBolos()` — adicionar painel de configuracao com selects + botoes
- `renderDoces()` — adicionar toggle 50/100 + botoes
- `renderKits()` — adicionar 4 selects de sabor + botoes

### Novos arquivos:
- `atualizar-instagram.js` — script Puppeteer
- `package.json` — dependencias Node
- `.github/workflows/atualizar-instagram.yml` — automacao
- `imagens/instagram/` — diretorio para fotos (criado pelo script)
