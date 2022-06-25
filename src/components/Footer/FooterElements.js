import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #302E23;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #F2D16D;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

export const ImgLogo = styled.img`
    height: 50px;
    width: 50px;

    &:hover {
        background-color: #F2D16D;
        transition: 0.3s ease-out;
    }
`

export const Iconn = styled.svg.attrs({
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
})``

const Svg = styled(Iconn)`
    width: 24px;
    height: 24px;
`

export const Cloud = ({ className }) => ( 
    <Svg viewBox="0 0 1839.3 1843.06" className={className}>   
      <path
        class="cls-1"
        fill="#f2f2f2"
        d="M1193.61,1920.46c-93.73,0-323.95,2.76-386.62-.57-138.63-7.36-200.32-99.1-156.13-228.62,52.33-153.37,103.86-307,158.19-459.68,13.26-37.26,11.71-56-27.51-78.18-153.31-86.55-190.81-189.9-131.9-352.27,14.83-40.89-5.39-76.95-4.89-115.5.78-60.48-8.13-138.65,41.28-167.77s123.44,6.92,163,49.14c68.22,72.77,154,46.42,232.15,62,27.94,5.57,39.49-21.8,57.29-35.68,60.83-47.45,142.1-109.71,201.81-73.62,64,38.68,53.49,141,35,219.09-10.47,44.17-11.38,83.71-.73,128.68,25.68,108.33-23.75,212.11-136.16,274.21-56.71,31.33-59.81,59.66-38.81,114.85,49.24,129.39,93.71,260.79,134.48,393.11,16.61,53.9,33.42,56.51,79.37,28.95,273.43-164,421.21-487.27,368.92-815-49.61-311-303.87-575.16-615.18-639.24C797.84,148.36,432,332,278,670.66,123.52,1010.38,224.44,1406,524,1635.11c16.58,12.68,34.9,23.85,48.85,39,22.29,24.2,23.26,52.38,2.4,78.37-20.21,25.19-46.37,34-76.4,17.67-16-8.68-31-19.39-45.73-30.18-334.74-245.42-462-692.59-307.73-1080.42,155.46-390.69,560.78-629.1,974-572.92,416.09,56.57,741.81,383.55,792.67,795.71,49.79,403.52-148.66,756-513.66,950.53C1330.07,1878.74,1248.88,1920.46,1193.61,1920.46ZM952.16,899.27c-6.71-51.85-37.5-86.65-90.46-88C804,809.87,767,846.91,767.29,904c.31,52.37,33.37,88.59,88.84,89.71C915.62,994.86,944.85,958.61,952.16,899.27Zm206.54,96.44c51.83-9.79,88.39-40.57,84.83-98.94-3.28-53.77-39.64-87.24-93.39-85.44-52.62,1.77-89,34-89,89.58C1061,959.53,1096.34,990,1158.7,995.71Z"
        transform="translate(-80.35 -78.47)"  
      /> 
    </Svg>
  )

export const NoSunForYou = styled(Cloud)`   
    height: 50px;   
    width: auto;

    &:hover {
        filter: invert(74%) sepia(56%) saturate(357%) hue-rotate(344deg) brightness(280%) contrast(93%);
        transition: 0.3s ease-out;
    }
`