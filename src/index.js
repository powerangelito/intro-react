import React, { Component } from 'react';
import { render } from 'react-dom';

const nombres = ['Angel', 'Elisa', 'Rebeca', 'Lucila', 'Antonio', 'Aldo'];

// destructuring {nombre} de props
// parametros por defecto de ecmascript
const Saludar = ({ nombre, idioma = 'en' }) => {
  // const nombre = 'Angel';
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return (
    <p>
      {saludo} {nombre}
    </p>
  );
};

//código legado de reactt
// Saludar.defaultProps = {
//   idioma: 'en'
// };

const App = () => {
  return (
    <div>
      <Saludar nombre="Angel" idioma="es" />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
