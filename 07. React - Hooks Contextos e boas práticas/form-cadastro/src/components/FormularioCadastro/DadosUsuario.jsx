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
        aoEnviar();
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
      />
      <TextField
        variant="outlined"
        id="senha"
        label="senha"
        type="password"
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
