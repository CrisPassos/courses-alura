import React, { Component } from "react";
import CardNotas from "./CardNota/CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index}>
              <p>{categoria}</p>
              <CardNotas />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
