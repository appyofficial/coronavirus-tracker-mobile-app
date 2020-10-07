import React, { useRef, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";

import CountryListItem from "./CountryListItem";
import { AntDesign } from "@expo/vector-icons";

export default function CountryList({
  countries,
  handleRefresh,
  handleIsRefreshing,
  disabled,
  onPress,
}) {
  const flatListRef = useRef();
  const [scrollPos, setScrollPos] = useState();
  const toTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  return (
    <View style={styles.countryList}>
      <FlatList
        onScroll={(e) => {
          setScrollPos(e.nativeEvent.contentOffset.y);
        }}
        ref={flatListRef}
        data={countries}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={onPress} disabled={disabled}>
            <CountryListItem
              country={item.country}
              cases={item.cases}
              imgUrl={item.countryInfo.flag}
              showCases
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.country}
        onRefresh={() => handleRefresh()}
        refreshing={handleIsRefreshing}
      />

      {scrollPos > 1000 ? (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.countryListBtn}
          onPress={() => toTop()}
        >
          <AntDesign name="arrowup" size={24} color="white" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  countryList: {
    position: "relative",
  },
  countryListBtn: {
    position: "absolute",
    right: 18,
    bottom: 25,
    backgroundColor: "purple",
    padding: 20,
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    elevation: 10,
  },
});
