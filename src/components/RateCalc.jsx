import React from "react";
import axios from "axios";
import "../static/styles/components/rate_calc.scss";

export default function RateCalc() {
  const [giftCards, setGiftCards] = React.useState([]);
  const [currency, setCurrency] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState([]);
  const [cardType, setCardType] = React.useState([]);
  const [currSelected, setCurrSelected] = React.useState([]);
  const cardNameRef = React.useRef();
  const currTypeRef = React.useRef();

  const getProfiles = async () => {
    try {
      const cards = await axios.get("data/rates.json");
      setGiftCards(cards.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectChanged = ({ target: { value } }) => {
    setSelectedCard(cardNameRef.current.value);

    setCurrency(giftCards.find((x) => x.name === value));
    console.log(giftCards);
  };

  const targetChanged = ({ target: { value } }) => {
    setCurrSelected(currTypeRef.current.value);
    console.log(currSelected);
  };

  React.useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className="calc_cont">
      <h3 className="heading_2 title">Giftcard Rate Calculator</h3>
      <p className="lead">
        Please note that these rates may be subject to change.
      </p>
      <form action="">
        <div className="calc_inp_wrap">
          <div className="inp_box">
            {/* giftcards available */}
            <select
              onChange={selectChanged}
              name="cardToSell"
              id="cardToSell"
              ref={cardNameRef}
            >
              <option value="Select">...Select...</option>
              {giftCards.map((x) => {
                return (
                  <option key={x.name} value={x.name}>
                    {x.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* exchange currency type */}

          <div className="inp_box">
            <select
              name="exgCurr"
              id="exgCurr"
              onChange={targetChanged}
              ref={currTypeRef}
            >
              <option selected disabled>
                Currency type
              </option>
              {currency.length !== 0 &&
                [currency].map((x) =>
                  [Object.values(x)[2]].map((y) => {
                    // console.log(Object.keys(y));
                    return Object.keys(y).map((z) => (
                      <option key={z}>{z}</option>
                    ));
                  })
                )}
            </select>
          </div>

          {/* card type */}

          <div className="inp_box">
            <select name="cardType" id="cardType">
              <option value="Select">Select</option>
              {cardType.length !== 0 &&
                [cardType.rate].map((x) =>
                  Object.values(x).map((y) => {
                    return Object.keys(y).map((z) => (
                      <option key={z}>{z}</option>
                    ));
                  })
                )}
            </select>
          </div>

          {/* amount */}

          <div className="inp_box">
            <select name="amount" id="amount">
              <option value="Select">Select</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
          </div>
        </div>
        <div className="calc_result">
          <div className="result heading_2">
            <h4> 0 NGN</h4>
          </div>
        </div>
        <button>Exchange now</button>
      </form>
    </div>
  );
}
