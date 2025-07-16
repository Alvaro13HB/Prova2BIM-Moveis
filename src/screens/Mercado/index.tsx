import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import estilos from "../style";

export function Mercado({navigation}: any){
    const [textoBusca, setTextoBusca] = React.useState('');

    return(
        <View style={estilos.secao}>
            <Text style={estilos.tituloSecao}>Mercados</Text>
            <TextInput
                style={estilos.campoBusca}
                placeholder="Buscar criptomoeda..."
                placeholderTextColor="#888"
                value={textoBusca}
                onChangeText={setTextoBusca}
            />
            <View style={estilos.containerFiltro}>
                <TouchableOpacity style={estilos.botaoFiltro}>
                    <Text style={estilos.textoBotaoFiltro}>Todas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaoFiltro}>
                    <Text style={estilos.textoBotaoFiltro}>Top Ganhadoras</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaoFiltro}>
                    <Text style={estilos.textoBotaoFiltro}>Top Perdedoras</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={estilos.itemLista}>
                <Image source={require('../../../assets/btc.png')} style={estilos.iconeCripto} />
                <View style={estilos.infoCripto}>
                    <Text style={estilos.nomeCripto}>Bitcoin</Text>
                    <Text style={estilos.simboloCripto}>BTC</Text>
                </View>
                <View style={estilos.infoPrecoCripto}>
                    <Text style={estilos.precoCripto}>$111000.00</Text>
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
            <TouchableOpacity style={estilos.itemLista}>
                <Image source={require('../../../assets/sol.png')} style={estilos.iconeCripto} />
                <View style={estilos.infoCripto}>
                    <Text style={estilos.nomeCripto}>Solana</Text>
                    <Text style={estilos.simboloCripto}>SOL</Text>
                </View>
                <View style={estilos.infoPrecoCripto}>
                    <Text style={estilos.precoCripto}>$150.00</Text>
                    <Text style={[estilos.mudancaCripto, estilos.mudancaPositiva]}>+5.5%</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};