import React, { useContext } from "react";
import { Text, View } from "react-native";
import OverviewScreen from "../../screens/OverviewScreen/OverviewScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { DataContext } from "../../provider/DataProvider";
const Stack = createStackNavigator();
const OverviewScreenStack = () => {
  const { currentCountryData, countryISO } = useContext(DataContext);
  const HeaderTitle = ({ title, subTitle, dark }) => (
    <View style={{ padding: 10 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: dark ? "black" : "white",
        }}
      >
        {title}
      </Text>
      <Text style={{ color: dark ? "grey" : "#f9f9f9" }}>{subTitle}</Text>
    </View>
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={OverviewScreen}
        options={({ navigation }) => ({
          title:
            countryISO === "global" ? (
              <HeaderTitle
                title="Global"
                subTitle="Coronavirus stats in The World."
              />
            ) : (
              <HeaderTitle
                title={currentCountryData.country}
                subTitle={`Coronavirus stats in ${currentCountryData.country}.`}
              />
            ),
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
