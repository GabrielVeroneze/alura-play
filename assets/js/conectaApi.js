async function listaVideos() {
    // Faz uma busca para a API REST fake com os dados fictícios para a aplicação.
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()
    
    // Retorna um array de objetos com os dados dos videos.
    return conexaoConvertida
}

// Ao exportar a função "listaVideos" como parte de um objeto, outras partes do código podem importar e usar essa função. 
// Quando outras partes do código precisarem acessar a função "listaVideos" podem importar o objeto "conectaApi" e chamar o método "listaVideos". Sintaxe: "conectaApi.listaVideos()".
export const conectaApi = {
    listaVideos
}