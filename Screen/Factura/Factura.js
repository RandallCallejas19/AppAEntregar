import React from "react";
import { SafeAreaView, StyleSheet, TextInput, CheckBox, text, Text, View, Button } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import ListArticles from "./ListarArticulos";
const Factura = (props) => {
  /*
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


*/

  return (
    <SafeAreaView style={styles.fondo}>
    <Text style={{fontSize:32, textAlign:"center"}}> Ingresar Datos de La Factura  </Text>
  

  <View>
   
    <View style={styles.item}>
    <Text > Nombre Cliente  </Text>
      <TextInput
        style={styles.input}
    
        placeholder="Buscar"
      />
    </View>

    <View style={styles.item}>
    <Text > Fecha  </Text>
      <Button title="Agregar Fecha"  />
    </View>



      <View style={styles.item}>
      <Text >Articulo a Vender</Text>
      <Button title="Agregar Articulo"  
      onPress={() =>{
        props.navigation.navigate("ListArticles")
      }
      }
      />
      
    </View>
  </View>
    



      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  item:{
    marginTop: 20, 
    textAlign: "center",
    fontSize:20, 
    alignItems:"center",
    paddingBlockEnd:10,
    backgroundColor: "white",
    marginRight:"10",
  },

  fondo:{
    
  },

});


export default Factura;