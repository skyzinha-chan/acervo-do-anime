// Aguarda o documento HTML ser completamente carregado para então executar o script.
document.addEventListener( 'DOMContentLoaded', () => {

    // --- ETAPA 1: SELECIONAR OS ELEMENTOS DO HTML ---
    // Aqui, criamos "atalhos" (variáveis) para os elementos da página com os quais vamos interagir.

    const buscaInput = document.querySelector( '#busca' ) // O campo de texto para digitar a busca.
    const checkTitulo = document.querySelector( '#checkTitulo' ) // O checkbox para buscar por título.
    const checkAno = document.querySelector( '#checkAno' ) // O checkbox para buscar por ano.
    const cards = document.querySelectorAll( '.card' ) // Uma lista com TODOS os cards de livros.

    // --- ETAPA 2: ADICIONAR OS "OUVINTES" DE EVENTOS ---
    // Estes são os "gatilhos" que vão chamar nossa função de filtro sempre que o usuário interagir.

    buscaInput.addEventListener( 'input', filtrarCards ) // Aciona o filtro a cada letra digitada.
    checkTitulo.addEventListener( 'change', filtrarCards ) // Aciona o filtro quando o checkbox de título muda.
    checkAno.addEventListener( 'change', filtrarCards ) // Aciona o filtro quando o checkbox de ano muda.


    // --- ETAPA 3: LÓGICA PARA O COMPORTAMENTO EXCLUSIVO DOS CHECKBOXES ---
    // Esta parte garante que apenas um checkbox possa estar marcado por vez, como um botão de rádio.

    checkTitulo.addEventListener( 'change', () => {
        // Se o checkbox de TÍTULO for marcado, o de Ano é desmarcado automaticamente.
        if ( checkTitulo.checked ) {
            checkAno.checked = false
        }
    } )

    checkAno.addEventListener( 'change', () => {
        // Se o checkbox de Ano for marcado, o de TÍTULO é desmarcado automaticamente.
        if ( checkAno.checked ) {
            checkTitulo.checked = false
        }
    } )


    // --- ETAPA 4: A FUNÇÃO PRINCIPAL DE FILTRAGEM ---
    // Este é o cérebro da operação. É executada sempre que um dos eventos da Etapa 2 acontece.

    function filtrarCards () {
        // 4.1. Pega o termo digitado pelo usuário e converte para minúsculas para uma busca sem distinção.
        const termoBusca = buscaInput.value.toLowerCase()

        // 4.2. Percorre cada um dos cards de livro que selecionamos na Etapa 1.
        cards.forEach( card => {
            // 4.3. Pega os textos do card atual e também converte para minúsculas.
            const titulo = card.querySelector( 'h3' ).textContent.toLowerCase()
            const ano = card.querySelector( '.ano' ).textContent.toLowerCase()
            const descricao = card.querySelector( '.descricao' ).textContent.toLowerCase()
            const preco = card.querySelector( '.preco' ).textContent.toLowerCase()

            let textoCompletoDoCard = ''

            // 4.4. Decide qual texto usar para a busca, com base nos checkboxes.
            if ( checkTitulo.checked ) {
                // MODO 1: Se "Buscar apenas no título" está marcado, usamos SÓ o título.
                textoCompletoDoCard = titulo
            } else if ( checkAno.checked ) {
                // MODO 2: Se "Buscar apenas no ano" está marcado, usamos SÓ o ano.
                textoCompletoDoCard = ano
            } else {
                // MODO 3 (Padrão): Se NENHUM estiver marcado, buscamos em tudo.
                textoCompletoDoCard = titulo + ano + descricao + preco
            }

            // 4.5. O teste final: o texto do card inclui o termo que o usuário buscou?
            const cardDeveSerVisivel = textoCompletoDoCard.includes( termoBusca )

            // 4.6. Ação: Mostra ou esconde o card com base no resultado do teste.
            // Se 'cardDeveSerVisivel' for true, o display será 'flex'. Senão, será 'none'.
            card.style.display = cardDeveSerVisivel ? 'flex' : 'none'
        } )
    }

} )