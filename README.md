<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Dinamous/Morangando">
    <img src="./src/imageResources/logo.png" alt="Logo" 
    >
  </a>

  <h3 align="center">Projeto Administrativo Agrícola</h3>

  <p align="center">
    A melhor forma de organizar seu negócio agrícola de forma online.
    <br />
    <a href="https://github.com/Dinamous/Morangando"><strong>Leia a documentação»</strong></a>
    <br />
    <br />
    <a href="https://github.com/Dinamous/Morangando">Ir para o site</a>
    ·
    <a href="https://github.com/Dinamous/Morangando/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/Dinamous/Morangando/issues">Solicitar Funcionalidade</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Conteúdo do Projeto</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#construído-com">Como o projeto foi construído</a></li>
      </ul>
    </li>
    <li>
      <a href="#comecando">Começando... </a>
      <ul>
        <li><a href="#prerequisitos">Prerequisitos</a></li>
        <li><a href="#instalação">Instalações</a></li>
      </ul>
    </li>
    <li><a href="#utilização">Aplicações da usabilidade deste projeto</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#Contribuindo">Como Contribuir</a></li>
    <li><a href="#license">Licensa</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#conhecimentos-adquiridos">Conhecimentos adquiridos/utilizados</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Este projeto surgiu com a necessidade de pequenos produtores necessitarem de formas de gerenciamento de seus pequenos negócios. Desta forma criamos o Projeto Morangando, um sistema online para estes pequenos produtores conseguirem junto ao auxílio da tecnologia otimizarem seu tempo e conseguirem ter acesso a sua gestão de qualquer local.

Este Projeto oferece as seguintes facilidades:

- Organização de Fornecedores de Produtos e Cliente.
- Gerenciamento de Lavouras.
- Gerenciamento de caixa, incluindo relatorios mensais.

### Construído Com

Este projeto foi construido principalmente com o framework Adminbro, uma ferramenta que possibilita uma imensa facilidade de integração automatizada com o backend, no qual fornece uma interface predefinida construída em React.js.
Pelo fato deste framework consumir recursos de React.js é possível realizar uma grande personalização da interface.
Para as principais funcionalidades do back-end foi utilizado a ferramenta de gerenciamento ORM Sequelize para o banco de dados.

- [Adminbro](https://adminbro.com)
- [React.js](https://pt-br.reactjs.org)
- [Sequelize](https://sequelize.org)

<!-- GETTING STARTED -->

## Começando

Aqui vamos descrever como criar a sua versão local deste projeto, para isso siga os próximos passos.

### Prerequisitos

Para darmos início antes de tudo precisamos garantir que possua a versão mais recente do node, caso ainda não possua utilise este comando:

- npm
  ```sh
  npm install -g npm
  ```

### Instalação

Agora que já possuímos a ferramenta mais necessária vamos partir para sua versão local.

1. Clone este repositório para a sua máquina
   ```sh
   git clone https://github.com/Dinamous/Morangando.git
   ```
2. Instale as dependencias do projeto
   ```sh
   npm install
   ```
3. Precisamos instanciar o banco de dados, criar as tabelas e preenchê-las com dados:
   ```sh
   npm run preinstall
   ```
   4.Agora que temos tudo pronto precisamos rodar nossa aplicação localmente
   ```sh
   npm run dev
   ```

<!-- USAGE EXAMPLES -->

## Utilização

Agora que a aplicação está pronta você precisa das credenciais para acessar o sistema e ser autenticado.

```
Email: admin@admin.com
Password: password
```

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->
<!-- ## Roadmap

See the [open issues](https://github.com/Dinamous/Morangando/issues) for a list of proposed features (and known issues).
 -->

<!-- CONTRIBUTING -->

## Contribuindo

Constribuições tornam a comunidade open source um lugar incrível por isso sinta-se livre para contruibuir com nosso projeto com novas features.

1. Crie um Fork do projeto
2. Cria uma nova Branch com sua feature (`git checkout -b feature/AmazingFeature`)
3. Commite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Dê Push na sua Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contato

Matheus Augusto Simões - [@your_twitter](https://twitter.com/mataugs) - matheusaugustosimoes@hotmail.com

Project Link: [https://github.com/Dinamous/Morangando](https://github.com/Dinamous/Morangando)

<!-- ACKNOWLEDGEMENTS -->

## Conhecimentos Adquiridos

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Dinamous/Morangando.svg?style=for-the-badge
[contributors-url]: https://github.com/Dinamous/Morangando/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Dinamous/Morangando.svg?style=for-the-badge
[forks-url]: https://github.com/Dinamous/Morangando/network/members
[stars-shield]: https://img.shields.io/github/stars/Dinamous/Morangando.svg?style=for-the-badge
[stars-url]: https://github.com/Dinamous/Morangando/stargazers
[issues-shield]: https://img.shields.io/github/issues/Dinamous/Morangando.svg?style=for-the-badge
[issues-url]: https://github.com/Dinamous/Morangando/issues
[license-shield]: https://img.shields.io/github/license/Dinamous/Morangando.svg?style=for-the-badge
[license-url]: https://github.com/Dinamous/Morangando/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/matheus-simões
[product-screenshot]: ./src/imageResources/printscreen1.png
