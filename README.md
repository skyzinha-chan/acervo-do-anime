# Acervo do Anime

![Status do Projeto](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)

Uma interface de e-commerce para uma loja fictícia de animes, com foco em uma curadoria de títulos clássicos e com um sistema de filtro dinâmico. Este projeto foi desenvolvido como parte de uma avaliação de curso e evoluiu para uma peça de portfólio, demonstrando habilidades fundamentais em HTML5, CSS3 e JavaScript moderno.

### 🎮 [Acesse a demonstração ao vivo aqui!](https://skyzinha-chan.github.io/acervo-do-anime/)
*(Substitua o link acima pelo link do seu GitHub Pages após fazer o deploy)*

<br>

![Prévia do Acervo do Anime](https://i.imgur.com/seu-gif-ou-imagem-aqui.gif)
*(Sugestão: Grave um GIF curto da tela mostrando a funcionalidade de filtro e substitua o link acima. Ferramentas como ScreenToGif ou o gravador do Windows (Win+G) são ótimas para isso.)*

## 🌟 Descrição do Projeto

O **Acervo do Anime** é uma aplicação web que simula a vitrine de uma loja online especializada em animes, com foco especial na "era de ouro" de 2005-2010. O projeto inclui uma página principal com a vitrine de produtos e uma página secundária "Sobre Nós", garantindo uma experiência de usuário coesa e uma identidade de marca consistente.

A principal funcionalidade é um sistema de busca e filtro em tempo real que permite aos usuários encontrar animes por nome, título ou ano de lançamento, tudo de forma intuitiva e responsiva.

## ✨ Features

* **Filtro Dinâmico:** Busque animes em tempo real pelo nome completo do produto.
* **Filtros Específicos:** Refine a busca para procurar apenas no **título** ou no **ano** do anime, com os checkboxes se comportando de forma exclusiva.
* **Layout Responsivo:** A interface se adapta de forma fluida a diferentes tamanhos de tela, utilizando Flexbox e Media Queries.
* **Página "Sobre":** Uma página secundária que apresenta a história e a missão da loja, fortalecendo a identidade da marca.
* **Design Coeso:** Uma paleta de cores e um estilo visual consistentes em todas as seções do projeto.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica, incluindo o uso de tags como `<header>`, `<main>`, `<nav>` e `<footer>`.
* **CSS3:**
    * **Flexbox** para a criação de layouts complexos e alinhamento de componentes.
    * **Media Queries** para a criação de um design responsivo e adaptativo.
    * **Animações e Transições** para uma experiência de usuário mais fluida e agradável.
    * **Organização em Múltiplos Arquivos** (`style.css` e `sobre-loja.css`) para modularidade.
* **JavaScript (ES6+):**
    * **Manipulação do DOM** para filtrar e exibir os cards dinamicamente.
    * **Gerenciamento de Eventos** (`input`, `change`) para criar a interatividade em tempo real.
    * **Lógica de programação** para criar as regras de negócio dos filtros.

## 🚀 Desafios e Aprendizados

Este projeto foi uma jornada de aprendizado e resolução de problemas. Alguns dos principais desafios e lições aprendidas foram:

* **Lógica de Filtros Exclusivos:** Implementar a funcionalidade onde marcar um checkbox de filtro (ex: "Buscar no Ano") desmarca automaticamente o outro foi um desafio interessante de lógica e gerenciamento de estado no JavaScript.
* **Depuração de Incompatibilidade (HTML x JS):** Em um ponto do desenvolvimento, o filtro parou de funcionar. A depuração revelou que a estrutura do HTML havia sido alterada, mas o JavaScript ainda procurava pela classe antiga. Este foi um aprendizado prático e valioso sobre como manter a sincronia entre a estrutura e o comportamento da aplicação.
* **Refatoração de Layout CSS:** O projeto passou por ajustes no CSS para corrigir problemas de overflow causados pelo `box-model` padrão. A aplicação universal do `box-sizing: border-box` e o uso estratégico de Flexbox para o layout dos cards foram passos cruciais para um design mais robusto e previsível.
* **Construção de Identidade:** A decisão de renomear a loja de "Vitrine de Animes Virtuais" para "Acervo do Anime" foi um exercício de branding, buscando um nome que transmitisse melhor a curadoria e a qualidade da coleção.

---
**Desenvolvido por Talita Mendonça Marques** - Julho de 2025