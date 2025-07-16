import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./bottom-tabs.routes";

export function Routes(){
    return(
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    );
};