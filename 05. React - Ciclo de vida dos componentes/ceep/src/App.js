import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    console.log(`uma nova nota foi criada ${titulo} ${texto}`);

    //renderiza o elemento atualizado tipo o onChanges
    this.setState({
      notas: [...this.state.notas, { titulo, texto }],
    });
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);

    this.setState({
      notas: arrayNotas,
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias />

          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
