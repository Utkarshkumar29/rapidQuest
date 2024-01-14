import React from "react";
import { ChartBox1, ChartBox2, ChartBox3, ChartBox4, ChartBox5, ChartHeading, ChartViewContainer, ChartViewWrapper, Circle1, Circle2, Circle3, CircleContainer, CircleWrapper, CompareDetailsWrappper, CompareHeading, Contributor1, Contributor2, Contributor3, Contributors, DropDown, IncomeDetails, OptionsWrapper, Tick, Wrapper } from "../../styles/chartView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import SimpleAreaChart from "../../components/graph";

const ChartView=()=>{
    return(
        <ChartViewContainer>
            <ChartViewWrapper>
                <ChartBox1>
                    <p>Retirement Income</p>
                    <p>Starting Year 2056</p>
                </ChartBox1>

                <ChartBox2>
                    <IncomeDetails>
                        <p>$300,000</p>
                        <p>My Goal</p>
                    </IncomeDetails>

                    <Wrapper>
                        <IncomeDetails>
                            <p>59%</p>
                            <p>Goal Achieved</p>
                        </IncomeDetails>

                        <IncomeDetails>
                            <p>$300</p>
                            <p>Est. Monthly Income</p>
                        </IncomeDetails>
                    </Wrapper>
                </ChartBox2>

                <ChartBox3>
                    <ChartHeading>Contributions Overtime</ChartHeading>
                    <Contributors>
                        <Contributor1>
                            <p>Employer: </p>
                            <p>K 73,500</p>
                        </Contributor1>
                        <Contributor2>
                            <p>Employee: </p>
                            <p>K 52,500</p>
                        </Contributor2>
                        <Contributor3>
                            <p>Total Interest: </p>
                            <p> K 244,313</p>
                        </Contributor3>
                    </Contributors>
                </ChartBox3>

                <ChartBox4>
                        <SimpleAreaChart/>
                    <Tick><FontAwesomeIcon icon={faCheck}/></Tick>
                </ChartBox4>

                <ChartBox5>
                    <CompareHeading>
                        <p>How do I compare to my peer?</p>
                        <p>These numbers represent current goal achievement</p>
                    </CompareHeading>

                    <CompareDetailsWrappper>
                        <OptionsWrapper>
                            <div>
                                <label>Age: </label>
                                <DropDown id="dropdown">
                                    <option value="">Under 30</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </DropDown>
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </div>

                            <div>
                                <label>Salary: </label>
                                <DropDown id="dropdown">
                                    <option value="">K 20 - K 30</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </DropDown>
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </div>

                            <div>
                                <label>Gender: </label>
                                <DropDown id="dropdown">
                                    <option value="">Female</option>
                                    <option value="option1">Male</option>
                                    <option value="option2">Other</option>
                                </DropDown>
                                <FontAwesomeIcon icon={faCaretDown}/>
                            </div>
                        </OptionsWrapper>

                        <CircleContainer>
                            <CircleWrapper>
                                <Circle1><p>78%</p></Circle1>
                                <p>Average</p>
                            </CircleWrapper>

                            <CircleWrapper>
                                <Circle2><p>95%</p></Circle2>
                                <p>Top</p>
                            </CircleWrapper>

                            <CircleWrapper>
                                <Circle3><p>59%</p></Circle3>
                                <p>Me</p>
                            </CircleWrapper>
                            
                        </CircleContainer>
                    </CompareDetailsWrappper>
                </ChartBox5>

            </ChartViewWrapper>
        </ChartViewContainer>
    )
}

export default ChartView
