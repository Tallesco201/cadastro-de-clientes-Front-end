import { useContext } from "react"
import { DadosDoUsuarioContext } from "../../Context/dadosDoUsuario"
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaContact } from "../../schema/schemas";
import { useForm } from "react-hook-form";
import { Aside, Form } from "./formModalContactStyle";
import { GrClose } from "react-icons/gr";


export function FormModalContact ({closeModal}){

    const { 
        register,
        handleSubmit,
        formState: { errors },}= useForm({resolver:yupResolver(schemaContact)
        })


        const {criarContato} = useContext(DadosDoUsuarioContext)
    return(

       
        <Aside>
            <div className="titulo">
                <h3>Novo contato</h3>
                <button onClick={()=>{closeModal()}}>
                    <GrClose/>
                </button>

            </div>


            <Form onSubmit={handleSubmit(criarContato)}>

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
                    <label htmlFor="Telephone">Telephone</label>
                    <input type="text" placeholder="Digite seu telefone" {...register("telephone")}/>
                    <span> {errors.telephone && errors.telephone.message} </span>
                </div>

                <div className="buttonCadastrar">
                    <button type="submit">Cadastar</button>
                </div>



            </Form>
        
        
        
        
        </Aside>
        
        
    )
}