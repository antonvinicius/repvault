import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Spacer } from "../../components/Spacer";
import { Container, Footer, Wrapper } from "./styles";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { supabase } from "../../supabase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdEmail, MdLock } from "react-icons/md";

const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("Informe um email"),
    password: yup.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais")
  })

type FormData = yup.InferType<typeof schema>

export function Register() {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({
    resolver: yupResolver(schema)
  })

  async function onSubmit({ email, password }: FormData) {
    const { error } = await supabase.auth.signUp({
      email,
      password: password!
    })
    if (error) {
      toast.error("Este usuário já está registrado", {
        toastId: 'id',
        theme: 'dark'
      })
    }
  }

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Spacer direction="vertical" size={12} />
          <Input startIcon={<MdEmail />} placeholder="Email" {...register("email", { required: true })} />
          <span>{errors.email?.message}</span>
          <Spacer direction="vertical" size={12} />
          <Input startIcon={<MdLock />} isPassword placeholder="Senha" {...register("password", { required: true })} />
          <span>{errors.password?.message}</span>
          <Spacer direction="vertical" size={12} />
          <Input startIcon={<MdLock />} isPassword placeholder="Confirme sua senha" {...register("confirmPassword", { required: true })} />
          <span>{errors.confirmPassword?.message}</span>
          <Spacer direction="vertical" size={24} />
        </div>
        <Footer>
          <Button>Registrar</Button>
          <Spacer direction="vertical" />
          <p>Já tem uma conta? <Link to="/login">Fazer login</Link></p>
        </Footer>
      </Container>
    </Wrapper>
  )
}