import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";


import {  doc, Firestore } from "firebase/firestore"


import db from "../../database/firebase";
import { setDoc } from "firebase/firestore/lite";


const AddArticle = (props) => {
  const initalState = {
    name: "",
    email: "",
    phone: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {

      try {
      // const add = await firestore.db.collection("users").doc("newuser").set({
         await setDoc(doc(db, 'user', 'newuser'),{
          name: state.name,
          email: state.email,
          phone: state.phone,
        });

       // props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="phone"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>

      <View style={styles.button}>
        <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddArticle;


























/*import React, {useEffect, useState} from "react";

import { DocumentSnapshot, Firestore, QuerySnapshot } from "firebase/firestore/lite";
import { async } from "@firebase/util";
import { TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const InsertarArticulos = () =>{













  

  //const [data, setdata]= useState([])
 // const [rdata, setRTData] = useState([])

 // const [nombre, setNombre] = useState('')
 // const [descripcion, setDescripcion] = useState('')

  async function loadData(){
    try{
      const Articulos= await Firestore().collection('Articulos').get()
      setdata(Articulos.docs)
    }catch(e){
      console.log(e)
    }
  }

  return{
      
     
      
  }
 /*
 async function loadRData(){

   const suscriber = firestore().collection('Articulos').onSnapshot(QuerySnapshot =>{

    const Articulos = []
    QuerySnapshot.array.forEach(DocumentSnapshot => {
      Articulos.push{
        ...DocumentSnapshot.data(),
        key: DocumentSnapshot.id
     )}
    )}
        setRTData(Articulos)
      })
  return()=>suscriber()
    }
    useEffect(() => {
      loadData()
      loadRData()
    } [])
    
    */
  
 






 



