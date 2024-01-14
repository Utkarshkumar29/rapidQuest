import React from "react";
import { HomePageContainer, HomePageWrapper } from "../../styles/homePage";
import Slider from "../../components/slider";
import IntroView from "../../views/introView";
import ChartView from "../../views/chartView";
import RetirementView from "../../views/retirementView";
import MobileSlider from "../../components/mobileSlider";

const HomePage=()=>{
    return(
        <HomePageContainer>
            <HomePageWrapper>
                <Slider/>
                <IntroView/>
                <ChartView/>
                <RetirementView/>
                <MobileSlider/>
            </HomePageWrapper>
        </HomePageContainer>
    )
}

export default HomePage