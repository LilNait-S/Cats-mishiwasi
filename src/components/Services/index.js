import React from 'react';
import Icon1 from '../../images/Gatito1.jpg';
import Icon2 from '../../images/Gatito2.jpg';
import Icon3 from '../../images/Gatito3.jpg';
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Nuestra Galeria del Albergue</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Gustosin</ServicesH2>
                {/* <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP> */}
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Aquiles</ServicesH2>
                {/* <ServicesP>You can access our platfrom online anywhere in the world</ServicesP> */}
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Café</ServicesH2>
                {/* <ServicesP>Unlock our special membership card that returns 5% cash back</ServicesP> */}
            </ServicesCard>
        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services
