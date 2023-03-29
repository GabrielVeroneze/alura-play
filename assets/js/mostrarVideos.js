import { conectaApi } from "./conectaApi.js"

const elementoLista = document.querySelector('[data-lista]')

function criaItem(titulo, descricao, url, imagem) {
    const video = document.createElement('li')
    
    video.classList.add('videos__item')
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture"allowfullscreen></iframe>
        <div class="videos__descricao">
            <img src="${imagem}" alt="logo canal alura" class="videos__imagem">
            <h3 class="videos__titulo">${titulo}</h3>
            <p class="videos__visualizacao">${descricao}</p>
        </div>
    `

    // Retorna o elemento video criado com titulo, descrição, url e imagem já inseridos.
    return video
}

async function adicionaItemNaLista() {

    try {
        // Usa o objeto "conectaAPI" importado e chama o método recebeVideos(), que retorna um array de objetos com os dados dos videos.
        const listaDeVideos = await conectaApi.recebeVideos()
        // Itera sobre "listaDeVideos" adicionando no "elementoLista" um item, nesse caso, o elemento "video" retornado da função "criaItem()"
        listaDeVideos.forEach(video => {
            elementoLista.appendChild(criaItem(video.titulo, video.descricao, video.url, video.imagem))
        })
    } catch (erro) {
        // se houver um erro ao chamar o método "recebeVideos()", o bloco "catch" será executado e uma mensagem de erro será exibida na lista. 
        elementoLista.innerHTML = `
            <div class="erro__box">
                <img src="../assets/img/mostrar-video-erro.svg" class="erro__icone">
                <h2 class="erro__mensagem">Não foi possível carregar a lista de vídeos</h2>
            </div>
        `
    }
}

adicionaItemNaLista()

export {
    criaItem
}