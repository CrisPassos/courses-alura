import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesDeCadastros from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validacoes = useContext(ValidacoesDeCadastros);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

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
