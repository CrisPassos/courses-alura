import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosDeEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        variant="outlined"
        id="cep"
        label="cep"
        type="number"
        fullWidth
        margin="normal"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />

      <TextField
        variant="outlined"
        id="endereco"
        label="endereço"
        type="text"
        fullWidth
        margin="normal"
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />

      <TextField
        variant="outlined"
        id="numero"
        label="número"
        type="number"
        margin="normal"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />

      <TextField
        variant="outlined"
        id="estado"
        label="estado"
        type="text"
        margin="normal"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />

      <TextField
        variant="outlined"
        id="cidade"
        label="cidade"
        type="text"
        margin="normal"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosDeEntrega;
