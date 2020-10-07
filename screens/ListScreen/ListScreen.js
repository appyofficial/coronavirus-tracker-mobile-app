import React, { useState, useContext, useLayoutEffect } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Text,
  TouchableHighlight,
  Animated,
} from "react-native";
import { CountryList } from "../../components";
import { DataContext } from "../../provider/DataProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./ListScreen.css";

const SortButton = ({ onClick }) => (
  <View onClick={onClick} style={{ marginRight: 10 }}>
    <MaterialCommunityIcons name="sort" size={24} color="black" />
  </View>
);

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

function ListScreen({ navigation }) {
  const data = useContext(DataContext);
  const [sortCountries, setSortCountries] = useState([...data.countries]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    setIsRefreshing(false);
  };

  const handlePress = () => {
    //setSortCountries(sortCountries?.sort((a, b) => a.cases - b.cases));
    setShowModal(true);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handlePress} style={styles.headerRightBtn}>
          <SortButton />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.main}>
      {!sortCountries ? (
        <ActivityIndicator />
      ) : (
        <CountryList
          countries={sortCountries}
          handleIsRefreshing={isRefreshing}
          handleRefresh={onRefresh}
        />
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        statusBarTranslucent
      >
        <AnimatedTouchable
          style={{
            flex: 1,
          }}
          onPress={() => {
            setShowModal(false);
          }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setSortCountries(
                  sortCountries?.sort((a, b) => a.cases - b.cases)
                );
                setShowModal(false);
              }}
            >
              <Text>Least affected countries</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setSortCountries(
                  sortCountries?.sort((a, b) => b.cases - a.cases)
                );
                setShowModal(false);
              }}
            >
              <Text>Most affected countries</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setSortCountries(
                  sortCountries?.sort((a, b) =>
                    a.country.localeCompare(b.country)
                  )
                );
                setShowModal(false);
              }}
            >
              <Text>A-Z alphabetic order</Text>
            </TouchableOpacity>
            <TouchableHighlight
              style={styles.modalCancelButton}
              onPress={() => {
                setShowModal(false);
              }}
            >
              <MaterialIcons name="cancel" size={34} color="red" />
            </TouchableHighlight>
          </View>
        </AnimatedTouchable>
      </Modal>
    </View>
  );
}

export default ListScreen;
