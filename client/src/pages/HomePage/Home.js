import React from "react";
import ParticlesBg from "particles-bg";
import { TitleHome, TextHome, ContainerHome, ContentHomePage } from "./styles";
import { FaSitemap } from "react-icons/fa";
import { Zoom, Fade } from "react-reveal";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  return (
    <ContainerHome>
      <ParticlesBg type="circle" bg={true} />
      <ContentHomePage>
        <Fade top delay={300}>
          <TitleHome>
            Quick Site
            <br />
            <FaSitemap />
          </TitleHome>
        </Fade>

        <Zoom left delay={300} duration={1500}>
          <TextHome dir="rtl">
            שלום וברוכים הבאים ל Quick Site.
            <br />
            Quick Site הינה פלטפורה להקמת אתר לעסק שלכם במהירות ובאיכות הגובהה
            ביותר.
            <br />
            אנו מציעים מגוון רחב של אתרים בנויים ומעודכנים לפי הצורך של העסק
            שלכם,
            <br />
            כל מה שנותר לכם זה רק לבחור אתר ולהכניס את פרטי העסק.
          </TextHome>
        </Zoom>

        <Fade bottom delay={300}>
          <Link
            to="Sites"
            smooth={true}
            duration={700}
            style={{
              cursor: "pointer",
            }}
          >
            <a
              className="animated-button"
              style={{
                width: "10rem",
                margin: "auto",
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              מתחילים
            </a>
          </Link>
        </Fade>
      </ContentHomePage>
    </ContainerHome>
  );
};

export default Home;
