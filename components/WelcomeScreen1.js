import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import spash from '../assets/image1.jpg'




 function WelcomeScreen1({navigation}) {
  return <View style={style.container}>
  
     
        <View style={style.logoContainer}>
            <Image source={spash} style={{width:"100%", height:"100%"}} />
        </View>
        <View style={style.textContainer}>
            <Text>hello</Text>
        </View>
        <View style={style.btnContainer}>
             <TouchableOpacity style={style.button}
      onPress={()=>navigation.navigate('Starter')}>
         <Text style={style.textNext}> Hello</Text>   
      </TouchableOpacity>
        </View>
     

  </View>
}


const style = StyleSheet.create({
    container:{
        flex:1
    },
    logoContainer:{
        flex:1.5,
        
    },
   
    textContainer:{
        flex:1
    }, btnContainer:{
        flex:1
    },
    button:{
        alignSelf:"center",
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




