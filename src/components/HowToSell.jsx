import { Paper } from "@mui/material";
import { Slide } from "react-reveal";
import "../static/styles/components/how-to-sell.scss";

export default function HowToSell() {
  return (
    <div className="how_to_sell">
      <div className="content_wrap">
        <h3 className="heading_2 title">how to sell giftcard</h3>
        <p className="lead">
          Learn how to sell Giftcards on our app with our these steps.
        </p>
        <div className="how_to_wrap">
          <Slide bottom>
            <Paper className="box">
              <li>1. Sign up</li>
              <p className="lead">
                This first step is to sign up to create account or login if you
                already have an account.
              </p>
            </Paper>
          </Slide>

          <Slide bottom>
            <Paper className="box">
              <li>2. Select Giftcard to Trade</li>
              <p>Navigate to the Giftcard page and select giftcard.</p>
            </Paper>
          </Slide>

          <Slide bottom>
            <Paper className="box">
              <li>3. Select other Giftcard Info</li>
              <p className="lead">
                Select the Giftcard currency, type and the available Rate
                options and click on the Continue button to proceed.
              </p>
            </Paper>
          </Slide>

          <Slide bottom>
            <Paper className="box">
              <li>4. Upload Giftcard Images</li>
              <p>Upload Giftcard images to continue trade.</p>
            </Paper>
          </Slide>

          <Slide bottom>
            <Paper className="box">
              <li>5. Confirm Trade</li>
              <p className="lead">
                Confirm your trading information and click on the Sell Giftcard
                Button to process your trade.
              </p>
            </Paper>
          </Slide>
        </div>
      </div>
    </div>
  );
}
