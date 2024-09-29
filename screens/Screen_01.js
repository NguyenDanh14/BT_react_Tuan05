import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Screen_01({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Image source={require("../assets/DATA/Container_17.png")} />
      </View>
      <View style={styles.style2}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Boost Productivity
        </Text>
        <Text style={{ color: "gray", marginTop: 10, fontSize: 15 }}>
          Simplify tasks, boost productivity
        </Text>
      </View>
      <View style={styles.style3}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Screen_02")}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Screen_03")}>
          <Text style={styles.buttonText1}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    height: 40,
    width: 340,
    backgroundColor: '#00bdd6',
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    padding: 5,
  },
  buttonText1: {
    
    fontSize: 20,
    height: 40,
    width: 340,
    color: "black",
    borderRadius: 10,
    textAlign: "center",
    padding: 5,
  },
  style2: {
    justifyContent: "flex-start",
    width: "90%",
    padding: 10,
  },
  style3: {
    justifyContent: "center",
    alignItems: "center",
  },
});