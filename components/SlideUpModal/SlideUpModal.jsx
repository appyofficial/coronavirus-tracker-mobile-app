import React, { useState, useRef } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

export default function SlideUpModal({ children, visible, onPress }) {
  const [showModal, setShowModal] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 10,
    }).start();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      statusBarTranslucent
    >
      <AnimatedTouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0 , 0.1)",
          opacity: fadeAnim,
        }}
        onPress={() => {
          !showModal;
          fadeOut();
        }}
      >
        <View style={styles.modalView}>
          {children}
          <TouchableHighlight
            style={styles.modalCancelButton}
            onPress={() => {
              !visible;
            }}
          >
            <MaterialIcons name="cancel" size={34} color="red" />
          </TouchableHighlight>
        </View>
      </AnimatedTouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  modalCancelButton: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});
