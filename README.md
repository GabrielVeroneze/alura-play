<p align="center"> <img src="https://imgur.com/J3hD21O.png" alt="Javascript: criando requisições"> </p>
<p>Projeto desenvolvido durante o curso "Javascript: criando requisições" da Alura.</p>

<hr>

<h1 align="center">AluraPlay</h1>

<p align="center"> <img src="https://github.com/GabrielVeroneze/alura-play/blob/c9fe7fe0f7162aa001a9fae10b319b261b3239e6/assets/img/cabecalho/Logo.png" alt="Logo da AluraPlay"> </p>
<p align="center">AluraPlay é uma plataforma de compartilhamento de vídeos onde os usuários podem visualizar uma lista de vídeos existentes e adicionar novos vídeos. Este projeto consiste em uma página inicial e um formulário de cadastro de vídeos.</p>

## :hammer: Funcionalidades do projeto

- `Visualização de vídeos`: Na página inicial, é possível visualizar uma lista de vídeos. Essa lista é gerada a partir do servidor JSON que contém as informações dos vídeos.
- `Cadastro de novos vídeos`: Também podemos adicionar novos vídeos à plataforma usando o formulário de cadastro. O formulário solicita informações básicas sobre o vídeo, como título, imagem e URL. Quando o usuário preenche o formulário e clica no botão "Enviar", uma requisição POST é feita ao servidor JSON e o novo vídeo é adicionado à lista de vídeos.
- `Pesquisa de vídeos`: A plataforma possui um campo de busca que permite pesquisar vídeos por título. Ao digitar um termo de busca e clicar no botão de pesquisa, é feita uma requisição GET para o servidor local com uma query string contendo o termo de busca. O servidor então retorna apenas os vídeos que correspondem à pesquisa.

## :computer: Tecnologias e Ferramentas utilizadas
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
    - `<a>`
    - `<button>` 
    - `<header>`
    - `<iframe>` 
    - `<img>` 
    - `<input>`
    - `<label>` 
    - `<main>` 
    - `<nav>`
    - etc
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
    - `background`
    - `cursor`
    - `display`
    - `flexbox`
    - `height`
    - `media queries`
    - `position`
    - `width`
    - `z-index`
    - etc
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
    - `addEventListener`
    - `async`/ `await`
    - `fetch`
    - `import`/`export`
    - `location`
    - `method`/`mode`/`headers`/`body`
    - `preventDefault`
    - `query string`
    - `try...catch`
    - etc
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
    - `API RESTful`
    - `json-server`
    - `Node Package Manager`

## :open_file_folder: Acesso ao projeto
Você pode baixar o projeto diretamente:  
[Baixar código fonte](https://github.com/GabrielVeroneze/alura-play/archive/refs/heads/main.zip)

Também é possível clonar o repositório usando o seguinte comando:
```
git clone https://github.com/GabrielVeroneze/alura-play.git
```

## :clipboard: Instruções
Para usar este projeto em seu computador localmente, você precisará seguir estas etapas:

1. Certifique-se de que você tem o Node.js instalado em seu computador. Se não tiver, faça o download e a instalação a partir do [site oficial](https://nodejs.org/).

2. Abra o terminal e navegue até a pasta raiz deste projeto.

3. Inicie o servidor JSON usando o seguinte comando:
```
json-server --watch db.json
```
   Este comando iniciará o servidor JSON no endereço http://localhost:3000.

4. Abra o arquivo index.html em um navegador de sua escolha para visualizar a página.

## Screenshots
![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)
