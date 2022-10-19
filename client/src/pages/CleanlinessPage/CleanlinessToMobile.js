import React from "react";
import { Fade, Zoom } from "react-reveal";
import { BsChevronCompactDown } from "react-icons/bs";
import WaveBorder from "./WaveBorder";
import {
  TitlePage,
  ContainerIframePage,
  ContainerIframe,
  TitlePrice,
  CardToMobile,
  ButtonIframe,
} from "./styles";
import { AiFillStar } from "react-icons/ai";

const CleanlinessToMobile = () => {
  const url = (wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/stars.svg${
      wrap ? ")" : ""
    }`;
  return (
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

      <WaveBorder upperColor="#253237" lowerColor="#87BCDE" />

      <ContainerIframePage>
        <ContainerIframe>
          <Zoom right>
            <div>
              <TitlePrice>
                <p
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  ₪ 399
                </p>
                פרימיום
              </TitlePrice>

              <CardToMobile>
                <div
                  dir="rtl"
                  style={{
                    padding: "1rem",
                  }}
                >
                  אתר זה בעל עיצוב ברמה ובאיכות הגבוהה ביותר שייש, עם מגוון רחב
                  של אנימציות ותמונות. אתר זה כולל בתוכו תמונות רקע באנימצייה
                  שמתחלפות באופן אוטומטי בדף הבית, בנוסף קיימת גם גלריית תמונות
                  וניתנת האפשרות לעלות עד 20 תמונות לגלרייה, בנוסף הרוכשים את
                  האתר הפרימיום מקבלים ברקוד מתנה לגישה מהירה לאתר.
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <AiFillStar color="#c9d000" /> <AiFillStar color="#c9d000" />{" "}
                  <AiFillStar color="#c9d000" />
                </div>
              </CardToMobile>

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
            </div>
          </Zoom>
        </ContainerIframe>
        <ContainerIframe>
          <Zoom left delay={500}>
            <div>
              <TitlePrice>
                <p
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  ₪ 299
                </p>
                סטנדרט
              </TitlePrice>
              <CardToMobile>
                <div
                  dir="rtl"
                  style={{
                    padding: "1rem",
                  }}
                >
                  אתר זה בעל עיצוב בסטנדרט גבוהה, עדכני, דינמי ואיכותי, הכולל
                  אנימציות, תמונות רקע מתחלפות בכל כניסה לאתר ומגוון רחב יותר של
                  תמונות. בנוסף קיימת גלריית תמונות וניתנת האפשרות לעלות עד 10
                  תמונות לבחירתכם במידה ולא תרצו את התמונות שאנו מציעים.
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "30%",
                    alignItems: "center",
                  }}
                >
                  <AiFillStar color="#c9d000" /> <AiFillStar color="#c9d000" />
                </div>
              </CardToMobile>

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
            </div>
          </Zoom>
        </ContainerIframe>
        <ContainerIframe>
          <Zoom right>
            <div>
              <TitlePrice>
                <p
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  ₪ 199
                </p>
                בסיסי
              </TitlePrice>

              <CardToMobile>
                <div
                  dir="rtl"
                  style={{
                    padding: "1rem",
                  }}
                >
                  אתר זה בעל עיצוב ברמה בסיסית, עדכני יפה ואיכותי. בנוסף האתר
                  מגיע עם תמונות מתחלפות המותאמות לעסק שלכם. כל שנותר זה רק
                  להכניס את הפרטים והוא שלכם.
                </div>
                <AiFillStar color="#c9d000" />
              </CardToMobile>

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
            </div>
          </Zoom>
        </ContainerIframe>
      </ContainerIframePage>
    </div>
  );
};

export default CleanlinessToMobile;
