import React, { Component } from "react";
import CardNotas from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNotas
                titulo={nota.titulo}
                texto={nota.texto}
                index={index}
                apagarNota={this.props.apagarNota}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
