import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../schema/schemas";
import { useContext } from "react";
import { DadosDoUsuarioContext } from "../../Context/dadosDoUsuario";
import { Form } from "./formLoginStyle";
import { Link } from "react-router-dom";




export function FormLogin (){
    const { 
        register,
        handleSubmit,
        formState: { errors },}= useForm({resolver:yupResolver(schemaLogin)
        })

        const {dadosLoginCliente} = useContext(DadosDoUsuarioContext)

        return(
            <Form onSubmit={handleSubmit(dadosLoginCliente)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Digite seu email" {...register("email")}/>
                    <span> {errors.email && errors.email.message} </span>
                </div>


                
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password"placeholder="Digite a senha"{...register("password")}/>
                    <span> {errors.password && errors.password.message} </span>
                </div>

                <div className="button">
                    <button type="submit">Entrar</button>
                    <Link to="/register">Cadastra-se</Link>
                </div>


            </Form>
            )



                


    

}