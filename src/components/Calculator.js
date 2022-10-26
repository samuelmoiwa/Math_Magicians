/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
import '../style.css';
import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator_div">
        <div class="calculator_main_container">

          <div class="answer">
            <h2 class="_answer">0</h2>
          </div>

          <div class="colum_1">
            <h3 class="ac">AC</h3>
            <h3 class="add_sub">+/-</h3>
            <h3 class="percentage">%</h3>
            <h3 class="division">÷</h3>
          </div>

          <div class="colum_2">
            <h3 class="_7">7</h3>
            <h3 class="_8">8</h3>
            <h3 class="_9">9</h3>
            <h3 class="_x">X</h3>
          </div>

          <div class="colum_3">
            <h3 class="_4">4</h3>
            <h3 class="_5">5</h3>
            <h3 class="_6">6</h3>
            <h3 class="subtraction">-</h3>
          </div>

          <div class="colum_4">
            <h3 class="_1">1</h3>
            <h3 class="_2">2</h3>
            <h3 class="_3">3</h3>
            <h3 class="addition">+</h3>
          </div>

          <div class="colum_5">
            <h3 class="_0">0</h3>
            <h3 class="dot">.</h3>
            <h3 class="equal">=</h3>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
