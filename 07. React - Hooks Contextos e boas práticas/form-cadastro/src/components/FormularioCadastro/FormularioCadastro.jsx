import { Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCpf={validarCpf} />;
      case 2:
        return <DadosDeEntrega aoEnviar={aoEnviar} />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;
