import React, { Component } from "react";
import "./style.css";
import DeleteSVG from "../../assets/delete.svg";

class CardNotas extends Component {
  apagarNota() {
    this.props.apagarNota(this.props.index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img
            src={DeleteSVG}
            alt="delete"
            onClick={this.apagarNota.bind(this)}
          />
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNotas;
