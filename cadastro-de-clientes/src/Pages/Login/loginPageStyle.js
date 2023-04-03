import styled from "styled-components";
import ImagemFundoFloresta from "../../image/imagemFundo.png"


export const Mainn = styled.main`
display: flex;
background-image: url(${ImagemFundoFloresta});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 100vh;

`

export const Container = styled.aside`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

.containerInputs{
    width: 40%;
    height: 75%;
    background-color: rgba(255, 255, 255, 0.45);
    border: 6px solid rgba(0, 255, 255, 0.5);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 36px;
margin-top: 8%;

}








@media only screen and (max-width:768px){
    .containerInputs{
        width: 55%;
        height: 60%;
    }
    .titulo{
        margin-top: 4%;
    }
}
@media only screen and (max-width:426px){
    .containerInputs{
        width: 75%;
        height: 60%;
    }
}
@media only screen and (max-width:375px){
    .containerInputs{
        width: 70%;
        height: 50%;
    }
}

    

`