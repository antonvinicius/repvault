import { Button } from "../../../shared/ui/components/Button";
import { Input } from "../../../shared/ui/components/Input";
import { Spacer } from "../../../shared/ui/components/Spacer";
import { Container, Footer, RegisterLink, RegisterText, Subtitle, Title, Wrapper } from "./styles";

export function LoginPage() {
  return (
    <Wrapper>
      <Container>
        <Title>RepVault</Title>
        <Subtitle>Gerenciador de repertório musical</Subtitle>
        <Spacer direction="vertical" size={12} />
        <Input hint="Usuário" />
        <Spacer direction="vertical" size={12} />
        <Input hint="Senha" />
        <Spacer direction="vertical" size={20} />
        <Button>Login</Button>
        <Spacer direction="vertical" />
        <Footer>
          <RegisterText>Sua primeira vez aqui?</RegisterText>
          <RegisterLink>Criar uma conta</RegisterLink>
        </Footer>
      </Container>
    </Wrapper>
  )
}