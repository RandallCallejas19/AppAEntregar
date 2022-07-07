import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

//Importar pantallas
import Factura from './Factura/Factura';
import Bodega from './Bodega/Bodega';
import AddArticle from './Articulos/AgregarArticulo';

// Import Navigators from React Navigation


function Feed({ Navigator }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:60 }}>Bienvenido!!!</Text>
      <Text style={{fontSize:30 }}>Importaciones García</Text>
      <Text style={{fontSize:30 }}>Acá se enlistarán los Artículos Mas Relevantes</Text>

     
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
     
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MyDrawer = (props) => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Pagina Principal" component={Feed} />
       <Drawer.Screen name="Agregar Nuevos Datos" component={AddArticle} />
       <Drawer.Screen name="Revisar Registro de Bodega" component={Bodega} />
       <Drawer.Screen name="Vista de Facturación" component={Factura} />

    </Drawer.Navigator>
  );
}

const HomePage = ({navigation})=> {
  return (
    
      <MyDrawer />
    
  );
}

export default HomePage;