import React, { useState } from "react";
import { Switch, Button, TextField, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validarCpf }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErrors] = useState({ cpf: { valido: false, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
      }}
    >
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        onBlur={(event) => {
          const ehValido = validarCpf(cpf);
          setErrors({
            cpf: ehValido,
          });
        }}
        error={erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            name="promoções"
            color="primary"
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            name="novidades"
            color="primary"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
