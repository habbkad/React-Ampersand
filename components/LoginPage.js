import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import splash from '../assets/image1.jpg'

export default function LoginPage() {
    return <View style={style.container}>

        <Image source={splash} style={{ width: 400, height: 300,  }} />


        <View>

            <View style={style.dedsContainer}>

                <Text> Email</Text>

                <TextInput style={style.textInput}
                    placeholder="Input email"
                />


            </View>

            <View style={style.dedsContainer}>

                <Text> Password</Text>

                <TextInput style={style.textInput}
                    placeholder="password"
                    secureTextEntry={true}
                />

           
            </View>

            <TouchableOpacity style={style.signInButton}>
                <Text style={style.btnText}>SIGN IN</Text>
            </TouchableOpacity>


        </View>

        <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={style.forgotText}>Forgot? </Text>
            <Text style={style.forgotText2}>Reset password </Text>

        </View>

        

    </View>
}



const style = StyleSheet.create({

    container: {
        flex: 1,
    },
    dedsContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20,
        padding: 10,
        marginLeft: 10,
        borderBottomColor: '#ebe6e6',
        borderBottomWidth: 1
    },
    textInput: {
        marginLeft: 100,
        paddingTop: 1,
        width: 200,
        

    },
    signInButton: {
        backgroundColor:'#f5291b',
        marginTop:20,
        alignItems:'center',
        height:40,
        width:300,
        marginLeft:30

    },
    btnText:{
        marginTop:9,
        fontSize:17,
        color:'white'
    },
    forgotText:{
        marginTop:20,
        marginLeft:10,
        color:'#f5291b'
    },
    forgotText2:{
        marginTop:20,
        marginLeft:10,
        color:'#f5291b',
        borderBottomWidth:1,
        borderBottomColor:'#f5291b'
    }


})
