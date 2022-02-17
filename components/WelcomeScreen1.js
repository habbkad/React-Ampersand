import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';




 function WelcomeScreen1({navigation}) {
  return <View style={style.container}>
      <Text> Hello</Text>
      <Text> Hello</Text>
      <Text> Hello</Text>
      <Text> Hello</Text>
      <Text> Hello</Text>
     

      <TouchableOpacity style={style.button}
      onPress={()=>navigation.navigate('Starter')}>
         <Text style={style.textNext}> Hello</Text>   
      </TouchableOpacity>

  </View>
}


const style = StyleSheet.create({
    container:{
        flex:1
    },
    button:{
        alignSelf:"center",
        marginTop:500,
        borderBottomColor: "black",
        padding:10


    },
    textNext:{
        fontSize:32,
        borderBottomEndRadius:2,
        borderBottomWidth:1,
        borderBottomColor:"black"
    }
})


export default WelcomeScreen1




