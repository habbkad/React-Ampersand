
import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'

export default function StarterPage({navigation}) {
  return <View style={style.container}>
      
        <View style={style.buttonCon}>

        <TouchableOpacity style={style.button}
      onPress={()=>navigation.navigate('SignUp')}>
         <Text style={style.textNext}> Hello</Text>   
      </TouchableOpacity>

      <TouchableOpacity style={style.button}
      onPress={()=>navigation.navigate('LogIn')}>
         <Text style={style.textNext}> Hello</Text>   
      </TouchableOpacity>

        </View>

  </View>;
}




const style = StyleSheet.create({
    container:{
        flex:1
    },
    buttonCon:{
        flex:1,
        flexDirection:"row",
        alignSelf:"auto",
        alignItems:'stretch'
        
    },
    button:{
        alignSelf:"center",
        marginTop:500,
        borderBottomColor: "black",
        padding:10,
        marginLeft:50
        


    },
    textNext:{
        fontSize:32,
        borderBottomEndRadius:2,
        borderBottomWidth:1,
        borderBottomColor:"black"
    }
})
