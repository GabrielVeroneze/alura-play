import { conectaApi } from "./conectaApi.js"
import { criaItem }  from "./mostrarVideos.js"

async function pesquisarVideo(evento) {
    evento.preventDefault()
    
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
    const pesquisa = await conectaApi.pesquisaVideos(dadosDePesquisa)

    const elementoLista = document.querySelector('[data-lista]')

    while (elementoLista.firstElementChild) {
        elementoLista.removeChild(elementoLista.firstElementChild)
    }

    pesquisa.forEach(video => {
        elementoLista.appendChild(criaItem(video.titulo, video.descricao, video.url, video.imagem))
    })

    if (pesquisa.length == 0) {
        elementoLista.innerHTML = `
            <div class="erro__box">
                <img src="./assets/img/procurar-video-erro.svg" class="erro__imagem">
                <h2 class="erro__mensagem">Não existem vídeos com esse termo</h2>
            </div>
        `
    }
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')

botaoDePesquisa.addEventListener('click', evento => pesquisarVideo(evento))