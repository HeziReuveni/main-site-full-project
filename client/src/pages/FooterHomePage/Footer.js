import React, { useState } from "react";
import {
  TitleFooter,
  RightBlockFooter,
  TitleRightBlockFooter,
  TextRightBlockFooter,
  ContainerIcons,
  ContainerFooter,
  ButtonIcons,
} from "../HomePage/styles";
import RubberBand from "react-reveal/RubberBand";
import { FaMedal } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { Zoom } from "react-reveal";
import WaveBorder from "../CleanlinessPage/WaveBorder";

const Footer = () => {
  const [messageMail, setMessageMail] = useState(false);

  const handleMessageMail = () => {
    setMessageMail(true);
    setTimeout(() => {
      setMessageMail(false);
    }, 5000);
  };

  return (
    <div>
      <div
        style={{
          background: "aliceblue",
          width: "100%",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TitleFooter>
          <RubberBand delay={500}>צרו איתנו קשר</RubberBand>
        </TitleFooter>
      </div>
      <WaveBorder lowerColor="#253237" upperColor="aliceblue" />
      <ContainerFooter>
        <Zoom>
          <RightBlockFooter>
            <TitleRightBlockFooter>קצת עלינו</TitleRightBlockFooter>
            <TextRightBlockFooter dir="rtl">
              את חברת Quick Site הקמנו במטרה לתת גישה קלה ונוחה להקמת אתר
              במהירות וביעלות. אנו מבינים לליבם של לקוחותינו ועושים את מירב
              המאמצים כדי לספק את השירות הטוב והאיכותי ביותר.
            </TextRightBlockFooter>
            <ContainerIcons>
              <FaMedal color="rgb(215, 193, 0)" fontSize="2.2rem" />
            </ContainerIcons>
          </RightBlockFooter>
        </Zoom>
        <Zoom>
          <RightBlockFooter>
            <TitleRightBlockFooter>?צריכים אותנו</TitleRightBlockFooter>
            <TextRightBlockFooter
              dir="rtl"
              style={{
                marginBottom: "-2rem",
              }}
            >
              רוצים אתר בעיצוב אישי? נתקלתם בבעיה באתר? תמיד ניתן ליצור איתנו
              קשר דרך הוואטסאפ, המייל או הפייסבוק. נעשה הכל כדי לענות בהקדם
              האפשרי ולתת לכם את המענה הטוב ביותר.
              <br />
              נשמח להיות בקשר.
            </TextRightBlockFooter>
            <div
              style={{
                height: "7vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {messageMail && (
                <Zoom>
                  <div
                    style={{
                      backgroundColor: "rgb(103, 103, 103, 0.2)",
                      width: "80%",
                      borderRadius: "0.5rem",
                      color: "aliceblue",
                      margin: "0 auto",
                      height: "5vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Hezireuveny93@gmail.com
                  </div>
                </Zoom>
              )}
            </div>
            <ContainerIcons>
              <ButtonIcons onClick={handleMessageMail}>
                <SiGmail color="rgb(220, 60, 60)" fontSize="1.5rem" />
              </ButtonIcons>
              <a href="https://api.whatsapp.com/send?phone=972507727731">
                <ButtonIcons>
                  <ImWhatsapp color="rgb(97, 227, 95)" fontSize="1.5rem" />
                </ButtonIcons>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100001644519835">
                <ButtonIcons>
                  <FaFacebook color="#3c7dff" fontSize="1.5rem" />
                </ButtonIcons>
              </a>
            </ContainerIcons>
          </RightBlockFooter>
        </Zoom>
        <Zoom>
          <RightBlockFooter>
            <TitleRightBlockFooter>נשמח להיות חברים</TitleRightBlockFooter>
            <TextRightBlockFooter
              dir="rtl"
              style={{
                marginBottom: "-2rem",
              }}
            >
              אנו דואגים תמיד לחדש ולעדכן את האתרים על מנת שיהיו בעיצוב החדיש
              והעדכני ביותר, ויותר מנשמח שתצטרפו אלינו לקהילה שנהיה חברים כדי
              שתמיד נוכל לעדכן אתכם בשינויים.
              <br />
              נשמח להיות בקשר.
            </TextRightBlockFooter>
            <div
              style={{
                height: "7vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
            <ContainerIcons>
              <ButtonIcons>
                <FiInstagram color="rgb(255, 119, 141)" fontSize="1.5rem" />
              </ButtonIcons>
              <a>
                <ButtonIcons>
                  <GrLinkedinOption color="#3c7dff" fontSize="1.5rem" />
                </ButtonIcons>
              </a>
              <a>
                <ButtonIcons>
                  <AiOutlineTwitter
                    color="rgb(111, 188, 255)"
                    fontSize="1.5rem"
                  />
                </ButtonIcons>
              </a>
            </ContainerIcons>
          </RightBlockFooter>
        </Zoom>
      </ContainerFooter>
    </div>
  );
};

export default Footer;
