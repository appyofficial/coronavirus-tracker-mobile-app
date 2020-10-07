import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  modalView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton: {
    marginVertical: 20,
    paddingVertical: 10,
  },
  modalCancelButton: {
    position: "absolute",
    right: 20,
    top: 10,
  },
  headerRightBtn: {
    paddingHorizontal: 10,
  },
});

export default styles;
