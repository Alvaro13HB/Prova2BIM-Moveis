import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import estilos from "../style";

export function Galeria(){
    return(
        <View style={estilos.secao}>
            <Text style={estilos.tituloSecao}>Galeria de NFTs</Text>
            <View style={estilos.containerGradeNft}>
                <TouchableOpacity style={estilos.cartaoGradeNft}>
                    <Image source={require('../../../assets/nft1.png')} style={estilos.imagemGradeNft} />
                    <Text style={estilos.nomeGradeNft}>CryptoPunk</Text>
                    <Text style={estilos.precoGradeNft}>120.0 ETH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.cartaoGradeNft}>
                    <Image source={require('../../../assets/nft2.png')} style={estilos.imagemGradeNft} />
                    <Text style={estilos.nomeGradeNft}>Bored Ape</Text>
                    <Text style={estilos.precoGradeNft}>80.0 ETH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.cartaoGradeNft}>
                    <Image source={require('../../../assets/nft3.png')} style={estilos.imagemGradeNft} />
                    <Text style={estilos.nomeGradeNft}>Art Block</Text>
                    <Text style={estilos.precoGradeNft}>5.0 ETH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.cartaoGradeNft}>
                    <Image source={require('../../../assets/nft4.png')} style={estilos.imagemGradeNft} />
                    <Text style={estilos.nomeGradeNft}>Decentraland </Text>
                    <Text style={estilos.precoGradeNft}>3.0 ETH</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};