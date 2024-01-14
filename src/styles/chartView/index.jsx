import styled from 'styled-components'

export const ChartViewContainer=styled.div`
    max-width: 800px;
    width: 100%;
    height: 100vh;
    padding: 0px 50px 0px 50px;
    position: relative;
    top: -10px;

    @media (max-width:1011px) {
        max-width: 450px;
    }

    @media(max-width:426px){
        padding: 15px;
        max-width: 400px;
        width: 100%;
        margin-top: 40px;
    }

    @media(max-width:321px){
        left: 11px;
    }   
`

export const ChartViewWrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const ChartBox1=styled.div`
    padding-top: 30px;

    :nth-child(1){
        color: #08019f;
        margin: 0;
        font-weight: bold;
    }

    :nth-child(2){
        margin: 0;
        font-size: 20px;
        font-weight: bold;
    }
`

export const ChartBox2=styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

    @media (max-width:426px){
        flex-direction: column;
        gap: 20px;
    }

    p{
        font-size: 15px
    }
`

export const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: 30px;
`

export const IncomeDetails=styled.div`
    padding-top: 25px;
    max-width: 180px;
    width: 100%;
    flex: 1;

    @media (max-width:426px){
        max-width: 400px;
        width: 100%;
    }

    @media (max-width:321px){
        font-size: 15px;
    }

    :nth-child(1){
        margin: 0;
        font-weight: bold;
        font-size: 20px;
    }

    :nth-child(2){
        margin: 0;
        color: gray;
    }

    &::after{
        content:"";
        display: block;
        border-bottom: 2px solid blue;
        padding-top: 10px;
    }
`

export const ChartBox3=styled.div`
    @media (max-width:426px){
        
    }
`

export const ChartHeading=styled.p`
    font-weight: bold;
    padding-top: 10px;

    @media (max-width:426px){
        margin-top: 40px;
        font-size: 20px;
    }
`

export const Contributors=styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px;
    justify-content: center;

    div{
        max-width: 180px;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;

        :nth-child(1){
            color: gray;
            padding: 0;
            margin: 0;
        }

        :nth-child(2){
            font-weight: bold;
            padding: 0;
            margin: 0;
        }

        @media (max-width:426px){
            flex-direction: column;
        }

        p{
            font-size: 15px;

            @media (max-width:321px){
                font-size: 15px;
            }
        }
    }
`

export const Contributor1=styled.div`
    &::before{
        content: "";
        width: 10px;
        height: 10px;
        background-color: blue;
        position: relative;
        top: 1px;
        left: -5px;
    }
`

export const Contributor2=styled.div`
   &::before{
        content: "";
        width: 10px;
        height: 10px;
        background-color: #4837fd;
        position: relative;
        top: 1px;
        left: -5px;
    }
`

export const Contributor3=styled.div`
    &::before{
        content: "";
        width: 10px;
        height: 10px;
        background-color: #89aeff;
        position: relative;
        top: 1px;
        left: -5px;
    }
`

export const ChartBox4=styled.div`
    max-width: 600px;
    width: 100%;
    height: 100%;
    padding-top: 10px;
    position: relative;
`

export const ResponsiveContainer = styled.div`

`

export const Tick=styled.div`
    position: absolute;
    top: 0px;
    right: -5px;
    width: 25px;
    height: 25px;
    background-color: #22d6aa;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    border: 2px solid white;
`

export const ChartBox5=styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10px;
`

export const CompareHeading=styled.div`
    :nth-child(1){
        font-weight: bold;
        font-size: 20px;
        margin: 0;
        padding: 0;
    }

    :nth-child(2){
        color: gray;
        margin: 0;
        padding: 0;
    }
`

export const CompareDetailsWrappper=styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 50px;

    @media (max-width:426px){
        flex-direction: column;
        gap: 40px;
    }
`

export const DropDown=styled.select`
    appearance: none;  
    border: none;
    font-weight: 300;
    font-size: 15px;
    
    :focus{
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        padding: 5px;
    }

    @media (max-width:426px){
        max-width: 400px;
        width: 100%;
    }
`

export const OptionsWrapper=styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 0.5;

    div{
        display: flex;
        gap: 5px;
        align-items: center;
        position: relative;

        &::after{
            content: "";
            display: block;
            max-width: 160px;
            width: 100%;
            position: absolute;
            top: 24px;
            width: 100%;
            border-bottom: 2px solid gray;

            @media (max-width:426px){
                max-width: 400px;
                width: 100%;
            }
        }
    }

    label{
        font-weight: bold;
    }
`

export const CircleContainer=styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
`

export const CircleWrapper=styled.div`
    text-align: center;
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;

    p{
        font-weight: bold;
    }
`

export const Circle1=styled.div`
    flex: 1;
    border:  5px solid #d3f7ee;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after{
        content: "";
        border: 10px solid #22d6aa;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        clip-path: ellipse(70% 70% at 110% 0%);
    }
`

export const Circle2=styled.div`
    flex: 1;
    border:  5px solid #d3f7ee;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after{
        content: "";
        border: 10px solid #22d6aa;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        clip-path: ellipse(70% 500% at 110% 100%);
    }
`

export const Circle3=styled.div`
    flex: 1;
    border:  5px solid #d3f7ee;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after{
        content: "";
        border: 10px solid #22d6aa;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        clip-path: ellipse(70% 1000% at 110% 0%);
    }
`