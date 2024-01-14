import styled from 'styled-components'

export const HomePageContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    max-height: 100px;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const HomePageWrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width:426px) {
        flex-direction: column;
        min-height: 1600px;
        height: 100%;
    }
`