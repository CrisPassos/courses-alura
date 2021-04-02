import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.key === "Enter") {
      this.props.adicionarCategoria(e.target.value);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((c, index) => {
            return (
              <li className="lista-categorias_item" key={index}>
                {c}
              </li>
            );
          })}
        </ul>

        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
