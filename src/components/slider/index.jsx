import React, { useState } from "react"
import { Box1, Box2, Box3, SliderContainer, SliderWrapper, StyledIcon } from "../../styles/slider"
import { faPhabricator } from "@fortawesome/free-brands-svg-icons"
import { faBars, faBell, faHome, faMessage, faRightFromBracket, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"

const Slider=()=>{
    const [clickedBox, setClickedBox] = useState('font3')

    const handleBoxClick = (box) => {
        setClickedBox(box === clickedBox ? null : box)
    }

    return(
        <SliderContainer>
            <SliderWrapper>
                <Box1>
                    <StyledIcon icon={faPhabricator} isClicked={clickedBox === "font1"} onClick={() => handleBoxClick("font1")}/>
                    <StyledIcon icon={faSearch} isClicked={clickedBox === "font2"} onClick={() => handleBoxClick("font2")}/>
                </Box1>

                <Box2>
                <StyledIcon icon={faHome} isClicked={clickedBox === "font3"} onClick={() => handleBoxClick("font3")}/>
                <StyledIcon icon={faMessage} isClicked={clickedBox === "font4"} onClick={() => handleBoxClick("font4")}/>
                <StyledIcon icon={faBars} isClicked={clickedBox === "font5"} onClick={() => handleBoxClick("font5")}/>
                <StyledIcon icon={faUser} isClicked={clickedBox === "font6"} onClick={() => handleBoxClick("font6")}/>
                </Box2>

                <Box3>
                    <StyledIcon icon={faBell} isClicked={clickedBox === "font7"} onClick={() => handleBoxClick("font7")}/>
                    <StyledIcon icon={faRightFromBracket} isClicked={clickedBox === "font8"} onClick={() => handleBoxClick("font8")}/>
                </Box3>
            </SliderWrapper>
        </SliderContainer>
    )
}

export default Slider
