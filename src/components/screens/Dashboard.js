import React from 'react'
import styled from "styled-components"
import Header from '../includes/Header'


export default function Dashboard() {
  return (
    <>
        <SectionDashboard>
            <SectionWrapper>
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
                    <DashboardMiddleSection>

                    </DashboardMiddleSection>
                    <LeftBottomContainer>
                        <LeftBottomTwoContainers></LeftBottomTwoContainers>
                        <LeftBottomTwoContainers></LeftBottomTwoContainers>

                    </LeftBottomContainer>
                </DashboardLeft>
               
                <DashboardRight>
                    <RightTopContainer>
                        <TopInsideTop>
                            <InsideTopLeft>
                                <Amount>Amount</Amount>
                            </InsideTopLeft>
                            <InsideTopRight>
                                <TopInsideImage src={require("../assets/bitcoin.svg").default} alt="Coin-image"></TopInsideImage>
                                <TopInsideImage src={require("../assets/diamond.svg").default} alt="Coin-image"></TopInsideImage>
                                <TopInsideImage src={require("../assets/coinwater.svg").default} alt="Coin-image"></TopInsideImage>
                            </InsideTopRight>
                        </TopInsideTop>
                        <RightTopMiddle>
                            <MiddleTopInside>
                            <TotalAmount>656582,00</TotalAmount>
                            </MiddleTopInside>
                            <MiddleBottomInside>
                                <DepositContainer>
                                    <DepositImage src={require("../assets/deposit.svg").default} alt="depositImage"></DepositImage>
                                    <Deposit>Deposit</Deposit>
                                </DepositContainer>
                                <WithdrawelContainer>
                                    <WithdrawImage src={require("../assets/withdraw.svg").default} alt="WithdrawImage"></WithdrawImage>
                                    <Withdraw>Withdraw</Withdraw>
                                </WithdrawelContainer> 
                            </MiddleBottomInside>                           
                            
                        </RightTopMiddle>
                        <RightTopBottom>
                            <TransactionTitle>Recent Transaction</TransactionTitle>
                            <BitCoinContainer>
                                <BitCoinLeftContainer>
                                    <BitcoinImage src = {require("../assets/bitcoin.svg").default} alt = "BitcoinImage" />
                                    <BitCoinTitleContainer>
                                        <NameCoin>Bitcoin</NameCoin>
                                        <NameCoinType>BTC</NameCoinType>
                                    </BitCoinTitleContainer>
                                </BitCoinLeftContainer>
                                <BitCoinRightContainer>
                                    <BitcoinAmount>$240.00</BitcoinAmount>
                                    <BitcoinTime>12:00AM</BitcoinTime>
                                </BitCoinRightContainer>
                            </BitCoinContainer>
                            <BitCoinContainer>
                                <BitCoinLeftContainer>
                                    <BitcoinImage src = {require("../assets/coinwaterbitcoin.svg").default} alt = "BitcoinImage" />
                                    <BitCoinTitleContainer>
                                        <NameCoin>Bitcoin</NameCoin>
                                        <NameCoinType>BTC</NameCoinType>
                                    </BitCoinTitleContainer>
                                </BitCoinLeftContainer>
                                <BitCoinRightContainer>
                                    <BitcoinAmount>$240.00</BitcoinAmount>
                                    <BitcoinTime>12:00AM</BitcoinTime>
                                </BitCoinRightContainer>
                            </BitCoinContainer>
                            <BitCoinContainer>
                                <BitCoinLeftContainer>
                                    <BitcoinImage src = {require("../assets/diamond.svg").default} alt = "BitcoinImage" />
                                    <BitCoinTitleContainer>
                                        <NameCoin>Bitcoin</NameCoin>
                                        <NameCoinType>BTC</NameCoinType>
                                    </BitCoinTitleContainer>
                                </BitCoinLeftContainer>
                                <BitCoinRightContainer>
                                    <BitcoinAmount>$240.00</BitcoinAmount>
                                    <BitcoinTime>12:00AM</BitcoinTime>
                                </BitCoinRightContainer>
                            </BitCoinContainer>           
                        </RightTopBottom>
                    </RightTopContainer>
                    <RightBottomSection>
                        <RightBottomInsideTop>
                            <LeftExchangeTitle>Exchange</LeftExchangeTitle>
                            <RightSyncImage src = {require("../assets/.svg").default} alt = "syncImage" />
                        </RightBottomInsideTop>
                        <RightBottomInsideMiddle>
                            
                            <SaleName>Sale</SaleName>
		                    <SaleContainer>
                                <SaleAmount>$678</SaleAmount>
			                    <SaleAmountRightContaner>
                                    <Currency>USD</Currency>
				                    <CurrencyDropdown src = {require("../assets/.svg").default} alt = "dropdownImage" />

                                </SaleAmountRightContaner>
                            </SaleContainer>
                            <BuyName>Buy</BuyName>
		                    <BuyContainer>
                                <BuyAmount>$678</BuyAmount>
			                    <BuyAmountRightContaner>
                                    <Currency>USD</Currency>
				                    <CurrencyDropdown src = {require("../assets/.svg").default} alt = "dropdownImage" />

                                </BuyAmountRightContaner>
                            </BuyContainer>

                        </RightBottomInsideMiddle>

                    </RightBottomSection>


 

	<RightBottomSubmitButton>


                </DashboardRight>
            </SectionWrapper>
        </SectionDashboard>
  
    </> )
}

const SectionDashboard = styled.div`
background-color:  #111219;
`
const SectionWrapper = styled.div`
max-width :1200px;
width: 90%;
margin: 0 auto;
`
const DashboardLeft = styled.div``
const LeftTop = styled.div`
display: flex;
justify-content: space-between;
`
const TopThreeContainer = styled.div`
width: 30%;
background-color: #171B2C ;
`
const TopInnerTop = styled.div``
const TopCount = styled.h4``
const TopImage = styled.img``
const TopInnerBottom = styled.div``
const BottomImage = styled.img``
const DashboardRight = styled.div``
const Percentage = styled.span``
const DashboardMiddleSection = styled.div`
width:100%;
height: 300px;
background-color:#171B2C;
`
const LeftBottomContainer = styled.div`
display: flex;
justify-content: space-between;
`
const LeftBottomTwoContainers = styled.div`
width:40%;
height: 100px;
background:#171B2C;
`



