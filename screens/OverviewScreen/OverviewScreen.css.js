import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  modalView: {
    position: "absolute",
    bottom: 0,

    width: "100%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "center",
  },
  card: {
    padding: 20,
    width: Dimensions.get("window").width / 2 - 15,
    margin: 5,
  },
  cardSmall: {
    padding: 20,
    width: Dimensions.get("window").width / 3 - 15,
    margin: 5,
  },
  modalViewItem: {
    backgroundColor: "#f9f9f9",
    padding: 18,
    margin: 5,
    borderRadius: 10,
    width: "100%",
  },
  modalScrollView: {
    width: "100%",
    padding: 10,
  },
});
export default styles;
