import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start your app!</Text>
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
  text:{
    color:"green"
  }
});


{/*<View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Open up App.js to start your app!</Text>
</View>*/}

//<StatusBar style="auto" />