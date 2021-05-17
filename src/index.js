import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

//Componente es de clase
/**
 * componentDidMount()
 * componentidUpdate()
 * componentWillUnmount()
 */

const Button = () => {
  //Aquí no debe haber efectos secundarios
  //hook
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Me ejecuté');
  }, []);
  return <button onClick={() => setCount(count + 1)} >click {count}</button>;
};

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

render(<App />, document.getElementById('react-app'));
