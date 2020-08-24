import React, { Component } from 'react';
import InputFullSalary from './components/inputsSalary/InputFullSalary';
import InputReadOnly from './components/inputsSalary/InputReadOnly';
import { calculateSalaryFrom } from './helpers/salary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: '',
      grossSalary: '',
      baseINSS: '',
      discountINSS: '',
      baseIRPF: '',
      discountIRPF: '',
      netSalary: ''
    }
  }

  handleChangeGrossSalary = (newSalary) => {
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculateSalaryFrom(newSalary
    );
    this.setState({
      grossSalary: newSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary
    })
  }

  render() {
    const { grossSalary, baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = this.state;

    return (
      <div className="container">
        <h1>React Salário</h1>
        <div className="row">
          <InputFullSalary salary={grossSalary} onChangeSalaryFilter={this.handleChangeGrossSalary} />
          <InputReadOnly salary={grossSalary} baseINSS={baseINSS} discountINSS={discountINSS} 
          baseIRPF={baseIRPF} discountIRPF={discountIRPF} netSalary={netSalary} />
        </div>
      </div>
    );
  }
}
