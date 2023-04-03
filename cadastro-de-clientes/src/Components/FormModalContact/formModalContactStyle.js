import styled from "styled-components";






export const Aside = styled.aside`
 .titulo{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5px;
    color: white;
    button{
        border-radius: 30%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
 }
`

export const Form  = styled.form`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
gap: 25px;
    input{
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: 3px solid  rgba(0, 255, 255, 0.7);
        height: 23px ;
        border-radius: 5px;


    }
    div{
        display: flex;
        flex-direction: column;
    }

    label{
        font-family: 'Poppins, sans-serif';
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        font-style:normal;
        color: white;
    }

    span{
        font-family: 'Poppins, sans-serif';
        font-weight: 400;
        font-size: 14px;
        color: red;
        display: flex;
        justify-content: center;
        padding-top: 1%;
    }

    button{
        background-color: black;
        color: white;
        border: 3px solid  rgba(0, 255, 255);
        border-radius: 5px;
    }

`

