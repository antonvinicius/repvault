import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Spacer } from "../../components/Spacer";
import { Container, Wrapper } from "./styles";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    username: yup.string().required("Informe um nome de usuário"),
    email: yup.string().email("Email inválido").required("Informe um email"),
    password: yup.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais")
  })

export function RegisterPage() {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit(data: any) {
    console.log(data)
  }

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input placeholder="Usuário" {...register("username", { required: true })} />
          <span>{errors.username?.message}</span>
          <Spacer direction="vertical" size={12} />
          <Input placeholder="Email" {...register("email", { required: true })} />
          <span>{errors.email?.message}</span>
          <Spacer direction="vertical" size={12} />
          <Input placeholder="Senha" {...register("password", { required: true })} />
          <span>{errors.password?.message}</span>
          <Spacer direction="vertical" size={12} />
          <Input placeholder="Confirme sua senha" {...register("confirmPassword", { required: true })} />
          <span>{errors.confirmPassword?.message}</span>
          <Spacer direction="vertical" size={24} />
        </div>
        <Button>Registrar</Button>
      </Container>
    </Wrapper>
  )
}