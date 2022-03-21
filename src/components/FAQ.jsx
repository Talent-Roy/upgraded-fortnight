import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../static/styles/components/faq.scss";
import { Slide } from "react-reveal";

export default function FAQ() {
  return (
    <div className="faq_cont">
      <div className="img_cont">
        <h2 className="heading_2 title">faq</h2>
        <div className="lead">
          Here are some of the questions our customers frequently ask and we
          answered these questions here:
        </div>
        <img src={require("../static/images/faq.png")} alt="" />
      </div>
      <div className="text_cont">
        <Slide bottom>
          <Accordion className="box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="question">
                What Giftcard Has The Highest Rate At The Moment?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="answer">
                Giftcard values and rates vary from time to time depending on
                several factors. So the giftcard that has the best rate at this
                moment might be different in the next hour.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Slide>

        <Slide bottom>
          <Accordion className="box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="question">
                What Is The Difference Between E-code, Physical Cards And
                Printable Vouchers?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="answer">
                Physical gift cards are actual physical (plastic) cards that are
                purchased directly from a physical store. Physical gift cards
                are the safest and will fetch you the best money return. E-codes
                are digital gift card codes purchased online and mostly sent to
                the buyer’s email address. Ecodes are not as safe as physical
                gift cards, thereby the money value is always lower.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Slide>

        <Slide bottom>
          <Accordion className="box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="question">
                How Long Does A Giftcard Transaction Take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="answer">
                Giftcard transactions typically take a few minutes. However,
                some giftcards like Apple Store, Walmart, Nordstrom e.t.c can
                take more time than others. Average time will always be stated
                in trade terms but be rest assured we attend to all transactions
                as quick as possible.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Slide>

        <Slide bottom>
          <Accordion className="box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="question">
                How do I purchase data?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="answer">
                Click on the buy data option on your dashboard. You will be
                redirected to our utility form page where you will be required
                to put in a recipient's phone number that will received the data
                and pay with your account Naira wallet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Slide>

        <Slide bottom>
          <Accordion className="box">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="question">
                How do I pay utility bills
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                similique ullam earum, impedit sunt ad esse laudantium
                recusandae, laboriosam molestiae est repellendus at commodi nisi
                odit asperiores amet odio delectus.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Slide>
      </div>
    </div>
  );
}
