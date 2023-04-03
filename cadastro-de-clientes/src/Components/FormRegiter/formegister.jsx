import { schemaRegister } from "../../schema/schemas"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DadosDoUsuarioContext } from "../../Context/dadosDoUsuario";
import { useContext } from "react";
import { Form } from "./formRegisterStyle";
export function FormRegister(){
    const { 
        register,
        handleSubmit,
        formState: { errors },}= useForm({resolver:yupResolver(schemaRegister)
        })


        const {criacaoDeClient} = useContext(DadosDoUsuarioContext)
    return (
        <Form onSubmit={handleSubmit(criacaoDeClient)}>

            <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Digte seu nome" {...register("name")}/>
                <span> {errors.name && errors.name.message} </span>
            </div>


            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Digite seu email" {...register("email")}/>
                <span> {errors.email && errors.email.message} </span>
            </div>


            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Digite sua senha" {...register("password")} />
                <span> {errors.password && errors.password.message} </span>
            </div>


            <div>
                <label htmlFor="Telephone">Telephone</label>
                <input type="text" placeholder="Digite seu telefone" {...register("telephone")}/>
                <span> {errors.telephone && errors.telephone.message} </span>
            </div>

            <div className="buttonCadastrar">
                <button type="submit">Cadastar</button>
            </div>
        </Form>
    )
}