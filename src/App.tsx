import React from 'react';
import { View } from 'react-native';
import { Routes } from './routes';
import estilos from './screens/style';

export default function App() {
    return (
        <View style={estilos.containerPrincipal}>
            <Routes/>
        </View>
    );
}


//Justificativa das decisões tomadas: Separamos cada "seção" do ScrollView principal em diferentes telas, organizando aquelas acessáveis por botões em StackNavigator
//                                    e a seção notícias junto ao restante num BottomTabNavigator porque estava mais adequado ao layout e intuitivade da aplicação.