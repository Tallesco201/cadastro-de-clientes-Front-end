import ReactModal from "react-modal";
import styled from "styled-components";
import ImagemFundoAgua from "../../image/ImagemFundoAgua.png"

export const ContainerGeral = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${ImagemFundoAgua});
    background-repeat: no-repeat;
    background-size: cover;
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    background-color: rgba(255, 255, 255, 0.45);
    height:15%;
    align-items: center;
    justify-content: space-around;

    button{
        border:none;
        background-color: transparent;
        cursor: pointer;

    }
    

    

`

export const Aside = styled.aside`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 5%;

    section{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap:3%;
        list-style: none;
        padding: 0px;
        
    }

    li{
        overflow: auto;
        width: 10%;
        height: 150px;
        background-color: rgba(255, 255, 255, 0.45);
        padding: 2%;
        gap: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 5px solid  rgba(0, 255, 255, 0.7);
        border-radius:15px;
        margin-bottom: 15px;
    }


    
`