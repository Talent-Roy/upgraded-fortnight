import { Container, Button } from "@mui/material";
import "../static/styles/components/about-section.scss";

const AboutSection = () => {
  return (
    <Container className="about_sect">
      <div className="content_wrapper">
        <div className="text_cont box">
          <h1 className="heading_2">Reliable Giftcard Trading</h1>
          <p className="lead">
            Buy and sell from over 20 countries around the world
          </p>
          <Button className="giftcard_btn">learn more</Button>
        </div>
        <div className="img_wrap box">
          <img
            src={require("../static/images/about.png")}
            alt="trade giftcards on kaapo"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
