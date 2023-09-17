import CarLogoImg from '../../../assets/images/car-logo.png';
import CarLogoDarkImg from '../../../assets/images/car-logo-dark.png';
import { Image, LogoContainer, LogoText } from './styles';

interface ILogoProps{
    color?: "white" | "black"
    bgColor?: "white" | "black"
}

export function Logo({color, bgColor}: ILogoProps){
    return(
        <LogoContainer>
            <Image>
                <img src={bgColor === "black" ? CarLogoDarkImg : CarLogoImg} alt="Yourcar" />
            </Image>
            <LogoText color={color}>Yourcar.</LogoText>
        </LogoContainer>
    )
}