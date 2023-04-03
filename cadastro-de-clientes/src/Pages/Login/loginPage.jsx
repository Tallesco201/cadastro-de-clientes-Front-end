import { FormLogin } from "../../Components/FormLogin/formLogin";
import { Container, Mainn } from "./loginPageStyle";

export default function LoginPage() {
    return(
        <Mainn>
            <Container>
                <div className="containerInputs">
                    <p className="titulo">Welcome .</p>
                        <FormLogin/>

                </div>
            </Container>

        </Mainn>
        
    )
}