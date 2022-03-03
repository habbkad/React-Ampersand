import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import SvgQRCode from 'react-native-qrcode-svg';


function Simple() {
    return <SvgQRCode size={200} value="http://example.comiherhflhaihrifiaehihfiliehigfhoerhgioerhgoi"  style={{height:150, width:150}} />;
}
export default function QrCodeGen() {
    return (
        <View style={styles.container}>
            <View
                style={{
                    // width: 100,
                    // height:150,
                    alignItems: 'center',
                }}>
                <Simple/>
             
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        // alignItems: 'center',
        backgroundColor: '#ecf0f1',
        
    },
});