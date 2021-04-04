import React, { useState } from "react";
import { Switch, Button, TextField, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErrors] = useState({ cpf: { valido: true, texto: "" } });

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }

    return true;
  }

  function validarCampos(evento) {
    const { name, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErrors(novoEstado);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        id="nome"
        label="nome"
        name="nome"
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
        label="sobrenome"
        name="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        name="promocoes"
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
        name="novidades"
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
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
