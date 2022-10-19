import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-reveal";
import WaveBorder from "./WaveBorder";
import "./Cleanliness.css";
import {
  ContainerIframePage,
  ContainerIframe,
  Iframe,
  ButtonIframe,
  TitlePrice,
  TitlePage,
  ButtonToHome,
  ButtonDetails,
  InfoBoxPremiumContainer,
  InfoBoxStandardContainer,
  InfoBoxBasicContainer,
} from "./styles";
import { BsChevronCompactDown } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
import { TiInfoLarge } from "react-icons/ti";
import CleanlinessToMobile from "./CleanlinessToMobile";
import { AiFillStar } from "react-icons/ai";
import CustomIframe from "./Iframe";

const Cleanliness = () => {
  const [infoBasicSite, setInfoBasicSite] = useState(true);
  const [infoBasicSiteProps, setInfoBasicSiteProps] = useState(true);

  const [infoStandardSite, setInfoStandardSite] = useState(true);
  const [infoStandardSiteProps, setInfoStandardSiteProps] = useState(true);

  const [infoPremiumSite, setInfoPremiumSite] = useState(true);
  const [infoPremiumSiteProps, setInfoPremiumSiteProps] = useState(true);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const handleClickPremiumBox = () => {
    setInfoPremiumSite(!infoPremiumSite);
    setTimeout(() => {
      setInfoPremiumSiteProps(!infoPremiumSiteProps);
    }, 1);
  };

  const handleClickBasicBox = () => {
    setInfoBasicSite(!infoBasicSite);
    setTimeout(() => {
      setInfoBasicSiteProps(!infoBasicSiteProps);
    }, 1);
  };

  const handleClickStandardBox = () => {
    setInfoStandardSite(!infoStandardSite);
    setTimeout(() => {
      setInfoStandardSiteProps(!infoStandardSiteProps);
    }, 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;

  if (isTabletOrMobile) {
    // Mobile Component
    return <CleanlinessToMobile />;
  }

  if (isDesktopOrLaptop) {
    return (
      // Computer Component
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "#87BCDE",
          backgroundImage: url(true),
        }}
      >
        <TitlePage>
          <Fade top>
            בחרו את האתר המתאים לכם ביותר
            <BsChevronCompactDown size={40} />
          </Fade>
        </TitlePage>
        <Zoom>
          <div
            style={{
              position: "absolute",
              top: "3%",
              right: "3%",
              color: "aliceblue",
            }}
          >
            <Link to="/">
              <ButtonToHome>
                <ImHome />
              </ButtonToHome>
            </Link>
          </div>
        </Zoom>
        <WaveBorder upperColor="#253237" lowerColor="#87BCDE" />
        <ContainerIframePage>
          <Zoom>
            <ContainerIframe>
              <ButtonDetails onClick={handleClickPremiumBox}>
                <TiInfoLarge />
              </ButtonDetails>
              <TitlePrice> ₪ 399 פרימיום</TitlePrice>
              {infoPremiumSite ? (
                <CustomIframe src={"https://clean3-quick-site.vercel.app/"} />
              ) : (
                <InfoBoxPremiumContainer
                  infoPremiumSiteProps={infoPremiumSiteProps}
                >
                  <p
                    dir="rtl"
                    style={{
                      fontSize: "1.4rem",
                      padding: "1.5rem",
                    }}
                  >
                    אתר זה בעל עיצוב ברמה ובאיכות הגבוהה ביותר שייש, עם מגוון
                    רחב של אנימציות ותמונות. אתר זה כולל בתוכו תמונות רקע
                    באנימצייה שמתחלפות באופן אוטומטי בדף הבית, בנוסף קיימת גם
                    גלריית תמונות וניתנת האפשרות לעלות עד 20 תמונות לגלרייה,
                    בנוסף הרוכשים את האתר הפרימיום מקבלים ברקוד מתנה לגישה מהירה
                    לאתר.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "50%",
                      alignItems: "center",
                    }}
                  >
                    <Zoom delay={500}>
                      <AiFillStar color="#c9d000" size={30} />
                      <AiFillStar color="#c9d000" size={30} />
                      <AiFillStar color="#c9d000" size={30} />
                    </Zoom>
                  </div>
                </InfoBoxPremiumContainer>
              )}
              <div
                style={{
                  backgroundColor: "#253237",
                  marginTop: "-0.5rem",
                  height: "1rem",
                }}
              ></div>
              <ButtonIframe>
                <a
                  style={{
                    textDecoration: "none",
                    color: "aliceblue",
                  }}
                  href="https://clean3-quick-site.vercel.app/"
                  target="_blank"
                >
                  לכניסה לאתר
                </a>
              </ButtonIframe>
            </ContainerIframe>
          </Zoom>
          <Zoom>
            <ContainerIframe>
              <ButtonDetails onClick={handleClickStandardBox}>
                <TiInfoLarge />
              </ButtonDetails>

              <TitlePrice> ₪ 299 סטנדרט</TitlePrice>
              {infoStandardSite ? (
                <CustomIframe src="https://clean2-quick-site.vercel.app/" />
              ) : (
                <InfoBoxStandardContainer
                  infoStandardSiteProps={infoStandardSiteProps}
                >
                  <p
                    dir="rtl"
                    style={{
                      fontSize: "1.4rem",
                      padding: "1.5rem",
                    }}
                  >
                    אתר זה בעל עיצוב בסטנדרט גבוהה, עדכני, דינמי ואיכותי, הכולל
                    אנימציות, תמונות רקע מתחלפות בכל כניסה לאתר ומגוון רחב יותר
                    של תמונות. בנוסף קיימת גלריית תמונות וניתנת האפשרות לעלות עד
                    10 תמונות לבחירתכם במידה ולא תרצו את התמונות שאנו מציעים.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "30%",
                      alignItems: "center",
                    }}
                  >
                    <Zoom delay={500}>
                      <AiFillStar color="#c9d000" size={30} />
                      <AiFillStar color="#c9d000" size={30} />
                    </Zoom>
                  </div>
                </InfoBoxStandardContainer>
              )}

              <div
                style={{
                  backgroundColor: "#253237",
                  marginTop: "-0.7rem",
                  height: "1rem",
                }}
              ></div>
              <ButtonIframe>
                <a
                  style={{
                    textDecoration: "none",
                    color: "aliceblue",
                  }}
                  href="https://clean2-quick-site.vercel.app/"
                  target="_blank"
                >
                  לכניסה לאתר
                </a>
              </ButtonIframe>
            </ContainerIframe>
          </Zoom>
          <Zoom>
            <ContainerIframe>
              <ButtonDetails onClick={handleClickBasicBox}>
                <TiInfoLarge />
              </ButtonDetails>

              <TitlePrice> ₪ 199 בסיסי</TitlePrice>
              {infoBasicSite ? (
                <CustomIframe src="https://clean1-quick-site.vercel.app/" />
              ) : (
                <InfoBoxBasicContainer infoBasicSiteProps={infoBasicSiteProps}>
                  <p
                    dir="rtl"
                    style={{
                      fontSize: "1.4rem",
                      padding: "1.5rem",
                    }}
                  >
                    אתר זה בעל עיצוב ברמה בסיסית, עדכני יפה ואיכותי. בנוסף האתר
                    מגיע עם תמונות מתחלפות המותאמות לעסק שלכם. כל שנותר זה רק
                    להכניס את הפרטים והוא שלכם.
                  </p>
                  <Zoom delay={500}>
                    <AiFillStar color="#c9d000" size={30} />
                  </Zoom>
                </InfoBoxBasicContainer>
              )}

              <div
                style={{
                  backgroundColor: "#253237",
                  marginTop: "-0.5rem",
                  height: "1rem",
                }}
              ></div>
              <ButtonIframe>
                <a
                  style={{
                    textDecoration: "none",
                    color: "aliceblue",
                  }}
                  href="https://clean1-quick-site.vercel.app/"
                  target="_blank"
                >
                  לכניסה לאתר
                </a>
              </ButtonIframe>
            </ContainerIframe>
          </Zoom>
        </ContainerIframePage>
      </div>
    );
  }
};

export default Cleanliness;
