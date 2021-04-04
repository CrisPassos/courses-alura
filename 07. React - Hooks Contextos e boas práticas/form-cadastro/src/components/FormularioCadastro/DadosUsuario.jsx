import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosUsuario({ aoEnviar, validacoes }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErrors] = useState({ senha: { valido: true, texto: "" } });

  function validarCampos(evento) {
    const { name, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErrors(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }

    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        variant="outlined"
        id="email"
        label="email"
        type="email"
        name="email"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        variant="outlined"
        id="senha"
        label="senha"
        name="senha"
        type="password"
        fullWidth
        margin="normal"
        required
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
