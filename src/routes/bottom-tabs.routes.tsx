import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const {Screen, Navigator} = createBottomTabNavigator();

import { ScreenNoticias } from "../screens";
import StackRoutes from "./stack.routes";

export default function TabRoutes(){
    return(
        <Navigator initialRouteName="Start"
        screenOptions={({ route }) => ({
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
            animation: "none",
    
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#eee',
            tabBarStyle: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: '#0F172A',
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
              height: 80,
              paddingBottom: 5,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },

            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any = "";
    
              if(route.name === 'Start') {
                iconName = focused ? 'home' : 'home-outline';
              }
              else if (route.name === 'Noticias') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
            <Screen 
                name="Start"
                component={StackRoutes}
                options={{
                    title: "Início",
                    headerShown: false,
                }}
            />

            <Screen
                name="Noticias"
                component={ScreenNoticias}
                options={{
                  title: "Notícias"
                }}
            />
        </Navigator>
    )
}
