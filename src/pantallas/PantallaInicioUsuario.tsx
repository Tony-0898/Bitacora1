import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PantallaInicioUsuario = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Pantalla de inicio del Usuario</Text>
      <Button title="Control Diario" onPress={() => navigation.navigate('ControlDiario')} />
    </View>
  );
};

export default PantallaInicioUsuario;
