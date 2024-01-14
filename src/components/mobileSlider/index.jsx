import React, { useState } from "react"
import { StyledIcon } from "../../styles/slider"
import { faBars, faBell, faHome, faMessage, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"
import { MobileSliderContainer, MobileSliderWrapper } from "../../styles/mobileSlider"

const MobileSlider=()=>{
    const [clickedBox, setClickedBox] = useState('font3')

    const handleBoxClick = (box) => {
        setClickedBox(box === clickedBox ? null : box)
    }

    return(
        <MobileSliderContainer>
            <MobileSliderWrapper>
                <StyledIcon icon={faHome} isClicked={clickedBox === "font3"} onClick={() => handleBoxClick("font3")}/>
                <StyledIcon icon={faMessage} isClicked={clickedBox === "font4"} onClick={() => handleBoxClick("font4")}/>
                <StyledIcon icon={faBars} isClicked={clickedBox === "font5"} onClick={() => handleBoxClick("font5")}/>
                <StyledIcon icon={faUser} isClicked={clickedBox === "font6"} onClick={() => handleBoxClick("font6")}/>
                <StyledIcon icon={faSearch} isClicked={clickedBox === "font2"} onClick={() => handleBoxClick("font2")}/>
            </MobileSliderWrapper>
        </MobileSliderContainer>
    )
}

export default MobileSlider
