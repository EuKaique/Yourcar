import McLarenCarImg from '../../../assets/images/mclaren-orange-big.png';
import BlobImg from '../../../assets/images/blob.svg';
import { Button } from "../../components/button";
import { BlobContainer, ButtonsContainer, Description, LeftContainer, RightContainer, Slogan, StandaloneCar, TopSectionContainer } from "./styles";

export function TopSection(){
    return(
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent The Best Quality Car's With Us</Slogan>
                <Description>
                    Always choose the best car from our local stores or order it remotely
                    at the best price for you and get the best quality cars for as long as
                    you like
                </Description>
                <ButtonsContainer>
                    <Button text="Book Your Ride"/>
                    <Button theme="filled" text="Sell Your Car" />
                </ButtonsContainer>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} alt="blob" />
                </BlobContainer>
                <StandaloneCar>
                    <img src={McLarenCarImg} alt="McLaren" />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    )
}