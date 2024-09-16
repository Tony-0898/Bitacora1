import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const conectarBD = async () => {
  try {
    const db = await SQLite.openDatabase(
      {
        name: 'bitacoraActivos.db',
        location: 'default',
      },
      () => {
        console.log('Conexión con la base de datos exitosa');
      },
      (error) => {
        console.log('Error al conectar la base de datos: ', error);
      }
    );
    return db;
  } catch (error) {
    console.log('Error al abrir la base de datos', error);
    throw error;
  }
};

export default conectarBD;
