import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";



const ListArticles = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("Articulos").onSnapshot((querySnapshot) => {
      const Articulos = [];
      querySnapshot.docs.forEach((doc) => {
        const { nombre, descripcion } = doc.data();
        users.push({
          id: doc.id,
          nombre,
          descripcion,
        });
      });
      setUsers(Articulos);
    });
  }, []);

  return (
    <ScrollView>
      <Button
       // onPress={() => props.navigation.navigate("CreateUserScreen")}
       // title="Create User"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
             props.navigation.navigate("Factura",
              {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default ListArticles;
