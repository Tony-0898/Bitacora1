import conectarBD from './configuracionBD';

export const insertarActivo = async (tipo: string, color: string, estado: string, placa: string, responsable: string) => {
  const db = await conectarBD();
  try {
    await db.executeSql(
      'INSERT INTO Activos (tipo, color, estado, placa, responsable) VALUES (?, ?, ?, ?, ?);',
      [tipo, color, estado, placa, responsable]
    );
    console.log('Activo insertado correctamente');
  } catch (error) {
    console.log('Error al insertar activo', error);
  }
};

export const obtenerActivos = async () => {
  const db = await conectarBD();
  try {
    const [results] = await db.executeSql('SELECT * FROM Activos;');
    const activos = [];
    for (let i = 0; i < results.rows.length; i++) {
      activos.push(results.rows.item(i));
    }
    return activos;
  } catch (error) {
    console.log('Error al obtener activos', error);
    return [];
  }
};
