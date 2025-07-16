import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

const {Screen, Navigator} = createStackNavigator();

import { ScreenHome, ScreenCarteira, ScreenGaleria, ScreenMercado } from "../screens";

export default function StackRoutes(){
    return(
        <Navigator initialRouteName="Home"
        screenOptions={({route}) => ({
            headerStyle: {
                backgroundColor: '#0F172A',
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
              },
              headerTintColor: '#0F172A',
              headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              },
              headerTitleAlign: 'center',
              headerBackImage: () => (<Ionicons name={"arrow-back"} size={25} color={'white'} />),
              animation: "none",
        })}
        >
            <Screen 
                name="Home"
                component={ScreenHome}
            />

            <Screen 
                name="Carteira"
                component={ScreenCarteira}
            />

            <Screen 
                name="Galeria"
                component={ScreenGaleria}
            />

            <Screen 
                name="Mercado"
                component={ScreenMercado}
            />
        </Navigator>
    )
}
