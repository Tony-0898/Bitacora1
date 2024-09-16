import React, { useEffect } from 'react';
import NavegadorApp from './navegacion/NavegadorApp';
import { crearTablaActivos, crearTablaServicios } from './database/crearTablas';

const App = () => {
  useEffect(() => {
    crearTablaActivos();
    crearTablaServicios();
  }, []);

  return <NavegadorApp />;
};

export default App;


