
import { ImageBackground, StyleSheet, Text, View, Image, SafeAreaView,Button, Platform, Alert, StatusBar, Dimensions } from "react-native";
import { useDimensions, useDeviceOrientation} from "@react-native-community/hooks";


export default function App() {
const image = require('./assets/background.jpg')

// const image = { uri: "https://reactjs.org/logo-og.png" };
return (

  <View 
  style = {styles.container
  }
  >
   <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>

  </View>
);



}

// const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
