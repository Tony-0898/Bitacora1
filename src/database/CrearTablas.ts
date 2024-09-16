import conectarBD from './configuracionBD';

export const crearTablaActivos = async () => {
  const db = await conectarBD();
  try {
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS Activos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tipo TEXT,
        color TEXT,
        estado TEXT,
        placa TEXT,
        responsable TEXT
      );`
    );
    console.log('Tabla de activos creada');
  } catch (error) {
    console.log('Error al crear tabla de activos', error);
  }
};

export const crearTablaServicios = async () => {
  const db = await conectarBD();
  try {
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS Servicios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idActivo INTEGER,
        descripcion TEXT,
        FOREIGN KEY(idActivo) REFERENCES Activos(id)
      );`
    );
    console.log('Tabla de servicios creada');
  } catch (error) {
    console.log('Error al crear tabla de servicios', error);
  }
};
