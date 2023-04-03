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
    width: 32%;
    height: 75%;
    background-color: rgba(255, 255, 255, 0.45);
    border: 6px solid rgba(0, 255, 255, 0.5);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (max-width: 500px) {
    .containerInputs{

        width: 70%;
    }
}

`

