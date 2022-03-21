import { Container, Button } from "@mui/material";
import RubberBand from "react-reveal/RubberBand";
import { Link } from "react-router-dom";
import "../static/styles/components/info-section.scss";
import ButtonContained from "./utils/buttons/ButtonContained";

const InfoSection = ({
  title,
  subtitle,
  img,
  ctaText,
  ctaLink,
  className = "",
}) => {
  return (
    <Container className={`about_sect  ${className}`}>
      <div className="content_wrapper">
        <div className="text_cont box">
          <h1 className="heading_2">{title}</h1>
          <p className="lead">{subtitle}</p>
          <RubberBand>
            <Link style={{ textDecoration: "none" }} to="/giftcard">
              <ButtonContained ctaLink={ctaLink} ctaText={ctaText} />
            </Link>
          </RubberBand>
        </div>
        <div className="img_wrap box">
          <img src={img} alt={title} />
        </div>
      </div>
    </Container>
  );
};

export default InfoSection;
