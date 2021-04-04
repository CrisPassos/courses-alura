import React, { useEffect } from "react";
import { useState } from "react";
import { StepLabel, Stepper, Typography, Step } from "@material-ui/core";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosDeEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5" align="center">
      Obrigado pelo Cadastro!
    </Typography>,
  ];
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    console.log(dadosColetados);
    proximo();
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
