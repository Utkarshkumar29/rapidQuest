import styled from "styled-components"

export const MobileSliderContainer=styled.div`
    max-width: 425px;
    width: 100%;    
    max-height: 50px;
    height: 100%;
    position: fixed;
    bottom: 0px;
    z-index: 1;
    background-color: white;
    display: none;

    @media (max-width:426px){
        display: block;
    }
`

export const MobileSliderWrapper=styled.div`
    width: 100%;
    height: 100%;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
`