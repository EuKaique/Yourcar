import { styled } from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

export const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden  
      `
    }
`

//TOP SECTION

export const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-11/12
        flex
        justify-between
    `}
`

export const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`

export const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
        xl:mr-24
    `}
`

export const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-5xl
        sm:text-3xl
        md:text-4xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-normal
    `}
`

export const Description = styled.p`
    ${tw`
        w-11/12
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`

export const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img{
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }

    @media (min-width: ${SCREENS.lg}){
        width: 50em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }

    @media (min-width: ${SCREENS.xl}){
        width: 70em;
        max-height: 10em;
        right: -9em;
        top: -26em;
        transform: rotate(-20deg);
    }
`

export const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    position: absolute;

    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}){
        height: 16em;
        right: -6em;
        top: -6em;
    }
    @media (min-width: ${SCREENS.lg}){
        height: 21em;
        right: -8em;
        top: -5em;
    }
    @media (min-width: ${SCREENS.xl}){
        height: 30em;
        right: -13em;
        top: -9em;
    }
`
export const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
    `}
`
//BOOKING STEPS

export const Container = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:py-6
    `}
`

export const Title = styled.h2`
    ${tw`
        text-2xl
        lg:text-4xl
        text-black
        font-bold
    `}
`

export const StepsContainer = styled.div`
    ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `}
`

export const StepContainer = styled.div`
    ${tw`
        flex
        flex-col
        md:w-96
        items-center
        transition-colors
        hover:text-red-500
        m-3
    `}
`

export const Step = styled.div`
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `}
`

export const StepTitle = styled.h4`
    ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`

export const StepDescription = styled.p`
    ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `}
`

export const StepIcon = styled.span`
    ${tw`
        text-red-500
        text-3xl
    `}
`

// ABOUT US

export const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        py-4
        px-7
        md:px-0
        bg-white
    `}
`

export const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -1em;

    img{
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}){
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg}){
        height: 30em;
    }
    @media (min-width: ${SCREENS.xlg}){
        height: 35em;
        margin-left: 0;
    }
`

export const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`

export const TitleAboutUs = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`

export const InfoText = styled.p`
    ${tw`
        md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `}
`

//TOP CARS
export const TopCarsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        px-4
        md:px-0
        mb-10
    `}
`

export const CarsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`