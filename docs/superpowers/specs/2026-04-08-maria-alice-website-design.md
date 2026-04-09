# Maria Alice & Mirian — Site Institucional de Alta Conversao

## Resumo

Site institucional single-page para "Maria Alice & Mirian — Bolos e Doces", confeitaria com 25 anos de tradicao em Itapolis-SP. O site e uma landing page de alta conversao focada em gerar pedidos e orcamentos via WhatsApp. Nao ha checkout online — todo fechamento acontece no WhatsApp.

## Decisoes Tecnicas

| Decisao | Escolha |
|---------|---------|
| Stack | HTML/CSS/JS puro, arquivo unico |
| Imagens | Placeholders elegantes com gradientes/icones |
| Catalogo | Abas por categoria dentro da pagina |
| Hospedagem | Qualquer servidor estatico (Netlify, Vercel, etc) |
| Dados | Objeto JS separado no topo do arquivo para edicao facil |
| Fontes | Google Fonts: Playfair Display + Inter |

## Identidade Visual

### Paleta de cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Rosa principal | `#d4607a` | CTAs, destaques, titulos de secao, bordas ativas |
| Rosa claro | `#e8849a` | Hover, gradientes, acentos |
| Rosa off-white | `#fdf2f4` | Fundos de secoes alternadas, hero |
| Nude/champagne | `#fdf8f5` | Fundos secundarios, cards |
| Dourado suave | `#c9a96e` | Separadores, icones decorativos, detalhes premium |
| Marrom escuro | `#4a3728` | Texto principal, titulos |
| Grafite suave | `#7a6b63` | Texto secundario, descricoes |
| Verde WhatsApp | `#25D366` | Botoes de WhatsApp |
| Branco | `#ffffff` | Fundos limpos, cards |

### Tipografia

- **Titulos**: Playfair Display (serifada), peso 600/700, italico para destaques emocionais
- **Corpo**: Inter (sans-serif), peso 400/500/600, excelente legibilidade em mobile
- **Tamanhos mobile-first**: hero title 28px, section titles 24px, body 16px, small 14px

### Principios visuais

- Muito respiro (padding generoso, espacamento entre secoes)
- Bordas suaves (border-radius 12-20px em cards)
- Sombras leves (box-shadow sutil para profundidade)
- Gradientes suaves nos fundos (rosa -> off-white)
- Secoes alternando entre fundo branco e nude/champagne
- Separadores decorativos finos com dourado
- Zero poluicao visual — cada elemento respira

## Arquitetura de Secoes

### 1. Header Fixo

- Logo a esquerda (imagem do logo fornecido)
- Menu horizontal com links de scroll suave: Sobre, Cardapio, Como Pedir, Contato
- Botao WhatsApp verde a direita no header
- Fundo branco com sombra sutil no scroll
- **Mobile**: hamburger menu com drawer lateral, logo centralizado, icone WhatsApp visivel

### 2. Hero Section

