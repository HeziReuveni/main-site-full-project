import styled, { css } from "styled-components";

const url = (wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/stars.svg${wrap ? ")" : ""}`;

export const ContainerIframePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  padding-top: 3rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 180vh;
    padding-top: 3rem;
  }
`;

export const ContainerIframe = styled.div`
  height: 75vh;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Iframe = styled.iframe`
  background-color: #fafafa;
  border: 2px solid gray;
  height: 70vh;
  width: 24vw;
`;

export const InfoBoxPremiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: #87bcde;
  background-color: #253237;
  background-image: ${url(true)};
  border: 2px solid gray;
  height: ${(props) => (props.infoPremiumSiteProps ? "0vh" : "70vh")};
  transition: height 1s ease-in-out;
  width: 24vw;
`;

export const InfoBoxStandardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: #87bcde;
  background-color: #253237;
  background-image: ${url(true)};
  border: 2px solid gray;
  height: ${(props) => (props.infoStandardSiteProps ? "0vh" : "70vh")};
  transition: height 1s ease-in-out;
  width: 24vw;
`;

export const InfoBoxBasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: #87bcde;
  background-color: #253237;
  background-image: ${url(true)};
  border: 2px solid gray;
  height: ${(props) => (props.infoBasicSiteProps ? "0vh" : "70vh")};
  transition: height 1s ease-in-out;
  width: 24vw;
`;

export const CardToMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #87bcde;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    background-color: #253237;
    background-image: ${url(true)};
    width: 100%;
    height: 40vh;
  }
`;

export const ButtonIframe = styled.button`
  padding-bottom: 1rem;
  background-color: #253237;
  background-image: ${url(true)};
  border: none;
  color: aliceblue;
  letter-spacing: 2px;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  border-radius: 0px 0px 20px 20px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    letter-spacing: 7px;
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
    height: 6vh;
  }
`;

export const TitlePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #253237;
  background-image: ${url(true)};
  border: none;
  color: aliceblue;
  letter-spacing: 2px;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  font-size: 1.4rem;
  height: 8vh;
`;

export const TitlePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background-color: #253237;
  background-image: ${url(true)};
  border: none;
  font-weight: bold;
  color: aliceblue;
  letter-spacing: 2px;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  font-size: 1.6rem;
  height: 15vh;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    height: 10vh;
    padding-top: 1rem;
  }
`;

export const ButtonToHome = styled.button`
  border: none;
  border-radius: 50%;
  width: 60px;
  font-size: 1.4em;
  height: 60px;
  color: #87bcde;
  background: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    font-size: 1.8em;
    height: 65px;
    width: 65px;
    background-color: rgb(255, 255, 255, 0.2);
  }
`;

export const ButtonDetails = styled.button`
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 2rem;
  border: none;
  border-radius: 50%;
  width: 60px;
  font-size: 2rem;
  height: 60px;
  color: #87bcde;
  background: #253237;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0px 0px 10px #364247;
  &:hover {
    color: #68add8;
    transform: translateY(-6px);
  }
`;

export const LoadingIframe = styled.div`
  background-color: #fafafa;
  border: 2px solid gray;
  height: 70vh;
  width: 24vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
