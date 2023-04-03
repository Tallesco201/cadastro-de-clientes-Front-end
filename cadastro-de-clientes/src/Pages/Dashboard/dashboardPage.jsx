import { useContext } from "react"
import { DadosDoUsuarioContext } from "../../Context/dadosDoUsuario"
import { Aside, ContainerGeral, Header } from "./dashboardPageStyle"
import { GrAddCircle } from "react-icons/gr";
import Modal from "react-modal";
import { FormModalContact } from "../../Components/FormModalContact/formModalContact";


export function DashboardPage (){


    const customStyles = {
        content: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(48, 47, 47, 0.5)",
            zIndex: "9999",
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            padding: "0px",
            border:"none"

        },
      };



    const {user, contact, modalIsOpen,
        openModal,
        closeModal, deleteContato} = useContext(DadosDoUsuarioContext)

        console.log("CONTATOS ATUALIZADOS========>>>>", contact)

    return(
        
        <ContainerGeral>
        <Header>
            <h3>
                Ola,{user.name}
            </h3>
            <button onClick={()=>{openModal()}}>
                <div style={{ background: 'white', borderRadius: '100%', height: '30px' }}>
                    <GrAddCircle  size={30}/>
                </div>
            </button>
        </Header>

        <main>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                style={customStyles}
            >
                <FormModalContact closeModal={closeModal} />
            </Modal>
            
            <Aside>
                <section>
                    <ul>
                        {Array.isArray(contact)&&contact.map((contato)=>(
                            <li key={contato.id}>
                                <h4>{contato.name}</h4>
                                <p>{contato.email}</p>
                                <p>{contato.telephone}</p>
                                <button  onClick={()=> {deleteContato(contato.id)}}>Excluir</button>

                            </li>
                        ))}
                    </ul>
                </section>
            </Aside>

                

        </main>
        </ContainerGeral>
    )
}

 {/*     {contact.map((contato)=>(
                            <li key={contato.id}>
                                <h4>{contato.name}</h4>
                                <p>{contato.email}</p>
                                <p>{contato.telephone}</p>
                                <div>
                                    <button onClick={()=>{deleteContato(contato.id)}}></button>
                                </div>
                            </li>
                        ))} */}