import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PantallaInicioAdmin = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Pantalla de inicio del Administrador</Text>
      <Button title="Asignar Vehículo" onPress={() => navigation.navigate('AsignarVehiculo')} />
    </View>
  );
};

export default PantallaInicioAdmin;
