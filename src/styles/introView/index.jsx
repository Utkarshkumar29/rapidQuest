import styled from 'styled-components'

export const IntroViewContainer=styled.div`
    min-width: 350px;
    width: 100%;
    height: auto;
    background-color: #F5F5F4;
    display: flex;
    justify-content: center;

    @media (max-width:1011px) {
        max-width: 350px;
    }

    @media(max-width:426px){
        max-width: 425px;
        width: 100%;
        min-height: 700px;
        height: 100%;
        background-color: white;
    }


    @media(max-width:321px){
        position: relative;
        left: -11px;
    }
`

export const IntroViewWrapper=styled.div`
    width: 100%;
    max-height: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width:426px){
        align-items: center;
        gap: 10px;
        justify-content: center;
    }
`

export const IntoBox1=styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex: 1;
    align-items: center;

    @media (max-width:1200px){
        gap: 0px;
    }

    @media(max-width:321px){
        margin-right: 10px;
    }
`

export const IntroImage=styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px;

    @media (max-width:1160px) {
        width: 70px;
        height: 70px;
    }

    @media (max-width:426px){
        width: 100px;
        height: 100px;
    }
`

export const IntroHeading=styled.p`
    display: flex;
    flex-direction: column;
    gap: 0px;

    :nth-child(1){
        font-size: 30px;
        font-weight: bold;
        padding: 0;
        margin: 0;

        @media (max-width:1160px) {
            font-size: 20px;
        }

        @media (max-width:426px){
            font-size: 30px;
        }
    }

    :nth-child(2){
        padding: 0;
        margin: 0;

        @media (max-width:1160px) {
            font-size: 15px;
        }

        @media (max-width:426px){
            font-size: 20px;    
        }
    }
`

export const DivWrapper=styled.div`

    @media (max-width:426px) {
        display: block;
        flex-direction: row;
        gap: 50px;
    }
`

export const IntoBox2=styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    padding: 0px 40px 40px 40px;

    @media (max-width:426px) {
        max-width: 300px;
        width: 100%;
        padding: 30px;
        background-color: #F5F5F4;
        border-radius: 20px;
    }
`

export const AccountHeading=styled.p`
    margin: 0;
    font-weight: bold;
`

export const BalanceWrapper=styled.div`
    :nth-child(1){
        margin: 0;
        font-size: 35px;
        font-weight: bold;
    }

    :nth-child(2){
        margin: 0;
        color: gray;
    }
`

export const ContributionWrapper=styled.div`
    @media (max-width:426px) {
        max-width: 100px;
        width: 100%;
    }

    :nth-child(1){
        margin: 0;
        font-weight: bold;
    }

    :nth-child(2){
        margin: 0;
        color: gray;
    }
`

export const IntrestWrapper=styled.div`
    @media (max-width:426px) {
        max-width: 100px;
        width: 100%;
    }

    :nth-child(1){
        margin: 0;
        font-weight: bold;
    }

    :nth-child(2){
        margin: 0;
        color: gray;
    }
`

export const Button=styled.button`
    background-color: blue;
    color: white;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    max-width: 10   0px;
    width: 100%;
    border: none;
`

export const IntoBox3=styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
    padding: 0px 67px 40px 65px;
`
export const TransactionHeading=styled.p`
    margin: 0;
    font-weight: bold;
`

export const Transaction1=styled.div`
    :nth-child(1){
        margin: 0;
        color: gray;
    }
    
    :nth-child(2){
        margin: 0;
        font-weight: bold;
    }

    &::after{
        content:"";
        display: block;
        max-width: 270px;
        width: 100%;
        height: 1px;
        border-bottom: 2px solid gray
    }
`

export const Transaction2=styled.div`
    :nth-child(1){
        margin: 0;
        color: gray;
    }
    
    :nth-child(2){
        margin: 0;
        font-weight: bold;
    }

    &::after{
        content:"";
        display: block;
        max-width: 270px;
        width: 100%;
        height: 1px;
        border-bottom: 2px solid gray
    }
`

export const Transaction3=styled.div`
    :nth-child(1){
        margin: 0;
        color: gray;
    }
    
    :nth-child(2){
        margin: 0;
        font-weight: bold;
    }

    &::after{
        content:"";
        display: block;
        max-width: 270px;
        width: 100%;
        height: 1px;
        border-bottom: 2px solid gray
    }
`