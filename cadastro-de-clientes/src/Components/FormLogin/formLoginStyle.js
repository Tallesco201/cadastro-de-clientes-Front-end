import styled from "styled-components";


export const Form = styled.form`

    display: flex;
    flex-direction: column;
    height: 100%;
    width: 57%;
    gap: 4%;
    input{
        background: rgba(0, 0, 0, 0.4);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        border-radius: 7px;
        border: 3px solid rgba(0, 255, 255, 0.7);
        height: 33px ;
        color: white;
    }
    label{
        font-family: 'Poppins, sans-serif';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        font-style: normal;
       
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


        

    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 13%;

    }

    .button{
        display: flex;
        width: 100%;
        align-items: center;
    }

    button{
        width: 40%;
        background-color: black;
        color: white;
        height: 31px;
        border-radius: 8px;
        border: 3px solid #00FFFF;
        cursor: pointer;
        margin-bottom: 3%;
    }
    a{
        width: 37.5%;
        background-color: black;
        color: white;
        height: 28px;
        border-radius: 8px;
        border: 3px solid #00FFFF;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 768px) {
        input{
            height: 25px;
        }
        label{
            font-size: 14px;
        }
        div{
            margin-bottom: 0%;
        }
        .button{
            margin-top: 5%;
        }
        
        a{
            font-size: 14px;
        }
    }

    @media only screen and (max-width: 600px){
        button{
            font-size: 10px;
        }
        a{
            font-size: 10px;
        }
    }

    @media only screen and (max-width: 320px){
        a{
            font-size: 9px;
            width: 40%;
        }

    }



    
    



`