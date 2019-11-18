import React, { Component , Fragment} from 'react';
import './App.css';
import Form from './Formulario';
import Tabela from './Tabela';

class App extends Component {
  
   state =  {
      autores:[
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Vanessa',
        livro: 'BI',
        preco: '4500'
      }
      ]};
    removeAutor = index =>{
      const {autores} = this.state;

      this.setState( 
        {
          autores : autores.filter((autor, posAtual) => {
            console.log(index, posAtual)
            return posAtual !== index;
    
          }),
        }
      );
    }

  render() {
    return (
        <Fragment>
          <Tabela autores={this.state.autores} removeAutor = {this.removeAutor}/>  
          <Form/>
        </Fragment>
      
    );
  }
}

export default App;
