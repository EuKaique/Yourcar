import { styled } from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
    background-color: #222222;
    ${tw`
        flex
        flex-col
        min-w-full
        pt-4
        md:pt-4
        items-center
        justify-center
    `}

    .heading-class{
        ${tw`
            md:mt-9
            ml-10
            md:ml-16
        `}
    }
`

export const InnerContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        w-full
        h-full
        max-w-screen-xl
    `}
`

export const BottomContainer = styled.div`
    ${tw`
        flex
        w-full
        max-w-6xl
        pl-20
        md:pl-0
        md:pr-12
        pb-4
    `}
`

export const CopyrightText = styled.small`
    font-size: 0.73em;
    ${tw`   
        text-gray-400
    `}
`

export const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        ml-10
        md:mr-16
        mt-8
    `}
`

export const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        font-normal
        mt-2
        max-w-xs
        leading-5
    `}
`

export const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-3
    `}
`

export const HorizontalContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        items-center
        ml-16
    `}
`

export const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`

export const ListItem = styled.li`
    ${tw`
        mb-3
    `}

    & > a{
        ${tw`
            text-sm
            text-white
            no-underline
        `}
        &:hover{
            transition: 0.15s;
            color: rgba(156, 163, 175, 0.8);
        }
    }

`

export const HeaderTitle = styled.h3`
    ${tw`
        text-xl
        font-bold
        text-white
        mb-3
    `}
`

export const RedIcon = styled.span`
    ${tw`
        w-9
        h-9
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `}
`

export const SmallText = styled.h6`
    ${tw`
        text-sm
        text-white
    `}
`
