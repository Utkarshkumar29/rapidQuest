import React from "react";
import { AccountHeading, BalanceWrapper, Button, ContributionWrapper, DivWrapper, IntoBox1, IntoBox2, IntrestWrapper, IntroHeading, IntroImage, IntroViewContainer, IntroViewWrapper, Transaction1, Transaction2, Transaction3, TransactionHeading } from "../../styles/introView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const IntroView=()=>{
    return(
        <IntroViewContainer>
            <IntroViewWrapper>
                <IntoBox1>
                    <IntroImage src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1392" alt="Error"/>
                    <IntroHeading>
                        <p>Hi Mike,</p>
                        <p>Welcome Back</p>
                    </IntroHeading>
                </IntoBox1>

                <IntoBox2>
                    <AccountHeading>Today</AccountHeading>

                    <BalanceWrapper>
                        <p>$19,892</p>
                        <p>Account Balance</p>
                    </BalanceWrapper>

                    <DivWrapper>
                        <ContributionWrapper>
                            <p>$4,000</p>
                            <p>Year-to-Date Contributions</p>
                        </ContributionWrapper>

                        <IntrestWrapper>
                            <p>1,892</p>
                            <p>Total Inerest</p>
                        </IntrestWrapper>
                    </DivWrapper>

                    <Button>I want to <FontAwesomeIcon icon={faCaretDown}/></Button>
                </IntoBox2>

                <IntoBox2>
                    <TransactionHeading>Recent Transactions</TransactionHeading>
                    <Transaction1>
                        <p>2020-08-07</p>
                        <p>Withdrawal Transfer to Bank-XXX11</p>
                    </Transaction1>
                    <Transaction2>
                        <p>2020-07-021</p>
                        <p>Withdrawal Transfer to Bank-XXX11</p>
                    </Transaction2>
                    <Transaction3>
                        <p>2020-07-16</p>
                        <p>Withdrawal Transfer to Bank-XXX11</p>
                    </Transaction3>
                </IntoBox2>
            </IntroViewWrapper>
        </IntroViewContainer>
    )
}

export default IntroView