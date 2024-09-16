import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaInicioAdmin from '../pantallas/PantallaInicioAdmin';
import PantallaInicioUsuario from '../pantallas/PantallaInicioUsuario';
import PantallaAsignarVehiculo from '../components/Administrador/PantallaAsignarVehiculo';
import PantallaControlDiario from '../components/Usuario/PantallaControlDiario';

const Stack = createStackNavigator();

const NavegadorApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InicioAdmin">
        <Stack.Screen name="InicioAdmin" component={PantallaInicioAdmin} options={{ title: 'Administrador' }} />
        <Stack.Screen name="AsignarVehiculo" component={PantallaAsignarVehiculo} options={{ title: 'Asignar Vehículo' }} />
        <Stack.Screen name="InicioUsuario" component={PantallaInicioUsuario} options={{ title: 'Usuario' }} />
        <Stack.Screen name="ControlDiario" component={PantallaControlDiario} options={{ title: 'Control de Bitácora' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavegadorApp;
