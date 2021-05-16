import React from 'react';
import { render } from 'react-dom';

// function SaludarEnIdiomas({ idioma }) {
//   if (idioma === 'es') return <span>Hola</span>;
//   if (idioma === 'en') return <span>Hello</span>;
// }

const Saludo = () => {
  const nombre = 'Angel';
  const idioma = 'es';
  return (
    <div>
      {/* <SaludarEnIdiomas idioma="es" /> {`${nombre}`} */}
      {/* {idioma === "en" ? <p>Hello</p> : <p>Hola</p>} */}
      {idioma === 'es' && <p>Hola</p>}
      {idioma === 'en' && <p>Hello</p>}
    </div>
  );
};

const App = () => {
  return (
    <h1>
      <Saludo />
    </h1>
  );
};

render(<App />, document.getElementById('react-app'));
