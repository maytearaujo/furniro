
import styled from 'styled-components'


export const DivRegister = styled.div`
    border: solid rebeccapurple;

    border: solid red;
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        
        a {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            padding-top: 16px;
            padding-bottom: 16px;
            color: #5C73DB;
        }
    }
`
export const HeaderRegister = styled.div`
    /* border: solid green; */

    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;

    span {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    padding-top: 15px;
  }
`
export const InputContainer = styled.div`

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
    }

    input {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 16px;
        width: 520px;
        height: 49px;
        border: 1px solid #5C73DB;
        border-radius: 12px;
        margin-bottom: 12px;
    }
`

export const Button = styled.button`
    width: 520px;
    height: 48px;
    background: #4763E4;
    border-radius: 12px;
    color: #fff;
    border: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
      
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px; 

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

`

export const Footer = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    padding: 0 .5rem;
    background-color: #fff;
  
 p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-decoration: none;
    color: #5C73DB;
    padding-left: 1rem;
  }

  
`



// .container {
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//   }
//   .container .header {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     margin-bottom: 40px;
//   }
  
//   .container .header span {
//     font-weight: 500;
//     font-size: 20px;
//     line-height: 24px;
//     padding-top: 15px;
//   }
  
//   .container form {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//   }
  
//   .container form  .inputContainer {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//   }
  
//   .container form  .inputContainer label {
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;
//     margin-bottom: 8px;
//   }
  
//   .container form  .inputContainer input {
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     padding: 16px;
//     width: 520px;
//     height: 49px;
//     border: 1px solid #5C73DB;
//     border-radius: 12px;
//     margin-bottom: 12px;
  
//   }
  
//   .container form a {
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;
//     padding-top: 16px;
//     padding-bottom: 16px;
//     color: #5C73DB;
//   }
  
//   .container form .button {
//     width: 520px;
//     height: 48px;
//     background: #4763E4;
//     border-radius: 12px;
//     color: #fff;
//     border: none;
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 22px;
  
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 15px;
//   }
//   .container form .button:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
  
//   .container form .footer {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px
//   }
  
//   .container form .footer p {
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;
//     color: #000000;
//   }
  
//   .container form .footer a {
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;
//     text-decoration-line: underline;
//     color: #5C73DB;
//   }
  