import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";

export default function ChooseOrientation() {
  const [orientationText, orientationTextSetter] = useState("portrait");
  useEffect(() => {
    // async function changeScreenOrientation() {
    //   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    // }
    // screenOrient();
  }, []);

  const screenOrientPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
    orientationTextSetter("Portrait");
  };

  const screenOrientLandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    orientationTextSetter("Landscape");
  };

  return (
    <View style={styles.container}>
      <View style={styles.vwButton}>
        <TouchableOpacity
          style={styles.touchOpButton}
          onPress={() => screenOrientLandscape()}
        >
          <Text style={styles.txtButton}>Landscape</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vwButton}>
        <TouchableOpacity
          style={styles.touchOpButton}
          onPress={() => screenOrientPortrait()}
        >
          <Text style={styles.txtButton}>Portrait</Text>
        </TouchableOpacity>
      </View>
      <Text>We are in {orientationText} </Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  vwButton: {
    padding: 10,
  },
  touchOpButton: {
    padding: 5,
    backgroundColor: "gray",
  },
});
