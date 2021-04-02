import React, { Component } from "react";
import CardNotas from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNotas
                titulo={categoria.titulo}
                texto={categoria.texto}
                index={index}
                apagarNota={this.props.apagarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
