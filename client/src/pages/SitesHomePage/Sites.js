import React from "react";
import { Zoom, Fade } from "react-reveal";
import {
  ContainerTitleSites,
  TitleSites,
  ContainerButtons,
  ButtonSites,
} from "./styles";
import { Link } from "react-router-dom";

const Sites = () => {
  const listSites = [
    "נגריה",
    "הובלות",
    "קוסמטיקה",
    "רפואה",
    " השכרת רכב",
    " תיקון פלאפונים",
    "מוסך",
    "חנות בגדים",
    "רהיטים",
    "שיפוצים",
    "איסטלציה",
    "מסגריה",
    "מינימרקט",
    "הייטק",
    "בגדים",
    "נקיון",
  ];

  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  return (
    <>
      <div
        className="Sites"
        style={{
          color: "aliceblue",
          height: "130vh",
          width: "100%",
          background: "#253237",
          backgroundImage: url(true),
        }}
      >
        <Fade top delay={500}>
          <ContainerTitleSites>
            <TitleSites>בחר את סוג העסק </TitleSites>
          </ContainerTitleSites>
        </Fade>
        <ContainerButtons>
          {listSites.map((item) => (
            <Zoom>
              <Link to="/Cleanliness">
                <ButtonSites>{item}</ButtonSites>
              </Link>
            </Zoom>
          ))}
        </ContainerButtons>
      </div>
    </>
  );
};

export default Sites;
