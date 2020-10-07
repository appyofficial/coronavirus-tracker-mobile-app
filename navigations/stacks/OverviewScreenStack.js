import React, { useContext } from "react";
import OverviewScreen from "../../screens/OverviewScreen/OverviewScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { DataContext } from "../../provider/DataProvider";
const Stack = createStackNavigator();
const OverviewScreenStack = () => {
  const { currentCountryData, countryISO } = useContext(DataContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={OverviewScreen}
        options={({ navigation }) => ({
          title:
            countryISO === "global" ? "Global" : currentCountryData.country,
          headerStyle: {
            backgroundColor: "#483f97",
            height: 120,
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "white",
          headerTitleStyle: { fontSize: 28 },
        })}
      />
    </Stack.Navigator>
  );
};

export default OverviewScreenStack;
