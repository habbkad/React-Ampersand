import { React, useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import QrCodeGen from './QrCodeGen'
import splash from '../assets/image1.jpg'


export default function ExchangeInformation() {




  return (
    <View style={style.container}>
      <View style={style.firstTextCon}>
        <Text style={{ marginBottom: 20, }}>Exchange Contact Information</Text>
        <Text>Share this Qr code below to share your contacts</Text>
      </View>

      <View style={{flex:1,}}>
        <QrCodeGen />
      </View>


      <View >
        <View style={style.personInfo}>

          <Image source={splash} style={{ width: 60, height: 60, borderRadius: 35 }} />
          <View style={style.contactText}>
            <Text>Helen Baker</Text>
            <Text>Head of marking</Text>

          </View>
        </View>

      </View>

      <View style={style.scanBtnCon} >
        <View style={style.scanText}>
          <Text style={{marginTop:4}} >Want to add new connection?</Text>
          <TouchableOpacity style={style.btnScan}>
            <Text style={{alignSelf:'center',padding:2}}> Scan Qr</Text>
          </TouchableOpacity>
          </View>
        
      </View>


    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1
  },
  firstTextCon: {
    flex:0.7,
    marginTop: 30,
    margin: 20,

  },
  personInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    alignContent:'space-between',
    marginLeft:30,
    marginTop:80
    
  },

  contactText: {
    marginLeft: 20,
    alignContent: 'space-between',


  },
  scanBtnCon:{
    flex:0.3,
    borderTopWidth: 2,
    borderTopColor:'black',
    marginTop:50,
    paddingLeft:30,
    paddingRight:30
   
  },
  scanText:{
      marginTop:10, 
    flexDirection:'row',
    alignContent:'space-between'
  },
  btnScan:{
      marginLeft:50,
      borderWidth:1,
      borderColor:"red",
      width:100,
      height:25,


  }
})