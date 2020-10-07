import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import formatNumber from "../../utils/formatNumber";

export default function CountryListItem({ country, cases, imgUrl, showCases }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Image style={styles.cardImage} source={{ uri: imgUrl }} />
        <Text style={styles.cardTitle}>{country}</Text>
      </View>
      {showCases && (
        <Text style={styles.cardCases}>{formatNumber(Number(cases))}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardLeft: { flexDirection: "row", alignItems: "center", flex: 0.5 },
  cardTitle: { flex: 1, fontWeight: "700", fontSize: 16, color: "gray" },
  cardImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 8,
  },
  cardCases: {
    fontSize: 16,
    fontWeight: "700",
    flex: 0.3,
    textAlign: "right",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});
