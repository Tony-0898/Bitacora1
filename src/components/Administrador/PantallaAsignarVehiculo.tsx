import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { insertarActivo } from '../../database/operacionesActivos';

const PantallaAsignarVehiculo = () => {
  const [tipo, setTipo] = useState('');
  const [color, setColor] = useState('');
  const [estado, setEstado] = useState('');
  const [placa, setPlaca] = useState('');
  const [responsable, setResponsable] = useState('');

  const manejarAsignacion = async () => {
    await insertarActivo(tipo, color, estado, placa, responsable);
    alert('Vehículo asignado correctamente');
  };

  return (
    <View>
      <Text>Asignar Vehículo</Text>
      <TextInput placeholder="Tipo de Vehículo" value={tipo} onChangeText={setTipo} />
      <TextInput placeholder="Color" value={color} onChangeText={setColor} />
      <TextInput placeholder="Estado" value={estado} onChangeText={setEstado} />
      <TextInput placeholder="Placa" value={placa} onChangeText={setPlaca} />
      <TextInput placeholder="Responsable" value={responsable} onChangeText={setResponsable} />
      <Button title="Asignar Vehículo" onPress={manejarAsignacion} />
    </View>
  );
};

export default PantallaAsignarVehiculo;
