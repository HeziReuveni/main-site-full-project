import styled from "styled-components";

export const ContainerTitleSites = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleSites = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 2px;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContainerButtons = styled.div`
  height: 70vh;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export const ButtonSites = styled.button`
  width: 100%;
  height: 10vh;
  background: none;
  color: #fff;
  border: 1px solid #91c9ff;
  padding: 10px;
  font-size: 1.2rem;
  transition: 1s;
  cursor: pointer;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 1px;
  &:hover {
    background: rgb(8, 8, 164, 0.2);
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
