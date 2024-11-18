import { Button } from "../../../../shared/ui/components/Button";
import { Input } from "../../../../shared/ui/components/Input";
import { Spacer } from "../../../../shared/ui/components/Spacer";
import { Container, Wrapper } from "./styles";

export function RegisterPage() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Input hint="Usuário" />
          <Spacer direction="vertical" size={12} />
          <Input hint="Email" />
          <Spacer direction="vertical" size={12} />
          <Input hint="Senha" />
          <Spacer direction="vertical" size={12} />
          <Input hint="Confirme sua senha" />
          <Spacer direction="vertical" size={24} />
        </div>
        <Button>Registrar</Button>
      </Container>
    </Wrapper>
  )
}