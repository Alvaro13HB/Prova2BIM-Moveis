import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import estilos from "../style";

export function Carteira(){
    return(
        <View style={estilos.secao}>
        <Text style={estilos.tituloSecao}>Minha Carteira</Text>
        <View style={estilos.cartao}>
            <Text style={estilos.tituloCartao}>Saldo Total</Text>
            <Text style={estilos.textoSaldo}>R$ *******</Text>
            <View style={estilos.acoesCarteira}>
                <TouchableOpacity style={estilos.botaoPequeno}>
                    <Text style={estilos.textoBotaoPequeno}>Depositar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaoPequeno}>
                    <Text style={estilos.textoBotaoPequeno}>Sacar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botaoPequeno}>
                    <Text style={estilos.textoBotaoPequeno}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>

        <Text style={estilos.tituloSubSecao}>Meus Ativos</Text>
        <View style={estilos.itemAtivo}>
            <View style={estilos.infoAtivo}>
                <Text style={estilos.nomeAtivo}>Bitcoin</Text>
                <Text style={estilos.simboloAtivo}>BTC</Text>
            </View>
            <View style={estilos.valorAtivo}>
                <Text style={estilos.quantidadeAtivo}>0.0500</Text>
                <Text style={estilos.valorAtivoUSD}>$ 23000.00</Text>
            </View>
        </View>
        <View style={estilos.itemAtivo}>
            <View style={estilos.infoAtivo}>
                <Text style={estilos.nomeAtivo}>Ethereum</Text>
                <Text style={estilos.simboloAtivo}>ETH</Text>
            </View>
            <View style={estilos.valorAtivo}>
                <Text style={estilos.quantidadeAtivo}>0.8000</Text>
                <Text style={estilos.valorAtivoUSD}>$2800.00</Text>
            </View>
        </View>

        <Text style={estilos.tituloSubSecao}>Histórico de Transações</Text>
        <View style={estilos.itemTransacao}>
            <View style={estilos.infoTransacao}>
                <Text style={estilos.tipoTransacao}>Compra BTC</Text>
                <Text style={estilos.dataTransacao}>09/01/2025</Text>
            </View>
            <View style={estilos.detalhesTransacao}>
                <Text style={estilos.valorTransacao}>0.01 BTC</Text>
                <Text style={[estilos.statusTransacao, estilos.statusSucesso]}>Concluída</Text>
            </View>
        </View>
        <View style={estilos.itemTransacao}>
            <View style={estilos.infoTransacao}>
                <Text style={estilos.tipoTransacao}>Depósito ETH</Text>
                <Text style={estilos.dataTransacao}>07/01/2025</Text>
            </View>
            <View style={estilos.detalhesTransacao}>
                <Text style={estilos.valorTransacao}>0.2 ETH</Text>
                <Text style={[estilos.statusTransacao, estilos.statusPendente]}>Pendente</Text>
            </View>
        </View>
    </View>
    )
}