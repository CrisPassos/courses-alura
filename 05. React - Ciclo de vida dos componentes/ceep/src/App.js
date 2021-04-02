import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categoria";
import ArrayNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNotas}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria}
          />

          <ListaDeNotas
            notas={this.notas.notas}
            apagarNota={this.notas.deletarNotas}
          />
        </main>
      </section>
    );
  }
}

export default App;
