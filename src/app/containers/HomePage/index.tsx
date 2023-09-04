import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navBar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { PageContainer } from "./styles";
import { TopSection } from "./topSection";

export function HomePage(){
    const screen = window.innerWidth;

    return(
        <PageContainer>
            <NavBar />
            <TopSection />
            {screen >= 640 && (
                <BookCard />
            )}
            <Marginer direction="vertical" margin="8em" />
            <BookingSteps />
            <Marginer direction="vertical" margin="8em" />
            <AboutUs />
        </PageContainer>
    )
}