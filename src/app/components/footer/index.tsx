import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../logo";
import { AboutContainer, AboutText, BottomContainer, CopyrightText, FooterContainer, HeaderTitle, HorizontalContainer, InnerContainer, LinksList, ListItem, RedIcon, SectionContainer, SmallText } from "./styles";

export function Footer(){
    const date = new Date()
    const year = date.getFullYear()

    return(
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="black"/>
                    <AboutText>Yourcar is a Car renting and selling company located in many countries across the world which has high quality cars and top rated service.</AboutText>
                </AboutContainer>
                <SectionContainer>
                    <LinksList>
                        <HeaderTitle>Our Links</HeaderTitle>
                        <ListItem><a href="/">Home</a></ListItem>
                        <ListItem><a href="/">About Us</a></ListItem>
                        <ListItem><a href="/">Services</a></ListItem>
                        <ListItem><a href="/">Models</a></ListItem>
                        <ListItem><a href="/">Blog</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <LinksList>
                        <HeaderTitle>Other Links</HeaderTitle>
                        <ListItem><a href="/">FAQ</a></ListItem>
                        <ListItem><a href="/">Contact Us</a></ListItem>
                        <ListItem><a href="/">Support</a></ListItem>
                        <ListItem><a href="/">Privacy Policy</a></ListItem>
                        <ListItem><a href="/">Terms &amp; Conditions</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle className="heading-class">Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+91 555-234-8469</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle className="heading-class">Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        <SmallText>info@yourcar.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyrightText>Copyright &copy; {year} Yourcar. All rights reserved.</CopyrightText>
            </BottomContainer>
        </FooterContainer>
    )
}