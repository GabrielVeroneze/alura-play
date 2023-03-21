const formulario = document.querySelector('[data-formulario]')

function criaVideos(evento) {
    //  Impede o comportamento padrão do 'submit', que é enviar o formulário e recarregar a página, permitindo que uma ação personalizada seja realizada
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const titulo = document.querySelector('[data-titulo]').value
    const imagem = document.querySelector('[data-imagem]').value
    // Gera numero aleatório entre 0 e 100 convertido em string
    const descricao = Math.floor(Math.random() * 100).toString()
}

formulario.addEventListener('submit', evento => criaVideos(evento))