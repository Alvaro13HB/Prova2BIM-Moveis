import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import estilos from '../style';

export function Home({navigation}: any){
    return(
        <ScrollView>
        <View style={estilos.secao}>
            <Text style={estilos.tituloSecao}>Investir em Criptomoedas</Text>
            <View style={estilos.cartao}>
                <Text style={estilos.tituloCartao}>Saldo Total da Carteira</Text>
                <Text style={estilos.textoSaldo}>R$ 9.999,99</Text>
                <Text style={estilos.textoMudancaSaldo}>+3.0% (últimas 24h)</Text>
                <TouchableOpacity style={estilos.botaoPrimario} onPress={()=>{navigation.navigate("Carteira")}}>
                    <Text style={estilos.textoBotao}>Ver Detalhes da Carteira</Text>
                </TouchableOpacity>
            </View>

            <Text style={estilos.tituloSubSecao}>Criptomoedas em Destaque</Text>
            <TouchableOpacity style={estilos.itemLista}>
                <Image source={require('../../../assets/btc.png')} style={estilos.iconeCripto} />
                <View style={estilos.infoCripto}>
                    <Text style={estilos.nomeCripto}>Bitcoin</Text>
                    <Text style={estilos.simboloCripto}>BTC</Text>
                </View>
                <View style={estilos.infoPrecoCripto}>
                    <Text style={estilos.precoCripto}>$111000.</Text>
                    <Text style={[estilos.mudancaCripto, estilos.mudancaPositiva]}>+2.5%</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.itemLista}>
                <Image source={require('../../../assets/eth.png')} style={estilos.iconeCripto} />
                <View style={estilos.infoCripto}>
                    <Text style={estilos.nomeCripto}>Ethereum</Text>
                    <Text style={estilos.simboloCripto}>ETH</Text>
                </View>
                <View style={estilos.infoPrecoCripto}>
                    <Text style={estilos.precoCripto}>$3500.00</Text>
                    <Text style={[estilos.mudancaCripto, estilos.mudancaNegativa]}>-1.8%</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoSecundario} onPress={()=>{navigation.navigate("Mercado")}}>
                <Text style={estilos.textoBotao}>Ver Todos os Mercados</Text>
            </TouchableOpacity>

            <Text style={estilos.tituloSubSecao}>NFTs em Destaque</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={estilos.listaHorizontal}>
                <TouchableOpacity style={estilos.cartaoNft}>
                    <Image source={require('../../../assets/nft1.png')} style={estilos.imagemNft} />
                    <Text style={estilos.nomeNft}>CryptoPunk</Text>
                    <Text style={estilos.precoNft}>120.0 ETH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.cartaoNft}>
                    <Image source={require('../../../assets/nft2.png')} style={estilos.imagemNft} />
                    <Text style={estilos.nomeNft}>Bored Ape</Text>
                    <Text style={estilos.precoNft}>80.0 ETH</Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={estilos.botaoSecundario} onPress={()=>{navigation.navigate("Galeria")}}>
                <Text style={estilos.textoBotao}>Explorar Galeria de NFTs</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};