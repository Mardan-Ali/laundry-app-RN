import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import logo from "./assets/mardan.jpeg";
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Image
          source={logo}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        ></Image>
        <Text style={{ fontSize: 30 }}>Mardan Ali </Text>
        <Text style={{ fontStyle: "italic" }}> Full Stack Developer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 30,
  },
});