- Fundo: gradiente suave rosa off-white (#fdf2f4 -> #fce8ec)
- Badge superior: "Desde 2000 em Itapolis" (texto pequeno, uppercase, tracking largo)
- Titulo principal: "Doces que marcam seus momentos mais especiais" (Playfair Display, italico)
- Subtitulo: "Ha 25 anos criando bolos, doces finos e encomendas com carinho artesanal para casamentos, aniversarios e celebracoes em Itapolis e regiao"
- 2 botoes:
  - "Fazer Pedido no WhatsApp" (verde #25D366, abre wa.me com mensagem pre-preenchida)
  - "Ver Cardapio" (outline rosa, scroll suave ate secao catalogo)
- 3 badges de prova social abaixo dos botoes:
  - "25 anos de tradicao"
  - "Producao artesanal"
  - "Ingredientes selecionados"
- Area de imagem placeholder: gradiente elegante com icone de bolo estilizado

### 3. Secao Sobre

- Fundo branco
- Label superior: "Nossa Historia" (uppercase, rosa, tracking largo)
- Titulo: "Tradição, carinho e sabor em cada detalhe"
- Texto emocional (~150 palavras) sobre:
  - 25 anos de historia em Itapolis
  - Fundadoras Maria Alice e Mirian
  - Atendimento personalizado
  - Qualidade dos ingredientes
  - Capricho artesanal
  - Referencia local em bolos e doces para festas
- Placeholder para foto da confeitaria/equipe
- Separador decorativo dourado

### 4. Secao Categorias

- Fundo nude/champagne (#fdf8f5)
- Label: "Nossos Produtos"
- Titulo: "O que preparamos para voce"
- Grid de 4 colunas (desktop) / 2 colunas (mobile) com cards:
  - **Bolos decorados** — placeholder com icone de bolo
  - **Doces finos** — placeholder com icone de doce
  - **Bombons e trufas** — placeholder com icone de bombom
  - **Kits para festas** — placeholder com icone de kit
  - **Personalizados** — placeholder com icone de estrela
  - **Recheios** — placeholder com icone de camadas
- Cada card: hover com elevacao, border-radius 16px, sombra suave
- Clique no card faz scroll ate o catalogo e ativa a aba correspondente

### 5. Catalogo com Abas

- Fundo branco
- Label: "Cardapio Completo"
- Titulo: "Escolha o que ha de melhor"
- Barra de abas: **Bolos** | **Doces** | **Kits** | **Recheios** | **Personalizados**
  - Aba ativa: texto rosa, borda inferior rosa 2px
  - Mobile: abas com scroll horizontal
- Transicao suave entre abas (fade)

#### Aba Bolos
- Subgrupos por tamanho (1,5kg, 2,5kg, 3,5kg, 4,5kg, 6,5kg)
- Cada subgrupo: card com header mostrando peso, pessoas, diametro, fatias
- Lista de coberturas com preco alinhado a direita
- Nota sobre bolos especiais (Charge, Floresta Negra, Marta Rocha, Napolitano) em destaque
- Nota sobre coberturas disponiveis (brigadeiro, ganache, marshmallow)
- Nota sobre bolos coloridos/personalizados (consultar valor)
- Botao CTA em cada subgrupo: "Encomendar este bolo" (verde, abre WhatsApp com tamanho pre-selecionado)

#### Aba Doces
- Cards por produto mostrando:
  - Nome do doce
  - Preco para 100 unidades
  - Preco para 50 unidades
- Layout de grade 2 colunas (desktop) / 1 coluna (mobile)
- Busca/filtro simples por nome (input no topo da aba)
- Botao em cada card: "Pedir este doce" (abre WhatsApp com nome do doce)
- Grupo 1 e Grupo 2 separados visualmente

#### Aba Kits
- 3 cards destacados:
  - **Kit Doces Simples** — R$ 175,00 (100 doces, 4 sabores)
  - **Kit Doces Recheados** — R$ 230,00 (100 doces, 4 sabores)
  - **Kit Bombons e Trufas** — R$ 265,00 (100 doces, 4 sabores)
- Cada kit mostra: preco, descricao, lista de sabores disponiveis
- CTA por kit: "Montar meu kit" (abre WhatsApp)

#### Aba Recheios
- Grid de 3 colunas (desktop) / 2 colunas (mobile)
- Lista alfabetica dos 46 recheios em pills/badges elegantes
- Secao especial para os 4 bolos com 2 recheios (Charge, Floresta Negra, etc)
- Visual de referencia rapida, sem precos (recheios sao opcao, nao produto)

#### Aba Personalizados
- Cards para: pirulitos, paes de mel, porta retrato, trufas, cupcakes, apliques
- Placeholder visual para cada tipo
- Texto: "Para consultar valores, envie o tema ou foto de inspiracao"
- CTA unico: "Consultar personalizado" (abre WhatsApp)

### 6. Secao Como Pedir

- Fundo rosa off-white (#fdf2f4)
- Titulo: "Como fazer seu pedido"
- 5 passos visuais em linha horizontal (desktop) / vertical (mobile):
  1. Escolha a categoria (icone de lista)
  2. Defina sabores e quantidades (icone de checklist)
  3. Informe a data do evento (icone de calendario)
  4. Envie pelo WhatsApp (icone de WhatsApp)
  5. Receba atendimento personalizado (icone de coracao)
- Cada passo: circulo numerado com icone + texto curto
- Linha conectora entre os passos (pontilhada, dourada)
- CTA final: "Fazer meu pedido agora" (verde)

### 7. Configurador de Pedido (WhatsApp Builder)

- Fundo gradiente suave rosa
- Titulo: "Monte seu pedido"
- Subtitulo: "Preencha os dados e envie direto no WhatsApp"
- Formulario em card branco com sombra:
  - **Nome** (text input)
  - **Telefone** (tel input)
  - **Tipo de encomenda** (select: Bolo, Doces, Kit, Personalizado)
  - **Data do evento** (date input)
  - **Quantidade de pessoas** (number input)
  - Campos condicionais baseados no tipo:
    - Se Bolo: tamanho (select), recheio 1 (select), recheio 2 (select), cobertura (select)
    - Se Doces: sabores e quantidades (textarea)
    - Se Kit: tipo de kit (select)
    - Se Personalizado: descricao + upload de referencia (textarea)
  - **Observacoes** (textarea)
- Botao: "Enviar Pedido no WhatsApp" (verde, grande)
- Ao clicar: monta mensagem formatada e abre wa.me/5516997126577 com texto pre-preenchido

**Formato da mensagem gerada:**
```
Ola! Gostaria de fazer uma encomenda 🎂

*Nome:* [nome]
*Telefone:* [telefone]
*Tipo:* [tipo]
*Data do evento:* [data]
*Pessoas:* [quantidade]
*Tamanho:* [tamanho]
*Recheio 1:* [recheio1]
*Recheio 2:* [recheio2]
*Cobertura:* [cobertura]
*Observacoes:* [obs]

Aguardo retorno! 😊
```

### 8. Secao Diferenciais

- Fundo branco
- Titulo: "Por que escolher a Maria Alice & Mirian?"
- Grid 3x2 (desktop) / 2x3 (mobile) com cards:
  1. **25 anos de tradicao** — icone de coracao/relogio
  2. **Encomendas para festas e eventos** — icone de festa
  3. **Bolos e doces personalizados** — icone de estrela
  4. **Atendimento com carinho** — icone de mao/coracao
  5. **Ingredientes de qualidade** — icone de selo/check
  6. **Producao artesanal** — icone de confeitaria
- Cards com borda suave, icone dourado, titulo + descricao curta

### 9. Avaliacoes

- Fundo nude/champagne
- Titulo: "O que nossos clientes dizem"
- 3-4 cards de depoimento:
  - Avatar placeholder (iniciais em circulo rosa)
  - 5 estrelas douradas
  - Texto do depoimento (reescrito de forma comercial)
  - Nome do cliente
- Carousel no mobile via CSS scroll-snap (sem biblioteca externa)
- Depoimentos baseados nos comentarios fornecidos, reescritos com tom profissional

### 10. Galeria / Instagram

- Fundo branco
- Titulo: "Inspiracoes"
- Subtitulo: "Siga-nos no Instagram @marialicemirianbolosedoces"
- Grid 4 colunas (desktop) / 2 colunas (mobile) com 8 slots
- Cada slot: placeholder elegante com gradiente rosa + icone de camera
- Hover: leve escurecimento + icone de lupa/expand
- Link para Instagram no final
- Estrutura preparada para integracao futura com API do Instagram

### 11. Localizacao e Contato

- Fundo rosa off-white
- Layout 2 colunas (desktop): info a esquerda, mapa a direita
- **Coluna info:**
  - Endereco: R. Dr. Fouad Mucari, 1252 – Jardim Campestre, Itapolis – SP
  - WhatsApp: (16) 99712-6577
  - Fixo: (16) 3262-8573
  - Instagram: @marialicemirianbolosedoces
  - Facebook: Maria Alice & Mirian - Bolos e Doces
  - Horarios em cards:
    - Terca a sexta: 08:00 as 18:00
    - Sabado: 08:00 as 16:00
    - Domingo e segunda: fechado
  - Botao "Como chegar" (abre Google Maps)
  - Botao "Chamar no WhatsApp" (verde)
- **Coluna mapa:** iframe do Google Maps com pin no endereco
- Texto: "Atendemos Itapolis e regiao"

### 12. FAQ

- Fundo branco
- Titulo: "Perguntas Frequentes"
- Acordeao elegante com 6+ perguntas:
  1. Voces fazem bolos personalizados?
  2. Como faco meu pedido?
  3. Qual a antecedencia ideal para encomendar?
  4. Posso montar orcamento pelo WhatsApp?
  5. Quais sabores de recheio estao disponiveis?
  6. Voces fazem doces para casamento e aniversario?
  7. Qual o pedido minimo de doces?
  8. Voces entregam?
- Respostas curtas, praticas e com CTA para WhatsApp quando relevante
- Icone de seta rotativa para abrir/fechar

### 13. Footer

- Fundo marrom escuro (#4a3728)
- Layout 4 colunas (desktop) / empilhado (mobile):
  - **Logo** (versao clara/branca) + tagline
  - **Links rapidos**: Sobre, Cardapio, Como Pedir, Contato
  - **Contato**: endereco, telefones, email
  - **Redes sociais**: icones Instagram, Facebook, WhatsApp
- Horario de funcionamento
- CTA final: "Faca sua encomenda pelo WhatsApp" (verde, grande)
- Copyright: "© 2026 Maria Alice & Mirian — Bolos e Doces"

### 14. Botao Flutuante WhatsApp

- Fixo no canto inferior direito
- Circulo verde (#25D366) com icone do WhatsApp
- Sombra pronunciada para destaque
- Hover: leve expansao + tooltip "Fale conosco"
- Abre wa.me/5516997126577 com mensagem: "Ola! Vi o site e gostaria de saber mais sobre os produtos 😊"
- Z-index alto para ficar acima de tudo
- Animacao sutil de pulse a cada 10 segundos para chamar atencao

## Estrutura de Dados

Todos os dados do cardapio ficam em um objeto JS `DADOS` no topo do arquivo HTML, separado da logica de renderizacao. Estrutura:

```javascript
const DADOS = {
  empresa: {
    nome: "Maria Alice & Mirian",
    subtitulo: "Bolos e Doces",
    endereco: "R. Dr. Fouad Mucari, 1252 – Jardim Campestre, Itapolis – SP",
    whatsapp: "5516997126577",
    whatsappFormatado: "(16) 99712-6577",
    fixo: "(16) 3262-8573",
    instagram: "@marialicemirianbolosedoces",
    instagramUrl: "https://instagram.com/marialicemirianbolosedoces",
    facebook: "Maria Alice & Mirian - Bolos e Doces",
    horarios: { ... }
  },
  bolos: [
    { peso: "1,5 kg", pessoas: 10, diametro: "17 cm", fatias: 15, coberturas: [ ... ] },
    ...
  ],
  bolosEspeciais: [ ... ],
  coberturasDisponiveis: [ ... ],
  recheios: [ ... ],
  doces: {
    grupo1: [ ... ],
    grupo2: [ ... ]
  },
  kits: [ ... ],
  personalizados: [ ... ]
};
```

Editar precos, adicionar/remover itens: basta mexer nesse objeto. A UI renderiza a partir dele.

## SEO Local

- Title tag: "Maria Alice & Mirian | Bolos e Doces em Itapolis-SP | Encomendas para Festas"
- Meta description focada em termos de busca local
- Schema.org LocalBusiness markup (JSON-LD)
- Heading hierarchy: h1 unico no hero, h2 por secao, h3 para subsecoes
- Alt text descritivo nos placeholders de imagem
- Termos alvo no conteudo natural: "bolos em Itapolis", "doces para festa em Itapolis", "bolo de aniversario em Itapolis", "doces finos em Itapolis", "encomenda de bolo em Itapolis", "bolos e doces para casamento em Itapolis"
- Open Graph tags para compartilhamento em redes sociais

## Performance

- Zero dependencias externas alem do Google Fonts
- CSS embutido (sem request extra)
- JS embutido e minimo (tabs, scroll suave, formulario, mobile menu)
- Lazy-load nos iframes (mapa)
- Imagens futuras: recomendar WebP, srcset para responsivo
- Meta viewport para mobile

## Acessibilidade

- Contraste adequado em todos os textos
- Labels nos inputs do formulario
- Aria-labels nos botoes de icone
- Keyboard navigation nas abas e acordeao
- Focus states visiveis
- Semantica HTML5: header, nav, main, section, footer

## Arquivo Final

Um unico arquivo `index.html` contendo:
1. Head com meta tags, fonts, CSS embutido
2. Objeto DADOS no script
3. HTML semantico de todas as secoes
4. JS para interatividade (tabs, menu mobile, scroll, formulario WhatsApp, FAQ acordeao)
