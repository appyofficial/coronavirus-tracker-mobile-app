import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Animated,
  FlatList,
  ScrollView,
} from "react-native";
import { DataContext } from "../../provider/DataProvider";
import CountryListItem from "../../components/CountryList/CountryListItem";
import StatBox from "../../components/StatBox/StatBox";
import LineGraph from "../../components/LineGraph/LineGraph";
import styles from "./OverviewScreen.css";

function OverviewScreen({ navigation }) {
  const {
    countries,
    countryISO,
    setCountryISO,
    currentCountryData,
    setCurrentCountryData,
    globalHistory,
  } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);

  //GET SELECTED COUNTRY DETAIL
  const getCurrentCountryData = async () => {
    let url =
      countryISO === "global"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryISO}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentCountryData(data));
  };

  useEffect(() => {
    getCurrentCountryData();
  }, [countryISO, setCountryISO]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 2,
            marginRight: 10,
            borderRadius: 20,
          }}
          onPress={() => setShowModal(true)}
        >
          <Text>
            {countryISO === "global" ? (
              "Global"
            ) : (
              <View>
                <Image
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 50,
                  }}
                  source={{ uri: currentCountryData.countryInfo.flag }}
                />
              </View>
            )}
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [setCountryISO, currentCountryData]);

  const handlePress = (iso) => {
    setCountryISO(iso);
    setShowModal(false);
  };

  return (
    <View style={styles.main}>
      <View
        style={{
          backgroundColor: "#483f97",
          paddingVertical: 18,
          paddingHorizontal: 5,
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <StatBox
            title="Total cases"
            cases={currentCountryData?.cases}
            size="medium"
            backgroundColor="#ffb259"
          />
          <StatBox
            title="Active cases"
            cases={currentCountryData?.active}
            size="medium"
            backgroundColor="#4cb5ff"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StatBox
            title="Total recovered"
            cases={currentCountryData?.recovered}
            backgroundColor="#4BD97A"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <StatBox
            title="Critical cases"
            cases={currentCountryData?.critical}
            size="medium"
            backgroundColor="#8f5aff"
          />
          <StatBox
            title="Deaths"
            cases={currentCountryData?.deaths}
            size="medium"
            backgroundColor="#ff5958"
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        statusBarTranslucent
      >
        <View style={styles.modalView}>
          <View
            style={{
              width: "100%",
              padding: 10,
              paddingHorizontal: 20,
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>
              Select
            </Text>
          </View>
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={styles.modalScrollView}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity style={styles.modalViewItem}>
              <Text>Global</Text>
            </TouchableOpacity>
            {countries.map(({ country, countryInfo }) => (
              <TouchableOpacity
                style={styles.modalViewItem}
                key={country}
                onPress={() => handlePress(countryInfo.iso2)}
              >
                <Text>{country}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

export default OverviewScreen;
