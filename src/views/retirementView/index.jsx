import React, { useState } from "react";
import { InputRange, InputRangeContainer, InputRangeWrapper, MoreContainer, RetirementCard, RetirementHeading, RetirementViewContainer, RetirementViewWrapper } from "../../styles/retirementView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../styles/introView";

const RetirementView=()=>{
    const [contribution,setContribution]=useState(12)
    const [age,setAge]=useState(65)

    return(
        <RetirementViewContainer>
            <RetirementViewWrapper>
                <RetirementCard>
                    <RetirementHeading>Retirement Strategy</RetirementHeading>
                    <div>
                        <p>Employee Contribution</p>
                        <InputRangeWrapper>
                            <InputRange value={contribution} type="range" onChange={(e)=>setContribution(e.target.value)}/>
                            <p>{contribution}%</p>
                        </InputRangeWrapper>
                    </div>

                    <InputRangeContainer>
                        <p>Retirement Age</p>
                        <InputRangeWrapper>
                            <InputRange  value={age} type="range" onChange={(e)=>setAge(e.target.value)}/>
                            <p>{age}</p>
                        </InputRangeWrapper>
                    </InputRangeContainer>

                    <InputRangeWrapper>
                        <p>Employer Contribution</p>
                        <p>8.4%</p>
                    </InputRangeWrapper>

                    <InputRangeWrapper>
                        <p>Interest Rate</p>
                        <p>5%</p>
                    </InputRangeWrapper>

                    <Button>Update</Button>
                    <p>View Help Docs<FontAwesomeIcon icon={faAngleRight}/></p>
                </RetirementCard>

                <MoreContainer>
                    <div>
                        <p>Are you considering a</p>
                        <p>Housing Advance?</p>
                    </div>
                    <p>Limited time reduced interest.</p>
                    <p>Learn More <FontAwesomeIcon icon={faAngleRight}/></p>
                </MoreContainer>
            </RetirementViewWrapper>
        </RetirementViewContainer>
    )
}

export default RetirementView