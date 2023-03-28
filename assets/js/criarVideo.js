import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector('[data-formulario]')

async function criaVideos(evento) {
    //  Impede o comportamento padrão do 'submit', que é enviar o formulário e recarregar a página, permitindo que uma ação personalizada seja realizada
    evento.preventDefault()

    const titulo = document.querySelector('[data-titulo]').value
    const imagem = document.querySelector('[data-imagem]').value

    // Substitui uma parte da string por outra, modificando a url para o formato de incorporação (embed), que pode ser usado para exibir o vídeo em uma página web
    const url = document.querySelector('[data-url]').value
    const urlEmbed = url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')

    // Gera numero aleatório entre 0 e 100 convertido em string
    const descricao = Math.floor(Math.random() * 100).toString()

    try {
        await conectaApi.enviaVideos(titulo, descricao, urlEmbed, imagem)

        // Redireciona o navegador para um novo URL, a página de envio concluido
        window.location.href = "/pages/envio-concluido.html"
    } catch (erro) {
        // Exibe o erro lançado na função 'enviaVideos'
        alert(erro)
    }

}

formulario.addEventListener('submit', evento => criaVideos(evento))