import React, {useState} from 'react';
import Video from '../../videos/CatVideo1.mp4';
import { Button } from '../ButtonElements';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover);
    };



  return (
    <HeroContainer id='home' >
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='CatVideo1.mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Mishi Wasi</HeroH1>
            <HeroP>
            Albergue para Gatos & Hospedaje para humanos. ! Ayúdanos donando, auspiciando o alquilando nuestras coloridas habitaciones !
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >
                    Get started {hover ? <ArrowForward /> : <ArrrowRight />}

                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection