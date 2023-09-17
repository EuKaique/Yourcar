import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navBar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { PageContainer } from "./styles";
import { TopCars } from "./topCars";
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
            <Marginer direction="vertical" margin="8em" />
            <TopCars />
            <Footer />
        </PageContainer>
    )
}