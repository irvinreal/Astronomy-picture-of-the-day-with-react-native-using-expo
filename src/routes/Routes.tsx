import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import colors from "@/constants/colors";
import { RootStackParams } from "@/types";
import Detail from "@/views/Detail";
import Home from "@/views/Home";

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: colors.bg1,
  },
  headerTitleStyle: {
    color: "#fff",
  },
  headerTintColor: "#fff",
  headerTitleAlign: "center",
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions} />
        <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
