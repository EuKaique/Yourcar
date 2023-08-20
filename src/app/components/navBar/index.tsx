import { styled } from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";

const NavBarContainer = styled.div`
    min-height: 60px;
    ${tw`
        max-w-screen-2xl
        w-11/12
        flex
        flex-row
        items-center
        lg:px-12
        justify-between
    `}
`

const LogoContainer = styled.div``

export function NavBar(){
    return(
        <NavBarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavBarContainer>
    )
}