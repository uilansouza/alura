import React, { Component, Fragment } from "react";
import Header from "./Header";
import DataTable from "./DataTable";

class Livros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livros: [
        {
          nome: "Javascript",
          editora: "Abril",
          edicao: "abril/2010"
        },
        {
          nome: "PHP",
          editora: "Editora Globo",
          edicao: "maio/2010"
        },
        {
          nome: "React",
          editora: "Casa do código",
          edicao: "maio/2015"
        }
      ],
      titulo: "Livros"
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Livros</h1>
          <DataTable
            dados={this.state.livros}
            titulo={this.state.titulo}
            colunas={["nome"]}
          />
        </div>
      </Fragment>
    );
  }
}

export default Livros;
