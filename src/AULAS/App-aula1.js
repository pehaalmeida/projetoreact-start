import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//MODELO POR CLASS

class App extends Component {

  // //CRIANDO O STATUS (Variavel) E COLOCANDO UMA INFORMAÇÃO NELE [FORMA ANTIGA]
  // constructor(props) {
  //   super(props);
  //   this.handlePClick = this.handlePClick.bind(this); // Passando o This para dentro do metodo handlePClick para que ele possa usar this

  //   this.state = {
  //     name: 'Augusto',
  //     counter: 0
  //   };

  // }

  // //Criando uma função que envia para log um aviso ao Clicar 
  // handlePClick() {
  //   this.setState({name: 'Almeida'}); // Alteração de State 
  // }

//------------------------------------//

// Metodo de criar o contrutor reduzido
  state = {
    name: 'Augusto',
    counter: 0
  };


  handlePClick = () => {
       this.setState({name: 'Almeida'}); // Alteração de State 
  }

  handleAClick = (event) => { //Usando arrow function sem a necessidade de passar o This, usando apenas = ()=>
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1 });
  }


  render() {
    // const name = this.state.name; (Uma forma que da para fazer para pegar um valor dentro de status)
    const { name, counter } = this.state; // Forma de fazer Otimizada
     
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}> {/* Commeit: Chamando a função de click para execultar  */}
             Olá Mundo! - {name} - {counter}
          </p>
          <a onClick={this.handleAClick}
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
          >
          Este é o link
          </a>
          </header>
      </div>
    );
  }
}

//MODELO USADO ATUALMENTE NO REACT - FUNCTION

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá Mundo!  
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
