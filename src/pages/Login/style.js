import styled from 'styled-components'

export const Vertical = styled.div`
    display:flex;
    flex-flow:column;
`

export const Wrapper = styled.div`
    display:flex;
    height:100vh;
`
export const Left = styled.div`
    flex:1;
    background:url('https://www.17sucai.com/preview/1424582/2020-10-10/login/img/wave-01.png') no-repeat center;
    background-size:cover;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    img{
        width:50%;
    }
`

export const Right = styled.div`
    width:610px;
    display:flex;
    align-items:center;
    padding:0 70px;

    .login{
        width:100%;
       
       .login-form{
           .login-form-button{
               width:100%;
           }
       }
    }

`