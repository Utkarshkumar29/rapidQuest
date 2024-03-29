import styled from 'styled-components';

export const RetirementViewContainer = styled.div`
    
    
    @media (max-width:426px){
        max-width: 425px;
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        top: 400px;
    }
`;

export const RetirementViewWrapper = styled.div`
    max-width: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-direction: column;
    padding: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    `;

export const RetirementCard = styled.div`
    background-color: #F5F5F4;
    max-width: 250px;
    width: 100%;
    max-height: 450px;
    height: 100%;
    padding: 30px;

    :nth-child(1) {
        font-weight: bold;
    }

    :nth-child(7) {
        color: blue;
        text-align: center;

        @media (max-width: 427px) {
            display: none;
        }
    }

    @media (max-width: 426px) {
        max-width: 425px;
        width: 100%;
        border-top-right-radius: 50px;
        border-top-left-radius: 50px;
    }
`;

export const RetirementHeading = styled.div`
    font-weight: bold;
    font-size: 20px;
`;

export const InputRangeContainer = styled.div`
    &::after {
        content: "";
        display: block;
        border-bottom: 2px solid #a9a9a9;
    }
`;

export const InputRangeWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 0px;
    justify-content: space-between;

    :nth-child(1) {
        width: 200px;
    }

    @media (max-width: 426px) {
        max-width: 400px;
        width: 100%;

        :nth-child(2) {
            /* Remove unnecessary position property */
        }
    }
`;

export const InputRange = styled.input`
    margin: 0;
    padding: 0;
    height: 5px;

    @media (max-width: 426px) {
        width: 100%;
    }
`;

export const MoreContainer = styled.div`
    &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: -5px;
        transform: translateX(-50%);
        max-height: 150px;
        height: 100%;
        width: 2px;
        background-color: blue;
    }

    :nth-child(1) {
        margin-top: 20px;
    }

    :nth-child(2) {
        color: gray;
    }

    :nth-child(3) {
        color: blue;
    }

    div {
        :nth-child(1) {
            margin: 0;
        }

        :nth-child(2) {
            font-weight: bold;
            margin: 0;
        }
    }

    @media (max-width: 426px) {
        display: none;
    }
`;
