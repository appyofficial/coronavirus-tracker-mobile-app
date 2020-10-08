import React from "react";
import { ListScreenStack, OverviewScreenStack } from "./stacks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const AppContainer = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={OverviewScreenStack}
        options={{
          title: "Overview",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Countries"
        component={ListScreenStack}
        options={{
          title: "Countries",
          tabBarIcon: () => <AntDesign name="bars" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
export default AppContainer;
