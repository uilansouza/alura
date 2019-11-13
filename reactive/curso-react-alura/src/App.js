import React from 'react';
import Tabela from './Tabela';

import './App.css';

function App() {
  const autores = [
    {
      nome: "Paulo",
      livro: "React",
      preco: "1000",
    },
    {
      nome: "Daniel",
      livro: "Java",
      preco: "99"
    },
    {
      nome: "Vanessa",
      livro: "Devops",
      preco: "986"
    }
  ]
  return (
    <div className="App">
      <Tabela />

    </div>
  );
}

export default App;
