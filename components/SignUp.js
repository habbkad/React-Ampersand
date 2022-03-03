import { React, useState } from "react";
import {
  View,
  InpiText,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function SignUp({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  let imagePick
  if(image== null){
    imagePick=<View>
      <Ionicons name="md-person-outline" size={150} color="black" style={style.imageText}/>
      <Text style={style.imageText}>ADD PROFILE PHOTO</Text>
    </View> 
  }else{
    imagePick= image && (
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: "100%" }}
      />
    )
  }

  return (
    <View style={style.Container}>
        <View style={{flex:3}}>
        <TouchableOpacity onPress={pickImage}>
          {/* <Ionicons name="md-person-outline" size={150} color="black" />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )} */}
          {imagePick}
          
        </TouchableOpacity>
        </View>
        <View style={{flex:6, marginTop:20}}>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}> Full Name</Text>

          <TextInput style={style.textInput} placeholder="full name" />
        </View>

        <View style={style.dedsContainer}>
          <Text style={style.inputText}> Email</Text>

          <TextInput style={style.textInput} placeholder="Input email" />
        </View>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}> Phone Number</Text>

          <TextInput style={style.textInput} placeholder="phone number" />
        </View>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}>Role</Text>

          <TextInput style={style.textInput} placeholder=" Role" />
        </View>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}> Twitter</Text>

          <TextInput style={style.textInput} placeholder="Twitter" />
        </View>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}> LinkedIn</Text>

          <TextInput style={style.textInput} placeholder="LinkedIn" />
        </View>
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity style={style.signUp}>
          <Text>REGISTER</Text>
        </TouchableOpacity>
        </View>
      {/* <View style={style.imageCon}>
       
      </View>
      <View style={{flex:1, }}>
        
      </View>

      <View style={{flex:1}}>
        <TouchableOpacity style={style.signUp}>
          <Text>REGISTER</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 10,
  },
 
  imageText: {
    alignSelf: "center",
    marginBottom: 20,
  },
  dedsContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: "#ebe6e6",
    borderBottomWidth: 1,
  },
  textInput: {
    paddingTop: 1,
    width: 230,
    textAlign: "right",
  },
  inputText: {
    textAlign: "left",
    width: 100,
  },
  signUp: {
    alignSelf: "center",
    backgroundColor: "#f5291b",
    width: 300,
    height: 40,
    alignItems: "center",
    padding: 9,
    color: "white",
    borderRadius: 3,
  },
});
