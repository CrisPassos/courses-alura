import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    this.notas.push({ titulo, texto });
    console.log(`uma nova nota foi criada ${titulo} ${texto}`);

    //renderiza o elemento atualizado tipo o onChanges
    this.setState({
      notas: [...this.state.notas, { titulo, texto }],
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
