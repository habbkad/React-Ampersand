import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import splash from "../assets/image1.jpg";

export default function StarterPage({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.imageCon}>
        <Image source={splash} style={{ width: 413, height: 250 }} />
      </View>
      <View style={style.textCon}></View>
      <View style={style.text}>
        <Text>Bombocalat</Text>
      </View>

      <View style={style.buttonCon}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={style.textNext}> Hello</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={style.textNext}> Hello</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageCon: {
    flex: 2,
  },
  textCon: {
    flex: 1,
  },
  text:{
      flex:1
  },
  buttonCon: {
    flex: 1,
    flexDirection: "row",
},
  button: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    
  },
  textNext: {
    fontSize: 32,
    borderBottomWidth:1,
    borderColor:'black'
  
  },
});
