import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

  import ListArticles from '../Articulos/AgregarArticulo';



  const Bodega = ()=>{
    return(
        <ListArticles/>
    );
  }

  export default Bodega