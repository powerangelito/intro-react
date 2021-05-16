import React from 'react';
import { render } from 'react-dom';

const nombres = ['Angel', 'Elisa', 'Rebeca'];

function getNombres() {
  const elementosLista = [];
  for (var i = 0; i < nombres.length; i++) {
    elementosLista.push(<li>{nombres[i]}</li>);
  }
  return elementosLista;
}

const Nombres = () => {
  // return <ul>{getNombres()}</ul>;
  return (
    <ul>
      {nombres.map(nombre => (
        <li>{nombre}</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <Nombres />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
