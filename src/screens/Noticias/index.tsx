import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import estilos from "../style";

export function Noticias(){
    return(
        <View style={estilos.secao}>
                    <Text style={estilos.tituloSecao}>Últimas Notícias</Text>
                    <TouchableOpacity style={estilos.itemNoticiaGrande}>
                        <Text style={estilos.tituloNoticiaGrande}>Bitcoin atinge nova máxima histórica!</Text>
                        <Text style={estilos.fonteNoticiaGrande}>CryptoNews - 10/01/2025</Text>
                        <Text style={estilos.trechoNoticiaGrande}>O Bitcoin disparou nas últimas 24 horas, impulsionado por fortes movimentos de mercado e adoção institucional crescente. Analistas preveem que a tendência de alta pode continuar nas próximas semanas, com o mercado de criptoativos mostrando resiliência...</Text>
                        <TouchableOpacity style={estilos.botaoLerMais}>
                            <Text style={estilos.textoLerMais}>Ler Mais</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.itemNoticiaGrande}>
                        <Text style={estilos.tituloNoticiaGrande}>NFTs: O futuro da arte digital?</Text>
                        <Text style={estilos.fonteNoticiaGrande}>Blockchain Today - 09/01/2025</Text>
                        <Text style={estilos.trechoNoticiaGrande}>A popularidade dos Tokens Não Fungíveis (NFTs) continua a crescer, com artistas e colecionadores explorando novas formas de expressão e propriedade digital. Discutimos o impacto cultural e econômico dos NFTs no mercado de arte e além...</Text>
                        <TouchableOpacity style={estilos.botaoLerMais}>
                            <Text style={estilos.textoLerMais}>Ler Mais</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
    )
}
