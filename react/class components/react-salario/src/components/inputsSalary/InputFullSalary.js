import React, { Component } from 'react'

export default class InputFullSalary extends Component {
    handleChangeSalary = (event) => {
        const newSalary = event.target.value;
        this.props.onChangeSalaryFilter(newSalary);
    }
    
    render() {
        const { salary } = this.props;
        return (
            <div className="col s12">
                <label>Salário Bruto:
                    <input type="number" value={salary} onChange={this.handleChangeSalary} />
                </label>
            </div>
        )
    }
}
