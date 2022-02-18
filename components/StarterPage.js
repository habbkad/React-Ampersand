
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function StarterPage({ navigation }) {
    return <View style={style.container}>

        <View style={style.buttonCon}>

            <TouchableOpacity style={style.button}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={style.textNext}> Hello</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button}
                onPress={() => navigation.navigate('LogIn')}>
                <Text style={style.textNext}> Hello</Text>
            </TouchableOpacity>

        </View>

    </View>;
}




const style = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonCon: {
        flexDirection: "row",
        alignSelf: "auto",
        flexWrap:'wrap',
        marginTop:500,
        alignSelf:'center'

    },
    button: {
        alignSelf: "center",
        borderBottomColor: "black",
        padding: 30,



    },
    textNext: {
        fontSize: 32,
        borderBottomEndRadius: 2,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    }
})
