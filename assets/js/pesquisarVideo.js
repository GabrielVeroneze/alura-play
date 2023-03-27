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
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')

botaoDePesquisa.addEventListener('click', evento => pesquisarVideo(evento))