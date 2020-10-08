import React from "react";
import { View, Text } from "react-native";
import ListScreen from "../../screens/ListScreen/ListScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const ListScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Countries"
        component={ListScreen}
        options={({ navigation }) => ({
          title: (
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                Countries
              </Text>
              <Text style={{ color: "grey" }}>With total cases</Text>
            </View>
          ),
          headerTitleStyle: { fontSize: 28 },
          headerStyle: {
            height: 120,
            elevation: 0,
            borderBottomWidth: 0,
          },
        })}
      />
    </Stack.Navigator>
  );
};
export default ListScreenStack;
