<p align="center"> <img src="https://imgur.com/J3hD21O.png" alt="Javascript: criando requisições"> </p>
<p>Projeto desenvolvido durante o curso "Javascript: criando requisições" da Alura.</p>

<hr>

<h1 align="center">AluraPlay</h1>
<p align="center">AluraPlay é uma plataforma de compartilhamento de vídeos onde os usuários podem visualizar uma lista de vídeos existentes e adicionar novos vídeos. Este projeto consiste em uma página inicial e um formulário de cadastro de vídeos.</p>

## :hammer: Funcionalidades do projeto

- `Visualização de vídeos`: Na página inicial, é possível visualizar uma lista de vídeos. Essa lista é gerada a partir do servidor JSON que contém as informações dos vídeos.

- `Cadastro de novos vídeos`: Também podemos adicionar novos vídeos à plataforma usando o formulário de cadastro. O formulário solicita informações básicas sobre o vídeo, como título, imagem e URL. Quando o usuário preenche o formulário e clica no botão "Enviar", uma requisição POST é feita ao servidor JSON e o novo vídeo é adicionado à lista de vídeos.

- `Pesquisa de vídeos`: A plataforma possui um campo de busca que permite pesquisar vídeos por título. Ao digitar um termo de busca e clicar no botão de pesquisa, é feita uma requisição GET para o servidor local com uma query string contendo o termo de busca. O servidor então retorna apenas os vídeos que correspondem à pesquisa.

## :computer: Tecnologias e Ferramentas utilizadas

- <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"><br>
    - `<iframe>` 
    - `<main>` 
    - `<nav>`
    - e outros

- <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"><br>
    - `flexbox`
    - `grid`
    - `media queries`
    - e outros

- <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"><br>
    - `addEventListener`
    - `async`/ `await`
    - `fetch`
    - `import`/`export`
    - `location`
    - `method`/`mode`/`headers`/`body`
    - `preventDefault`
    - `query string`
    - `try...catch`
    - e outros

- <img height="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"><br>
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

2. Certifique-se de que a extensão Live Server do VSCode está instalada. Se você ainda não a tem instalada, você pode baixá-la na loja de extensões do VSCode ou em [baixar Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

3. Abra o terminal e navegue até a pasta raiz do projeto usando o comando `cd` no terminal. Por exemplo:
   ```
   cd C:\Users\SeuUsuario\projetos\meu-projeto
   ```
4. Inicie o servidor JSON executando o seguinte comando no terminal:
   ```
   npx json-server --watch db.json
   ```
&nbsp; &nbsp; &nbsp; &nbsp;Este comando iniciará o servidor JSON no endereço http://localhost:3000.

5. Por fim, inicie o Live Server do VSCode clicando com o botão direito no arquivo `ìndex.html` e selecionando a opção "Open with Live Server". Isso abrirá a página HTML principal.
<br>

## Screenshots
![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)
