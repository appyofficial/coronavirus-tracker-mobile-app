import React from "react";
import ListScreen from "../../screens/ListScreen/ListScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const ListScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ListScreen}
        options={({ navigation }) => ({
          title: "Countries",
          headerTitleStyle: { fontSize: 28 },
          headerStyle: { height: 120, elevation: 0, borderBottomWidth: 0 },
        })}
      />
    </Stack.Navigator>
  );
};
export default ListScreenStack;
