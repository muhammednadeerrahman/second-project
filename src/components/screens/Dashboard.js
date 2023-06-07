import React from 'react'
import styled from "styled-components"


export default function Dashboard() {
  return (
    <>
        <SectionHeader>
                <HeaderLeft>
                    <Heading>Dashboard</Heading>
                    <SubHeading>Whole data stock here!</SubHeading>
                </HeaderLeft>
                <HeaderRight>
                    <HeadingNav>
                        <BellImage src ={require("../assets/Property-1=bell.svg").default} alt ="bellImage"/>
                        <Imageprofile src ={require("../assets/Frame-3466909.png")} alt ="profileIMage"/>
                        <DetailSection>
                            <ProfileName>Robert Fox</ProfileName>
                            <ProfilePositon>Admin</ProfilePositon>
                        </DetailSection>
                    </HeadingNav>

                </HeaderRight>
            
        </SectionHeader>
    </>
  )
}
const SectionHeader = styled.div`
padding: 30px;
display: flex;
justify-content: space-between;
height: 80px;
align-items: center;


`
const HeaderLeft = styled.div``


const Heading = styled.h1``
const SubHeading = styled.h5`
margin-top:-10px;
`
const HeaderRight = styled.div``
const HeadingNav = styled.div`
display: flex;
justify-content: space-between;
`
const BellImage = styled.img`
display: block;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: green;
margin-right: 20px;

`
const Imageprofile = styled.img`
display: block;
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 20px;

`
const DetailSection = styled.div`
display: flex;
flex-direction: column;
`
const ProfileName = styled.span``
const ProfilePositon = styled.span``

