import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCPF} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: true, texto: "O CPF deve ter 11 digitos" };
  } else {
    return { valido: false, texto: "" };
  }
}

export default App;