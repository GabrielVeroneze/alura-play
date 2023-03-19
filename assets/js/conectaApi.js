async function listaVideos() {
    // Faz uma requisição GET para a API REST fake com os dados fictícios para a aplicação.
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()
    
    // Retorna um array de objetos com os dados dos videos.
    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {

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
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

criaVideo(
    "Linguagens e ferramentas usadas em Ciência de Dados...",
    "2,5",
    "https://www.youtube.com/embed/h83e1aAM5xQ",
    "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true"
)

// Ao exportar a função "listaVideos" como parte de um objeto, outras partes do código podem importar e usar essa função. 
// Quando outras partes do código precisarem acessar a função "listaVideos" podem importar o objeto "conectaApi" e chamar o método "listaVideos". Sintaxe: "conectaApi.listaVideos()".
export const conectaApi = {
    listaVideos,
    criaVideo
}