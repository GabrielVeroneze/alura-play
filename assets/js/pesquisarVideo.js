import { conectaApi } from "./conectaApi.js"
import { criaItem }  from "./mostrarVideos.js"

async function pesquisarVideo(evento) {
    evento.preventDefault()
    
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
    const pesquisa = await conectaApi.pesquisaVideos(dadosDePesquisa)

    const elementoLista = document.querySelector('[data-lista]')

    // O loop é executado enquanto 'elementoLista' tiver um primeiro elemento filho, quanto não houver elemento filho o loop é interrompido
    while (elementoLista.firstElementChild) {
        // o método removeChild() é chamado passando o primeiro elemento filho de 'elementoLista' como argumento, removendo ele
        elementoLista.removeChild(elementoLista.firstElementChild)
    }

    // Para cada dado retornado da pesquisa, cria o card de video, e adiciona na lista de videos
    pesquisa.forEach(video => {
        elementoLista.appendChild(criaItem(video.titulo, video.descricao, video.url, video.imagem))
    })

    // Se a pesquisa não retornar nenhum resultado, o bloco cria uma mensagem de erro em HTML 
    if (pesquisa.length == 0) {
        elementoLista.innerHTML = `
            <div class="erro__box">
                <img src="../img/procurar-video-erro.svg" class="erro__imagem">
                <h2 class="erro__mensagem">Não existem vídeos com esse termo</h2>
            </div>
        `
    }
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')

botaoDePesquisa.addEventListener('click', evento => pesquisarVideo(evento))