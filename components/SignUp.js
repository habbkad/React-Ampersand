import React from 'react';
import { View, InpiText, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUp() {
    return <View style={style.Container}>
        <View style={style.imageCon}>
            <TouchableOpacity>
                <Ionicons name="md-person-outline" size={200} color="black" />
                <Text style={style.imageText}>ADD PROFILE PHOTO</Text>
            </TouchableOpacity>

        </View>
        <View>

            <View style={style.dedsContainer}>

                <Text style={style.inputText}> Full Name</Text>

                <TextInput style={style.textInput}
                    placeholder="full name"
                />


            </View>

            <View style={style.dedsContainer}>

                <Text style={style.inputText}> Email</Text>

                <TextInput style={style.textInput}
                    placeholder="Input email"
                />


            </View>
            <View style={style.dedsContainer}>

                <Text style={style.inputText}> Phone Number</Text>

                <TextInput style={style.textInput}
                    placeholder="phone number"
                />


            </View>
            <View style={style.dedsContainer}>

                <Text style={style.inputText}>Role</Text>

                <TextInput style={style.textInput}
                    placeholder=" Role"
                />


            </View>
            <View style={style.dedsContainer}>

                <Text style={style.inputText}> Twitter</Text>

                <TextInput style={style.textInput}
                    placeholder="Twitter"
                />


            </View>
            <View style={style.dedsContainer}>

                <Text style={style.inputText}> LinkedIn</Text>

                <TextInput style={style.textInput}
                    placeholder="LinkedIn"
                />


            </View>

        </View>


        <TouchableOpacity>
            <Text>REGISTER</Text>
        </TouchableOpacity>



    </View>
}


const style = StyleSheet.create({
    Container: {
        flex: 1
    },
    imageCon: {
        alignItems: 'center',
        backgroundColor: '#e0d8d7',
    },
    imageText: {
        alignSelf: 'center',
        marginBottom: 20
    },
    dedsContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5,
        padding: 10,
        marginLeft: 10,
        borderBottomColor: '#ebe6e6',
        borderBottomWidth: 1
    },
    textInput: {
        
        paddingTop: 1,
        width: 200,
        textAlign:"right"


    },
    inputText:{
        textAlign:'left',
        width:100
    }
})


