async function recebeVideos() {
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

async function enviaVideos(titulo, descricao, url, imagem) {

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })    
    }

    const conexao = await fetch('http://localhost:3000/videos', options)
    if (!conexao.ok) {
        throw new Error('Não foi possivel enviar o vídeo')
    }

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function pesquisaVideos(termoDePesquisa) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDePesquisa}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    recebeVideos,
    enviaVideos,
    pesquisaVideos
}