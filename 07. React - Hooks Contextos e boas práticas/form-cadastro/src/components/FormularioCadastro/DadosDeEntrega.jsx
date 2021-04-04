import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosDeEntrega() {
  return (
    <form>
      <TextField
        variant="outlined"
        id="cep"
        label="cep"
        type="number"
        fullWidth
        margin="normal"
      />

      <TextField
        variant="outlined"
        id="endereco"
        label="endereço"
        type="text"
        fullWidth
        margin="normal"
      />

      <TextField
        variant="outlined"
        id="numero"
        label="número"
        type="number"
        margin="normal"
      />

      <TextField
        variant="outlined"
        id="estado"
        label="estado"
        type="text"
        margin="normal"
      />

      <TextField
        variant="outlined"
        id="cidade"
        label="cidade"
        type="text"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosDeEntrega;
