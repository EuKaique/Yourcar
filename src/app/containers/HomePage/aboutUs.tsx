import JeepImg from '../../../assets/images/jeep.png';
import { AboutUsContainer, CarContainer, InfoContainer, InfoText, TitleAboutUs } from './styles';

export function AboutUs(){
    return(
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt="Jeep" />
            </CarContainer>
            <InfoContainer>
                <TitleAboutUs>Fell The Best Experience With Our Rental Deals</TitleAboutUs>
                <InfoText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus repellat aspernatur cumque esse, aliquid aperiam animi vitae iure? Omnis repudiandae dolore eveniet alias veniam sapiente ea debitis neque nesciunt.
                    Minima, dignissimos corporis? Vero aspernatur iste numquam laudantium distinctio dolor, nulla eum animi aut accusamus, hic doloribus facilis voluptas consequatur officiis deserunt expedita. Cupiditate necessitatibus aut ducimus nesciunt optio ullam.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}