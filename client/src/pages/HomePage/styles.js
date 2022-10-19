import styled, { keyframes } from "styled-components";

const url = (wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/stars.svg${wrap ? ")" : ""}`;

const titleFade = keyframes`
from{
  opacity: 0;
  transform: translateY(100px);
}
to{
  opacity: 1;
  transform: translateY(0px);
}

`;

const textFade = keyframes`
from{
  opacity: 0;
  transform: translateX(100px);
}
to{
  opacity: 1;
  transform: translateX(0px);
}
`;

export const ContainerHome = styled.div`
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 130vh;
  }
`;

export const ContentHomePage = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 20%;
  }
`;

export const TitleHome = styled.h1`
  font-size: 6rem;
  color: aliceblue;
  font-family: "Montserrat", sans-serif;
  animation: ${titleFade} 1s ease-in-out;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const TextHome = styled.p`
  margin-top: -5%;
  font-size: 1.3rem;
  color: aliceblue;
  font-family: "Montserrat", sans-serif;
  padding: 2rem;
  animation: ${textFade} 1s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TitleFooter = styled.h1`
  color: #253237;
  font-size: 3rem;
  font-weight: 900;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const RightBlockFooter = styled.div`
  display: inline-table;
  align-items: center;
  margin-right: 2rem;
  height: 30vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0;
    margin-top: 2rem;
  }
`;

export const TitleRightBlockFooter = styled.h1`
  color: aliceblue;
  font-size: 2.2rem;
  font-weight: 900;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const TextRightBlockFooter = styled.p`
  color: aliceblue;
  font-size: 1.3rem;
  font-family: "Montserrat", sans-serif;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ContainerIcons = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const ContainerFooter = styled.div`
  background: #253237;
  background-image: ${url(true)};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    height: 180vh;
  }
`;
export const ButtonIcons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(103, 103, 103, 0.2);
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background-color: rgb(103, 103, 103, 0.5);
  }
`;
