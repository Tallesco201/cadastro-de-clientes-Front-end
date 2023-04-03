import { FormRegister } from "../../Components/FormRegiter/formegister";
import { Container, Mainn } from "./registerPageStyle";

export function RegisterPage(){
    return(
        <Mainn>
            <Container>
                <div className="containerInputs">
                    <h3>Cadastra-se</h3>
                    <FormRegister/>

                </div>
            </Container>
            
        </Mainn>
    )
}