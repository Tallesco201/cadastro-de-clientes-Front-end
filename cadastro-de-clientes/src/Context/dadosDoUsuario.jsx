import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {api} from "../services/api.js"



export const DadosDoUsuarioContext = createContext({})


export function DadosDoUsuarioProviders ({children}){
    const navigate = useNavigate()
    const[id, setid] = useState("")
    const [user, setUser]= useState({})
    const [contact, setContact]= useState({})
    const token = localStorage.getItem("@TOKEN");
    const [modalIsOpen, setModalIsOpen] = useState(false);



    
    
    function criacaoDeClient(dadosRegistro){
        console.log(dadosRegistro)
        api.post("client", dadosRegistro)
        .then((response)=>{
            console.log("Usuario criado com sucesso =>",response)
            return navigate("/")
        })
        .catch((error)=>{
            console.log("Algo deu errado na criação =>", error)
        })
    }
       async function  dadosLoginCliente(dadosLogin){
       console.log("Os dados do login s=>",dadosLogin)
       await api.post("login",dadosLogin)
       .then((response) =>{
            
            localStorage.setItem("@TOKEN", response.data.token);
            console.log("Login deu certo =>", response)
            setid(response.data.client.id)
            setUser(response.data.client)
            console.log("CLIENTE INFORMAÇOES =>", response)
            return navigate("/dashboard")
 
       })
       .catch((error) =>{
            console.log("Algo deu errado no login =>", error)
       }) 

       console.log("TOKEN=>", token)

    }
    useEffect(()=>{

        if(id){
            
            function mostraContadosDoCliente(id){
                api.get(`contact/list/${id}`,{
                    headers: {
                        Authorization: `Bearer ${token}`,
                      }
                })
                    .then((response)=>{
                        setContact(response.data)
                        console.log("Lista de contatos com sucesso =>",contact)
                   
                     })
                    
                     .catch((error)=>{
                        console.log("Algo deu errado na lista de contatos =>", error)
                    })
            }
            
            mostraContadosDoCliente(id)
        }
    },[id])


    useEffect(()=>{
        console.log("USUARIO atualizado =>", user)
    },[user])

    useEffect(()=>{
        console.log("CONTATOS atualizado =>", contact)
    },[contact])


    function criarContato(dadosContatos){
        api.post(`contact/${id}`,dadosContatos,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        .then(response => {
            setContact([...contact, response.data])
        })
        
        .catch(error => {
            console.log(error);
        });

    }


    function deleteContato(id){
        api.delete(`contact/delete/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response=>{
            console.log("DELETADO COM SUCESSO")
            const updatedContacts = contact.filter(contacts => contacts.id !== id);
            setContact(updatedContacts);
        })
        .catch(error=>{
            console.log("ERRO AO DELETAR", error)
        })
    }

     useEffect(()=>{
        console.log("CONTATOS atualizado =>", contact)
    },[contact])
          
          
          
          
          






  function openModal() {
    setModalIsOpen(true);
    console.log("OK MODAL ABERETO");
  }

  function closeModal() {
    setModalIsOpen(false);
    console.log("MODAL FECHADO")
  }





    
    


    return(
        <DadosDoUsuarioContext.Provider
        
            value={{
            navigate,
            dadosLoginCliente,
            criacaoDeClient,
            user,
            setUser,
            contact,
            setContact,
            modalIsOpen,
            openModal,
            closeModal,
            criarContato,
            deleteContato
            }}
        >
        
            {children}
        </DadosDoUsuarioContext.Provider>
    )
}
