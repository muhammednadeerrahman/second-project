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
                                <UpImageContainer>
                                    <SpanContainer>
                                    <TopImage src = {require("../assets/greenup.svg").default} alt = "image"></TopImage>
                                    </SpanContainer>
    
                                    <Percentage>-10%</Percentage>
                                </UpImageContainer>
                            
                            </TopInnerTop>
                            <TopInnerBottom>
                                <SymbolSpan>
                                    <BottomImage src = {require("../assets/diamond.svg").default} alt = "image"/>
                                </SymbolSpan>                            
                                <GraphImage src = {require("../assets/graph.svg").default} alt = "image"/>

                            </TopInnerBottom>
                        </TopThreeContainer>
                        <TopThreeContainer>
                            <TopInnerTop>
                                <TopCount>852,00</TopCount>
                                <UpImageContainer>
                                    <SpanContainerRed>
                                    <TopImage src = {require("../assets/reddown.svg").default} alt = "image"></TopImage>
                                    </SpanContainerRed>
    
                                    <PercentageRed>-10%</PercentageRed>
                                </UpImageContainer>
                            
                            </TopInnerTop>
                            <TopInnerBottom>
                                <SymbolSpan>
                                    <BottomImage src = {require("../assets/coinwater.svg").default} alt = "image"/>
                                </SymbolSpan>                            
                                <GraphImage src = {require("../assets/graph.svg").default} alt = "image"/>

                            </TopInnerBottom>
                        </TopThreeContainer>
                        <TopThreeContainer>
                            <TopInnerTop>
                                <TopCount>852,00</TopCount>
                                <UpImageContainer>
                                    <SpanContainer>
                                    <TopImage src = {require("../assets/greenup.svg").default} alt = "image"></TopImage>
                                    </SpanContainer>
    
                                    <Percentage>-10%</Percentage>
                                </UpImageContainer>
                            
                            </TopInnerTop>
                            <TopInnerBottom>
                                <SymbolSpan>
                                    <BottomImage src = {require("../assets/bitcoin.svg").default} alt = "image"/>
                                </SymbolSpan>                            
                                <GraphImage src = {require("../assets/graph.svg").default} alt = "image"/>

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
                                    <BitcoinImage src = {require("../assets/coinwater.svg").default} alt = "BitcoinImage" />
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
                            <RightSyncImage src = {require("../assets/sync.svg").default} alt = "syncImage" />
                        </RightBottomInsideTop>
                        <RightBottomInsideMiddle>
                            
                            <SaleName>Sale</SaleName>
		                    <SaleContainer>
                                <SaleAmount>$678</SaleAmount>
			                    <SaleAmountRightContaner>
                                    <Currency>USD</Currency>
				                    <CurrencyDropdown></CurrencyDropdown>

                                </SaleAmountRightContaner>
                            </SaleContainer>
                            <SaleName>Sale</SaleName>
		                    <SaleContainer>
                                <SaleAmount>.990</SaleAmount>
			                    <SaleAmountRightContaner>
                                    <Currency>ETH</Currency>
				                    <CurrencyDropdown></CurrencyDropdown>

                                </SaleAmountRightContaner>
                            </SaleContainer>

                        </RightBottomInsideMiddle>

                    </RightBottomSection>
                    <RightBottomSubmitButton>Exchange Now</RightBottomSubmitButton>


 

	


                </DashboardRight>
            </SectionWrapper>
        </SectionDashboard>
  
    </> )
}

const SectionDashboard = styled.div`
background-color:  #111219;
`
const SectionWrapper = styled.div`
display: flex;
justify-content: space-between;
max-width :1200px;
width: 90%;
margin: 0 auto;
`
const DashboardLeft = styled.div`
width:70%;
`
const LeftTop = styled.div`
display: flex;
justify-content: space-between;
`
const TopThreeContainer = styled.div`
border-radius: 8px;
padding: 20px;
width: 25%;
background-color: #171B2C ;
margin: 60px 0 50px;
`
const TopInnerTop = styled.div`
display: flex;
justify-content: space-between;
`
const TopCount = styled.h4`
color: #fff;
`
const UpImageContainer = styled.div`
display: flex;
`
const SpanContainer = styled.span`
background-color: rgba(24,44,50,255);
border-radius: 50%;
width: 25px;
height: 25px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px;
`
const SpanContainerRed = styled.span`
background-color: #2d1b31;
border-radius: 50%;
width: 25px;
height: 25px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 5px;
`
const TopImage = styled.img`
width: 15px;
height: 15px;
display: block;

`
const TopInnerBottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`
const SymbolSpan = styled.span`
border-radius: 50%;
background-color: #111219;
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;

`
const BottomImage = styled.img`
width: 20px;
height: 20px;
display: block;
`
const GraphImage = styled.img`
width: 40px;
height: 40px;
display: block;
`
const DashboardRight = styled.div`
width:35%;

`
const Percentage = styled.span`
color: #07af5a;
display: block;
`
const PercentageRed = styled.span`
color: #07af5a;
display: block;
color: #983752;
`

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
const RightTopContainer = styled.div`
background-color: #171B2C ;
`
const TopInsideTop = styled.div``
const InsideTopLeft = styled.div``
const Amount = styled.h4``
const InsideTopRight = styled.div``
const TopInsideImage = styled.img``
const RightTopMiddle = styled.div``
const MiddleTopInside = styled.div``
const TotalAmount = styled.h3``
const MiddleBottomInside = styled.div``
const DepositContainer = styled.div``
const DepositImage = styled.img``
const Deposit = styled.h4``
const WithdrawelContainer = styled.div``
const WithdrawImage = styled.img``
const Withdraw = styled.h4``
const RightTopBottom = styled.div``
const TransactionTitle = styled.h5``
const BitCoinContainer = styled.div``
const BitCoinLeftContainer = styled.div``
const BitcoinImage = styled.img``
const BitCoinTitleContainer = styled.div``
const NameCoin = styled.h4``
const NameCoinType = styled.h4``
const BitCoinRightContainer = styled.div``
const BitcoinAmount = styled.h4``
const BitcoinTime = styled.h4``
const RightBottomSection = styled.div`
background-color: #171B2C ;
`
const RightBottomInsideTop = styled.div``
const LeftExchangeTitle = styled.h3``
const RightSyncImage = styled.img``
const RightBottomInsideMiddle = styled.div``
const SaleName = styled.h3``
const SaleContainer = styled.div``
const SaleAmount = styled.h4``
const SaleAmountRightContaner = styled.div``
const Currency = styled.h4``
const CurrencyDropdown = styled.select``
const RightBottomSubmitButton = styled.button``





