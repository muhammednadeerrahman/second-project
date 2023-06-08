import React from 'react'
import styled from "styled-components"
import Header from '../includes/Header'


export default function Dashboard() {
  return (
    <>
        <SectionDashboard>
            <DashboardLeft>
                <LeftTop>
                    <TopThreeContainer>
                       <TopInnerTop>
                          <TopCount>852,00</TopCount>
                          <TopImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></TopImage>
                          <Percentage>-10%</Percentage>
                       </TopInnerTop>
                       <TopInnerBottom>
                          <BottomImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></BottomImage>
                          <BottomImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></BottomImage>

                       </TopInnerBottom>
                    </TopThreeContainer>
                    <TopThreeContainer>
                       <TopInnerTop>
                          <TopCount>852,00</TopCount>
                          <TopImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></TopImage>
                          <Percentage>-10%</Percentage>
                       </TopInnerTop>
                       <TopInnerBottom>
                          <BottomImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></BottomImage>
                          <BottomImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></BottomImage>

                       </TopInnerBottom>
                    </TopThreeContainer>
                    <TopThreeContainer>
                       <TopInnerTop>
                          <TopCount>852,00</TopCount>
                          <TopImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></TopImage>
                          <Percentage>-10%</Percentage>
                       </TopInnerTop>
                       <TopInnerBottom>
                          <BottomImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></BottomImage>
                          <BottomImage src = {require("../assets/Property-1=down.svg").default} alt = "image"></BottomImage>

                       </TopInnerBottom>
                    </TopThreeContainer>
                    
                </LeftTop>
            </DashboardLeft>
            <DashboardRight></DashboardRight>
        </SectionDashboard>
  
    </> )
}

const SectionDashboard = styled.div`
background-color: #171B2C;
`
const DashboardLeft = styled.div``
const LeftTop = styled.div`
display: flex;
justify-content: space-between;
`
const TopThreeContainer = styled.div`
width: 30%;
background-color: #111219 ;
`
const TopInnerTop = styled.div``
const TopCount = styled.h4``
const TopImage = styled.img``
const TopInnerBottom = styled.div``
const BottomImage = styled.img``
const DashboardRight = styled.div``
const Percentage = styled.span``
// const SectionDashboard = styled.div``


