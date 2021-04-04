import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
      }}
    >
      <TextField
        variant="outlined"
        id="email"
        label="email"
        type="email"
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
        type="password"
        fullWidth
        margin="normal"
        required
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
