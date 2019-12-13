import React, { Component, Fragment } from "react";
import Header from "./Header";
import DataTable from "./DataTable";

class Autores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autores: [
        {
          nome: "Marcos",
          livro: "Javascript",
          preco: "200"
        },
        {
          nome: "Jonas",
          livro: "PHP do zero",
          preco: "150,00"
        },
        {
          nome: "Ana",
          livro: "UX Profissional",
          preco: "350"
        },
        {
          nome: "Vanessa ",
          livro: "Pyhton",
          preco: "350"
        }
      ],
      titulo: "Autores"
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Autores</h1>
          <DataTable
            dados={this.state.autores}
            titulo={this.state.titulo}
            colunas={["nome"]}
          />
        </div>
      </Fragment>
    );
  }
}
export default Autores;
