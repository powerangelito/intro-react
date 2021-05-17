import React, { Component } from 'react';
import { render } from 'react-dom';

// const App = () => {
//   return (
//     <h1>Hola mundo</h1>
//   );
// }

// const App = () => <h1>Hola mundo</h1>;

class App extends Component {
  render() {
    return <h1>Hola mundo</h1>;
  }
}

render(<App />, document.getElementById('react-app'));
