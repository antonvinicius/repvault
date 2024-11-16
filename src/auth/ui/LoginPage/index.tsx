import { Container, Footer, RegisterLink, RegisterText, Subtitle, Title, Wrapper } from "./styles";

export function LoginPage() {
  return (
    <Wrapper>
      <Container>
        <Title>RepVault</Title>
        <Subtitle>Gerenciador de Músicas</Subtitle>
        <Footer>
          <RegisterText>Sua primeira vez aqui?</RegisterText>
          <RegisterLink>Criar uma conta</RegisterLink>
        </Footer>
      </Container>
    </Wrapper>
  )
}