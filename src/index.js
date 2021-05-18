import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

let Example = props => {
  let [contador, setContador] = useState(0);
  //efectos secundarios
  useEffect(() => {
    console.log('Fui actualizado');
  }, []);
  //cuando hay un arreglo al final, se comporta como componentDidMount
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
};

// class App extends Component {
//   static defaultProps = {
//     name: 'Rebeca'
//   };

//   static propTypes = {
//     name: PropTypes.string
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       contador: 0,
//       updatedAt: null
//       // intv: null
//     };

//     // this.updateCounter = this.updateCounter.bind(this);
//   }

//   componentDidMount() {
//     console.log('Fui creado!');
//     // let intervalo = setInterval(
//     //   () => this.setState({ contador: this.state.contador + 1 }),
//     //   1000
//     // );

//     // this.setState({
//     //   intv: intervalo
//     // });
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // console.log(prevState, this.state, snapshot);
//     // if (prevState.contador !== this.state.contador)
//     //   this.setState({
//     //     updatedAt: new Date()
//     //   });
//     // console.log('Fui actualizado');
//   }

//   // getSnapshotBeforeUpdate() {
//   //   console.log('Antes del DOM');
//   //   return 3;
//   // }

//   componentWillUnmount() {
//     alert('Bye');
//     // clearInterval(this.state.intv);
//   }

//   // updateCounter() {
//   //   this.setState({ contador: this.state.contador + 1 });
//   // }

//   updateCounter = () => {
//     this.setState({ contador: this.state.contador + 1 });
//   };

//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <p>Contador: {this.state.contador}</p>
//         <button onClick={this.updateCounter}>Sumar</button>
//       </>
//     );
//   }
// }

render(<Example />, document.getElementById('root'));
