import { styled } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "../marginer";
import { Button } from "../button";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

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

const DateStart = styled(Calendar)`
    position: absolute;
    top: 4em;
    left: -2.2em;
    min-width: 22em;
    user-select: none;
`

const DateReturn = styled(Calendar)`
    position: absolute;
    top: 4em;
    left: -1.2em;
    min-width: 22em;
    user-select: none;
    
`

const ItemContainer = styled.div`
    ${tw`flex relative`}
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
        cursor-pointer
        select-none
    `}
`

const SmallIcon = styled.span`
    ${tw`
        text-gray-500
        fill-current
        text-xs
        md:text-base
        ml-1
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
    const [startDate, setStartDate] = useState(new Date())
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false)

    const [returnDate, setReturnDate] = useState(new Date())
    const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false)

    const toggleOpenStartDateCalendar = () => {
        setIsStartCalendarOpen(!isStartCalendarOpen)
        setIsReturnCalendarOpen(false)
    }

    const toggleOpenReturnDateCalendar = () => {
        setIsReturnCalendarOpen(!isReturnCalendarOpen)
        setIsStartCalendarOpen(false)
    }

    return(
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleOpenStartDateCalendar}>Pick Up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
                {isStartCalendarOpen && <DateStart value={startDate} onChange={setStartDate as any}/>}
            </ItemContainer>
            <LineSeparator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleOpenReturnDateCalendar}>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
                {isReturnCalendarOpen && <DateReturn value={returnDate} onChange={setReturnDate as any}/>}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em" />
            <Button text="Book Your Ride" />
        </CardContainer>
    )
}