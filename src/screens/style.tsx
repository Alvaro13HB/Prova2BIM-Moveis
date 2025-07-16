import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    containerPrincipal: { // Estilos para o contaiiner principal do aplicativo.
        flex: 1, // Ocupa todo o espaço disponível.
        backgroundColor: '#0F172A', // Define a cor de fundo escura.
        paddingTop: 40, // Adiciona preenchimento superior para evitar sobreposição com a barra de status.
    },
    conteudoScrollView: { // Estilos para o conteúdo dentro do ScrollView.
        paddingVertical: 20, // Adiciona preenchimento vertical.
        paddingHorizontal: 15, // Adiciona preenchimento horizontal.
    },
    secao: { // Estilos para cada seção principal do aplicativo 
        flex: 1,
        marginBottom: 30, // Margem inferior para espaçamento entre seções.
        backgroundColor: '#1E293B', // Cor de fundo mais clara para as seções.
        borderRadius: 12, // Borda arredondada.
        padding: 15, // Preenchimento interno.
        shadowColor: '#000', // Cor da sombra.
        shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra 
        shadowOpacity: 0.3, // Opacidade da sombra.
        shadowRadius: 5, // Raio da sombra.
        elevation: 8, // Elevação para Android (simula sombra).
    },
    tituloSecao: { // Estilos para os títulos das seções principais.
        fontSize: 28, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto clara.
        marginBottom: 20, // Margem inferior.
        textAlign: 'center', // Alinhamento do texto ao centro.
    },
    tituloSubSecao: { // Estilos para os títulos de subseções.
        fontSize: 20, // Tamanho da fonte.
        fontWeight: '600', // Peso da fonte.
        color: '#CBD5E1', // Cor do texto.
        marginTop: 20, // Margem superior.
        marginBottom: 15, // Margem inferior.
        borderBottomWidth: 1, // Largura da borda inferior.
        borderBottomColor: '#334155', // Cor da borda inferior.
        paddingBottom: 5, // Preenchimento inferior.
    },
    cartao: { // Estilos para elementos de cartão.
        backgroundColor: '#2D3748', // Cor de fundo do cartão.
        borderRadius: 10, // Borda arredondada.
        padding: 15, // Preenchimento interno.
        marginBottom: 15, // Margem inferior.
        alignItems: 'center', // Alinha itens ao centro horizontalmente.
    },
    tituloCartao: { // Estilos para o título dentro do cartão.
        fontSize: 16, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
        marginBottom: 5, // Margem inferior.
    },
    textoSaldo: { // Estilos para o texto do saldo.
        fontSize: 32, // Tamanho da fonte grande.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#4ADE80', // Cor verde para o saldo.
        marginBottom: 5, // Margem inferior.
    },
    textoMudancaSaldo: { // Estilos para o texto de mudança de saldo.
        fontSize: 14, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
        marginBottom: 10, // Margem inferior.
    },
    botaoPrimario: { // Estilos para o botão principal.
        backgroundColor: '#3B82F6', // Cor de fundo azul primária.
        paddingVertical: 12, // Preenchimento vertical.
        paddingHorizontal: 25, // Preenchimento horizontal.
        borderRadius: 8, // Borda arredondada.
        marginTop: 10, // Margem superior.
    },
    botaoSecundario: { // Estilos para o botão secundário.
        backgroundColor: '#475569', // Cor de fundo cinza secundária.
        paddingVertical: 10, // Preenchimento vertical.
        paddingHorizontal: 20, // Preenchimento horizontal.
        borderRadius: 8, // Borda arredondada.
        marginTop: 15, // Margem superior.
        alignSelf: 'center', // Alinha o botão ao centro.
    },
    textoBotao: { // Estilos para o texto dos botões.
        color: '#FFFFFF', // Cor do texto branca.
        fontSize: 16, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
    },
    itemLista: { // Estilos para cada item de lista (criptomoeda).
        flexDirection: 'row', // Organiza itens em linha.
        alignItems: 'center', // Alinha itens ao centro verticalmente.
        backgroundColor: '#2D3748', // Cor de fundo.
        borderRadius: 8, // Borda arredondada.
        padding: 12, // Preenchimento interno.
        marginBottom: 10, // Margem inferior.
        shadowColor: '#000', // Cor da sombra.
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
        shadowOpacity: 0.2, // Opacidade da sombra.
        shadowRadius: 3, // Raio da sombra.
        elevation: 5, // Elevação para Android.
    },
    iconeCripto: { // Estilos para o ícone da criptomoeda.
        width: 40, // Largura.
        height: 40, // Altura.
        borderRadius: 20, // Borda arredondada para formar um círculo.
        marginRight: 15, // Margem à direita.
        backgroundColor: '#64748B', // Cor de fundo de placeholder.
    },
    infoCripto: { // Estilos para o contêiner de informações da criptomoeda.
        flex: 1, // Ocupa o espaço restante.
    },
    nomeCripto: { // Estilos para o nome da criptomoeda.
        fontSize: 18, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
    },
    simboloCripto: { // Estilos para o símbolo da criptomoeda.
        fontSize: 14, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
    },
    infoPrecoCripto: { // Estilos para o contêiner de informações de preço.
        alignItems: 'flex-end', // Alinha itens ao final.
    },
    precoCripto: { // Estilos para o preço da criptomoeda.
        fontSize: 18, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
    },
    mudancaCripto: { // Estilos para a mudança percentual.
        fontSize: 14, // Tamanho da fonte.
        fontWeight: '600', // Peso da fonte.
    },
    mudancaPositiva: { // Cor para mudança positiva.
        color: '#4ADE80', // Verde.
    },
    mudancaNegativa: { // Cor para mudança negativa.
        color: '#EF4444', // Vermelho.
    },
    listaHorizontal: { // Estilos para a lista horizontal de NFTs.
        paddingVertical: 10, // Preenchimento vertical.
    },
    cartaoNft: { // Estilos para cada cartão de NFT em destaque.
        backgroundColor: '#2D3748', // Cor de fundo.
        borderRadius: 10, // Borda arredondada.
        padding: 10, // Preenchimento interno.
        marginRight: 15, // Margem à direita.
        alignItems: 'center', // Alinha itens ao centro.
        width: 150, // Largura fixa.
        shadowColor: '#000', // Cor da sombra.
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
        shadowOpacity: 0.2, // Opacidade da sombra.
        shadowRadius: 3, // Raio da sombra.
        elevation: 5, // Elevação para Android.
    },
    imagemNft: { // Estilos para a imagem do NFT.
        width: 100, // Largura.
        height: 100, // Altura.
        borderRadius: 8, // Borda arredondada.
        marginBottom: 10, // Margem inferior.
        backgroundColor: '#64748B', // Cor de fundo de placeholder.
    },
    nomeNft: { // Estilos para o nome do NFT.
        fontSize: 14, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
        textAlign: 'center', // Alinhamento do texto ao centro.
    },
    precoNft: { // Estilos para o preço do NFT.
        fontSize: 12, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
        marginTop: 5, // Margem superior.
    },
    itemNoticia: { // Estilos para o item de notícia na Dashboard.
        backgroundColor: '#2D3748', // Cor de fundo.
        borderRadius: 8, // Borda arredondada.
        padding: 12, // Preenchimento interno.
        marginBottom: 10, // Margem inferior.
        shadowColor: '#000', // Cor da sombra.
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
        shadowOpacity: 0.2, // Opacidade da sombra.
        shadowRadius: 3, // Raio da sombra.
        elevation: 5, // Elevação para Android.
    },
    tituloNoticia: { // Estilos para o título da notícia.
        fontSize: 16, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
        marginBottom: 5, // Margem inferior.
    },
    fonteNoticia: { // Estilos para a fonte e data da notícia.
        fontSize: 12, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
        marginBottom: 5, // Margem inferior.
    },
    trechoNoticia: { // Estilos para o resumo da notícia.
        fontSize: 14, // Tamanho da fonte.
        color: '#CBD5E1', // Cor do texto.
    },
    campoBusca: { // Estilos para o campo de busca.
        backgroundColor: '#2D3748', // Cor de fundo.
        borderRadius: 8, // Borda arredondada.
        padding: 12, // Preenchimento interno.
        fontSize: 16, // Tamanho da fonte.
        color: '#E2E8F0', // Cor do texto.
        marginBottom: 15, // Margem inferior.
    },
    containerFiltro: { // Estilos para o contêiner de botões de filtro.
        flexDirection: 'row', // Organiza itens em linha.
        justifyContent: 'space-around', // Espaça os itens igualmente.
        marginBottom: 20, // Margem inferior.
    },
    botaoFiltro: { // Estilos para cada botão de filtro.
        backgroundColor: '#475569', // Cor de fundo.
        paddingVertical: 8, // Preenchimento vertical.
        paddingHorizontal: 15, // Preenchimento horizontal.
        borderRadius: 20, // Borda arredondada para formar um "pill".
    },
    textoBotaoFiltro: { // Estilos para o texto do botão de filtro.
        color: '#E2E8F0', // Cor do texto.
        fontSize: 14, // Tamanho da fonte.
    },
    containerGradeNft: { // Estilos para o contêiner da grade de NFTs.
        flexDirection: 'row', // Organiza itens em linha.
        flexWrap: 'wrap', // Permite que os itens quebrem para a próxima linha.
        justifyContent: 'space-between', // Espaça os itens igualmente na linha.
    },
    cartaoGradeNft: { // Estilos para cada cartão de NFT na grade.
        backgroundColor: '#2D3748', // Cor de fundo.
        borderRadius: 10, // Borda arredondada.
        padding: 10, // Preenchimento interno.
        marginVertical: 5, // Margem vertical para espaçamento.
        alignItems: 'center', // Alinha itens ao centro.
        width: '48%', // Largura para criar 2 colunas com espaçamento.
        shadowColor: '#000', // Cor da sombra.
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
        shadowOpacity: 0.2, // Opacidade da sombra.
        shadowRadius: 3, // Raio da sombra.
        elevation: 5, // Elevação para Android.
    },
    imagemGradeNft: { // Estilos para a imagem do NFT na grade.
        width: '100%', // Largura total do cartão.
        height: 120, // Altura fixa.
        borderRadius: 8, // Borda arredondada.
        marginBottom: 10, // Margem inferior.
        backgroundColor: '#64748B', // Cor de fundo de placeholder.
    },
    nomeGradeNft: { // Estilos para o nome do NFT na grade.
        fontSize: 14, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
        textAlign: 'center', // Alinhamento do texto ao centro.
    },
    colecaoGradeNft: { // Estilos para a coleção do NFT na grade.
        fontSize: 12, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
        textAlign: 'center', // Alinhamento do texto ao centro.
        marginBottom: 5, // Margem inferior.
    },
    precoGradeNft: { // Estilos para o preço do NFT na grade.
        fontSize: 13, // Tamanho da fonte.
        color: '#4ADE80', // Cor verde.
        fontWeight: '600', // Peso da fonte.
    },
    acoesCarteira: { // Estilos para o contêiner de ações da carteira (Depositar, Sacar, Enviar).
        flexDirection: 'row', // Organiza itens em linha.
        justifyContent: 'space-around', // Espaça os itens igualmente.
        width: '100%', // Ocupa a largura total.
        marginTop: 15, // Margem superior.
    },
    botaoPequeno: { // Estilos para botões pequenos.
        backgroundColor: '#3B82F6', // Cor de fundo azul.
        paddingVertical: 8, // Preenchimento vertical.
        paddingHorizontal: 15, // Preenchimento horizontal.
        borderRadius: 8, // Borda arredondada.
    },
    textoBotaoPequeno: { // Estilos para o texto dos botões pequenos.
        color: '#FFFFFF', // Cor do texto branca.
        fontSize: 14, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
    },
    itemAtivo: { // Estilos para cada item de ativo na carteira.
        flexDirection: 'row', // Organiza itens em linha.
        justifyContent: 'space-between', // Espaça os itens nas extremidades.
        alignItems: 'center', // Alinha itens ao centro verticalmente.
        backgroundColor: '#2D3748', // Cor de fundo.
        borderRadius: 8, // Borda arredondada.
        padding: 12, // Preenchimento interno.
        marginBottom: 10, // Margem inferior.
        shadowColor: '#000', // Cor da sombra.
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
        shadowOpacity: 0.2, // Opacidade da sombra.
        shadowRadius: 3, // Raio da sombra.
        elevation: 5, // Elevação para Android.
    },
    infoAtivo: { // Estilos para o contêiner de informações do ativo.
        flexDirection: 'column', // Organiza itens em coluna.
    },
    nomeAtivo: { // Estilos para o nome do ativo.
        fontSize: 16, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
    },
    simboloAtivo: { // Estilos para o símbolo do ativo.
        fontSize: 12, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
    },
    valorAtivo: { // Estilos para o contêiner do valor do ativo.
        alignItems: 'flex-end', // Alinha itens ao final.
    },
    quantidadeAtivo: { // Estilos para a quantidade do ativo.
        fontSize: 16, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
    },
    valorAtivoUSD: { // Estilos para o valor do ativo em USD.
        fontSize: 12, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
    },
    itemTransacao: { // Estilos para cada item de transação.
        flexDirection: 'row', // Organiza itens em linha.
        justifyContent: 'space-between', // Espaça os itens nas extremidades.
        alignItems: 'center', // Alinha itens ao centro verticalmente.
        backgroundColor: '#2D3748', // Cor de fundo.
        borderRadius: 8, // Borda arredondada.
        padding: 12, // Preenchimento interno.
        marginBottom: 10, // Margem inferior.
        shadowColor: '#000', // Cor da sombra.
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra.
        shadowOpacity: 0.2, // Opacidade da sombra.
        shadowRadius: 3, // Raio da sombra.
        elevation: 5, // Elevação para Android.
    },
    infoTransacao: { // Estilos para o contêiner de informações da transação.
        flexDirection: 'column', // Organiza itens em coluna.
    },
    tipoTransacao: { // Estilos para o tipo de transação.
        fontSize: 16, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
    },
    dataTransacao: { // Estilos para a data da transação.
        fontSize: 12, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
    },
    detalhesTransacao: { // Estilos para os detalhes da transação.
        alignItems: 'flex-end', // Alinha itens ao final.
    },
    valorTransacao: { // Estilos para o valor da transação.
        fontSize: 16, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
    },
    statusTransacao: { // Estilos para o status da transação.
        fontSize: 12, // Tamanho da fonte.
        fontWeight: '600', // Peso da fonte.
    },
    statusSucesso: { // Cor para status de sucesso.
        color: '#4ADE80', // Verde.
    },
    statusPendente: { // Cor para status pendente.
        color: '#FACC15', // Amarelo.
    },
    itemNoticiaGrande: { // Estilos para o item de notícia grande.
        backgroundColor: '#2D3748', // Cor de fundo.
        borderRadius: 10, // Borda arredondada.
        padding: 15, // Preenchimento interno.
        marginBottom: 15, // Margem inferior.
        shadowColor: '#000', // Cor da sombra.
        shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra.
        shadowOpacity: 0.3, // Opacidade da sombra.
        shadowRadius: 5, // Raio da sombra.
        elevation: 8, // Elevação para Android.
    },
    tituloNoticiaGrande: { // Estilos para o título da notícia grande.
        fontSize: 18, // Tamanho da fonte.
        fontWeight: 'bold', // Peso da fonte em negrito.
        color: '#E2E8F0', // Cor do texto.
        marginBottom: 8, // Margem inferior.
    },
    fonteNoticiaGrande: { // Estilos para a fonte e data da notícia grande.
        fontSize: 13, // Tamanho da fonte.
        color: '#A0AEC0', // Cor do texto.
        marginBottom: 10, // Margem inferior.
    },
    trechoNoticiaGrande: { // Estilos para o resumo da notícia grande.
        fontSize: 15, // Tamanho da fonte.
        color: '#CBD5E1', // Cor do texto.
        lineHeight: 22, // Altura da linha.
    },
    botaoLerMais: { // Estilos para o botão "Ler Mais".
        alignSelf: 'flex-end', // Alinha o botão ao final.
        marginTop: 10, // Margem superior.
        paddingVertical: 5, // Preenchimento vertical.
        paddingHorizontal: 10, // Preenchimento horizontal.
        borderRadius: 5, // Borda arredondada.
        backgroundColor: '#3B82F6', // Cor de fundo azul.
    },
    textoLerMais: { // Estilos para o texto do botão "Ler Mais".
        color: '#FFFFFF', // Cor do texto branca.
        fontSize: 13, // Tamanho da fonte.
    },
});

export default estilos;