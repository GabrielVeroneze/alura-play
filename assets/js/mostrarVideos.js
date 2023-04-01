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

    return video
}

async function adicionaItemNaLista() {

    try {
        const listaDeVideos = await conectaApi.recebeVideos()

        listaDeVideos.forEach(video => {
            elementoLista.appendChild(criaItem(video.titulo, video.descricao, video.url, video.imagem))
        })
    } catch (erro) {
        elementoLista.innerHTML = `
            <div class="erro__box">
                <img src="./assets/img/mostrar-video-erro.svg" class="erro__imagem">
                <h2 class="erro__mensagem">Não foi possível carregar a lista de vídeos</h2>
            </div>
        `
    }
}

adicionaItemNaLista()

export {
    criaItem
}