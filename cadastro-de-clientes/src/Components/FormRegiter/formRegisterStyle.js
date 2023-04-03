import styled from "styled-components";


export const Form  = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center ;
    width: 50%;
    height: 100%;
    gap: 3%;

    div{
        width: 100%;
    }
    input{
        width: 100%;
        height: 33px ;
        background: rgba(0, 0, 0, 0.4);
        color: white;
        border: 2px solid  rgba(0, 255, 255, 0.7);
        border-radius: 7px;
    }

    label{
        font-family: 'Poppins, sans-serif';
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        font-style:normal;
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

    .buttonCadastrar{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    button{
        background: black;
        color: white;
        height: 120%;
        border-radius: 5px;
        border: 3px solid  rgba(0, 255, 255)
    }        

    @media only screen and (max-width: 1024px){
   
        input{
            height: 20px;
        }

        span{
            font-family: 'Poppins, sans-serif';
            font-size: 10px;
        
        }
    }       
    

    @media only screen and (max-width: 554px){
        
        span{
            font-family: 'Poppins, sans-serif';
            font-size: 8px;
        
        }
    }
    

`