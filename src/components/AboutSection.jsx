import { Typography, Container, Paper, Button } from "@mui/material";
import "../static/styles/components/about-section.scss";

const AboutSection = () => {
  return (
    <Container className="about_sect">
      <Paper elevation={6} className="content_wrapper">
        <div className="text_cont box">
          <Typography variant="h3" className="title">
            Enjoy Reliable Giftcard Trading
          </Typography>
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
      </Paper>
    </Container>
  );
};

export default AboutSection;
