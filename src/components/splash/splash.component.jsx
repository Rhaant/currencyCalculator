import React from "react";

import Calculator from '../calculator/calculator.component'

import "./splash.styles.scss";

const Splash = () => (
  <div className="Splash">
    <div className="Wrapper">
      <div className="Left-side">
          <div className="Square">
            <div className="Background-square-one" />
            <div className="Background-square-two" />
            <div className="Data-square">
                <p>
                All data are based on European central bank and are constantly updated every day
                </p>
            </div>
          </div>
      </div>
      <div className="Right-side">
        <Calculator />
      </div>
    </div>
  </div>
);

export default Splash;
