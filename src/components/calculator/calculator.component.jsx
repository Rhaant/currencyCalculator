import React from "react";

import { currencies } from "../../data/currencies";

import "./calculator.styles.scss";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      baseCurrency: "PLN",
      currencyToCalculate: "EUR",
      amount: 0,
      calculatedAmount: 0,
      visibleOptions: false,
      visibleResults: false,
      currencies: currencies,
    };
  }

  renderSelectCurrencies = () => {
    const { currencies } = this.state;

    return currencies.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ));
  };

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { baseCurrency, currencyToCalculate, amount } = this.state;

      const ratio = await fetch(
        `https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${currencyToCalculate}`
      )
        .then((rawResponse) => rawResponse.json())
        .then((response) => response.rates[currencyToCalculate]);

      const amountToRender = amount * ratio;

      this.setState({
        calculatedAmount: amountToRender.toFixed(2),
        visibleResults: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { visibleResults } = this.state;
    return (
      <div className="calculator">
        <h4>Enter amount </h4>
        <div className="input">
          <input
            name="amount"
            type="number"
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="currency-select">
          <label> From</label>
          <select
            defaultValue={this.state.baseCurrency}
            name="baseCurrency"
            id="from-currency"
            onChange={this.handleChange}
          >
            {this.renderSelectCurrencies()}
          </select>
          <label> To</label>
          <select
            defaultValue={this.state.currencyToCalculate}
            name="currencyToCalculate"
            id="to-currency"
            onChange={this.handleChange}
          >
            {this.renderSelectCurrencies()}
          </select>
          <button onClick={this.handleSubmit}>Calculate</button>
        </div>
        <div className={`result ${visibleResults ? "resultShown" : ""}`}>
          <span>
            {this.state.calculatedAmount} {this.state.currencyToCalculate}
          </span>
        </div>
      </div>
    );
  }
}

export default Calculator;
