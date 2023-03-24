async function recebeVideos() {
    // Faz uma requisição GET para a API REST fake com os dados fictícios para a aplicação.
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()
    
    // Retorna um array de objetos com os dados dos videos.
    return conexaoConvertida
}

async function enviaVideos(titulo, descricao, url, imagem) {

    // objeto de opções
    const options = {
        // Define o método HTTP como "POST"
        method: 'POST',
        // Permite requisições de origem cruzada
        mode: 'cors',
        // contém informações adicionais sobre a requisição
        headers: {
            //  O tipo de conteúdo que está sendo enviado no corpo da requisição
            'Content-type': 'application/json'
        },
        // Transforma o objeto literal com os dados que queremos enviar em uma string JSON e inclue no corpo da requisição
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })    
    }

    const conexao = await fetch('http://localhost:3000/videos', options)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function pesquisaVideos(termoDePesquisa) {
    const conexao = await fetch(`https://localhost:3000/videos?q=${termoDePesquisa}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

// Ao exportar a função "recebeVideos" como parte de um objeto, outras partes do código podem importar e usar essa função. 
// Quando outras partes do código precisarem acessar a função "recebeVideos" podem importar o objeto "conectaApi" e chamar o método "recebeVideos". Sintaxe: "conectaApi.recebeVideos()".
export const conectaApi = {
    recebeVideos,
    enviaVideos,
    pesquisaVideos
}