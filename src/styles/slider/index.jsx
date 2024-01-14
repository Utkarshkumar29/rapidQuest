import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'

export const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    margin: 8px; 
    cursor: pointer;
    color: ${(props) => (props.isClicked ? "white" : "gray")};
    background-color: ${(props) => (props.isClicked ? "blue" : "none")};
    padding: 5px;
    border-radius: 7px;
`;

export const SliderContainer=styled.div`
    max-width: 100px;
    width: 100%;    
    max-height: 1000px;
    height: 100%;

    @media(max-width:426px){
        display: none;
    }
`

export const SliderWrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    gap: 120px;
`

export const Box1=styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 0.5;
    padding: 10px;
`

export const Box2=styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 2;
    padding: 10px;
`

export const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 25px;
    right: 28px;
    transform: translate(50%, -50%);
    width: 10px;
    height: 10px;
    background-color: blue;
    border-radius: 50%;
  }
`