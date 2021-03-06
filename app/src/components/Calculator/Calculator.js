import React, { Component } from 'react';
import calculatorImg from './calculator.png';

class Calculator extends Component {
  constructor() {
    super()

    this.state = {
      header: "Calculator",
      display: "0",
      operator: "",
      temp: '0'
    }

    this.updateHeader = this.updateHeader.bind(this)
    this.setDisplay = this.setDisplay.bind(this)
    this.setOperator = this.setOperator.bind(this)
    this.calculate = this.calculate.bind(this)
    this.setResetDisplay = this.setResetDisplay.bind(this)
  }

  updateHeader(event) { this.setState({ header: event.target.value }) }

  setDisplay(num) {
    const display = this.state.display === '0' ? num : this.state.display + num;

    if (this.state.display.length < 13) this.setState({ display })
  }

  setOperator(operator) {
    this.setState({
      operator: operator,
      temp: parseInt(this.state.display, 10),
      display: '0'
    })
  }

  calculate() {
    if (this.state.operator === '') { return; }
    let result;

    switch (this.state.operator) {
      case '+':
        result = this.state.temp + parseInt(this.state.display, 10);
        break;
      case '-':
        result = this.state.temp - parseInt(this.state.display, 10);
        break;
      case '*':
        result = this.state.temp * parseInt(this.state.display, 10);
        break;
      case '/':
        result = this.state.temp / parseInt(this.state.display, 10);
        break;
      default:
        break;
    }
    this.setState({display: result});
  }

  setResetDisplay() { this.setState({ display: '0', temp: '0', operator: '' }) }

  render() {
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={this.updateHeader} />

        <h1 id="header"> {this.state.header} </h1>

        <img className="remove-highlight" src={calculatorImg} alt="calculator"/>

        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.display}</span>
          </div>

          <div className="btn clear" onClick={this.setResetDisplay} />

          <div className="btn zero"   onClick={ () => this.setDisplay('0')} />
          <div className="btn one"    onClick={ () => this.setDisplay('1')} />
          <div className="btn two"    onClick={ () => this.setDisplay('2')} />
          <div className="btn three"  onClick={ () => this.setDisplay('3')} />
          <div className="btn four"   onClick={ () => this.setDisplay('4')} />
          <div className="btn five"   onClick={ () => this.setDisplay('5')} />
          <div className="btn six"    onClick={ () => this.setDisplay('6')} />
          <div className="btn seven"  onClick={ () => this.setDisplay('7')} />
          <div className="btn eight"  onClick={ () => this.setDisplay('8')} />
          <div className="btn nine"   onClick={ () => this.setDisplay('9')} />


          <div className="btn equal" onClick={this.calculate} />
          <div className="btn multiply" onClick={ () => this.setOperator('*') } />
          <div className="btn divide" onClick={ () => this.setOperator('/') } />
          <div className="btn subtract" onClick={ () => this.setOperator('-') } />
          <div className="btn add" onClick={ () => this.setOperator('+') } />
        </div>
      </div>
    )
  }
}

export default Calculator;
