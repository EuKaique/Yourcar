import { styled } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "../marginer";
import { Button } from "../button";

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        py-1
        px-2
        md:py-2
        md:px-9
    `}
`

const ItemContainer = styled.div`
    ${tw`flex`}
`

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
    `}
`

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;

    ${tw`
        bg-gray-300
        mx-2
        md:mx-5
    `}
`

export function BookCard(){
    return(
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>Pick Up Date</Name>
            </ItemContainer>
            <LineSeparator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>Return Date</Name>
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em" />
            <Button text="Book Your Ride" />
        </CardContainer>
    )
}