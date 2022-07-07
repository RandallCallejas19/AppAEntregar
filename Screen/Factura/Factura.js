import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, CheckBox, text, Text, View, Button } from "react-native";
// import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
// import ListArticles from "./ListarArticulos";
import _ from "lodash"

const Factura = (props) => {
  const [name, setName] = useState()
  const [list, setList] = useState([])

  const [articleName, setArticleName] = useState()
  const [price, setPrice] = useState()

  const date = new Date().toLocaleDateString()

  const onPushData = () => {
    const item = {
      name: articleName,
      price
    }

    setList([...list, item])

    setArticleName("")
    setPrice("")
  }



  return (
    <SafeAreaView style={styles.fondo}>
      <Text style={{ fontSize: 32, textAlign: "center" }}> Ingresar Datos de La Factura  </Text>
      <View>
        <View style={styles.item}>
          <Text> Nombre Cliente  </Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Buscar"
          />
        </View>

        <View style={styles.item}>
          <Text>Articulo</Text>

          <View>
            <TextInput
              style={styles.input}
              value={articleName}
              onChangeText={setArticleName}
              placeholder="Nombre articulo"
            />
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={setPrice}
              placeholder="Precio"
            />
          </View>
          <Button title="Agregar Articulo" onPress={onPushData} />
        </View>

        <View style={{ backgroundColor: "#FFF", margin: 25, padding: 25, }}>
          <Text style={[{ alignSelf: "center", marginVertical: 50 }, styles.commerceName]}>Nombre de comercio</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>

          {
            list.map(item => (
              <View style={styles.itemList}>
                <Text>{item.name}</Text>

                <Text>${item.price}</Text>
              </View>
            ))
          }

          <View style={{ height: 50 }} />

          <View style={styles.itemList}>
            <Text>IVA</Text>

            <Text>15%</Text>
          </View>

          <View style={styles.itemList}>
            <Text>Total</Text>

            <Text>{_.sumBy(list, item => Number(item.price))}</Text>
          </View>
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

  item: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    alignItems: "center",
    paddingBlockEnd: 10,
    backgroundColor: "white",
    marginRight: "10",
  },

  fondo: {

  },

  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  commerceName: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 24,
  },

  text: {
    fontSize: 16,
  }

});


export default Factura;