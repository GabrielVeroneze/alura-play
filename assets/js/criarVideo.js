import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector('[data-formulario]')

async function criaVideos(evento) {
    evento.preventDefault()

    const titulo = document.querySelector('[data-titulo]').value
    const imagem = document.querySelector('[data-imagem]').value

    const url = document.querySelector('[data-url]').value
    const urlEmbed = url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')

    const descricao = Math.floor(Math.random() * 100).toString()

    try {
        await conectaApi.enviaVideos(titulo, descricao, urlEmbed, imagem)

        const novoCaminho = window.location.pathname.replace('/pages/enviar-video.html', '/pages/envio-concluido.html')
        window.location.pathname = novoCaminho
    } catch (erro) {
        alert(erro)
    }
}

formulario.addEventListener('submit', evento => criaVideos(evento))