
import { StyleSheet, Text, View, Image, SafeAreaView,Button, Platform, Alert, StatusBar, Dimensions } from "react-native";
import { useDimensions, useDeviceOrientation} from "@react-native-community/hooks";


export default function App() {
// const img ={require("./assets/background.jpg")};

return (

  <View 
  style = {{
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row", //horizontal
    justifyContent: "space-evenly" , // main,
    alignItems: "center", // secondary 
    alignContent: "center",
    flexWrap: "wrap"
  }}
  >

<View
style = {{
  backgroundColor: "dodgerblue",
  // flexBasis: 100,
  // flexShrink: 1,
  width: 200,
  // flex: 1,
  height: 100,
  // alignSelf: "flex-start"

}}
/>
<View
style = {{
  backgroundColor: "orange",
  width: 100,
  height: 100, 
  // top: 50,
  // right: 50,
  // position: "absolute"


}}
/>
{/* <View
style = {{
  backgroundColor: "tomato",
  width: 100,
  height: 100

}}
/>
<View
style = {{
  backgroundColor: "gray",
  width: 100,
  height: 100

}}
/> */}
<View
style = {{
  backgroundColor: "green",
  width: 100,
  height: 100

}}
/>

  </View>
);



}

// const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  //  justifyContent: "center",
  //  alignItems: "center",
   paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0,
  },
});
