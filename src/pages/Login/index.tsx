import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Spacer } from "../../components/Spacer";
import { Container, Footer, RegisterLink, RegisterText, Subtitle, Title, Wrapper } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

type LoginInputs = {
  username: string;
  password: string;
}

export function Login() {
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>()

  async function onSubmit(data: LoginInputs) {
    await signIn(data.username, data.password)
  }

  return (
    <Wrapper>
      <Container>
        <Title>RepVault</Title>
        <Subtitle>Gerenciador de repertório musical</Subtitle>
        <Spacer direction="vertical" size={12} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Usuário" {...register("username", { required: true })} />
          {errors.username && <span>Informe o usuário</span>}
          <Spacer direction="vertical" size={12} />
          <Input placeholder="Senha" {...register("password", { required: true })} />
          {errors.password && <span>Informe a senha</span>}
          <Spacer direction="vertical" size={20} />
          <Button>Login</Button>
        </form>
        <Spacer direction="vertical" />
        <Footer>
          <RegisterText>Sua primeira vez aqui?</RegisterText>
          <RegisterLink to={"/register"}>Criar uma conta</RegisterLink>
        </Footer>
      </Container>
    </Wrapper>
  )
}