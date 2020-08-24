import React, { Component } from 'react';
import { formatValue, formatValuePercent } from '../../helpers/formatSalary';

export default class InputReadOnly extends Component {
    render() {
        const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = this.props;

        return (
            <div className="row">
                <div className="col s3">
                    <label>Base INSS:
                        <input type="text" readOnly value={formatValue(baseINSS)} />
                    </label>

                </div>
                <div className="col s3">
                    <label>Desconto INSS:
                        <input type="text" readOnly value={`${formatValue(discountINSS)} (${formatValuePercent(discountINSS * 0.1)}%)`} />
                    </label>
                </div>
                <div className="col s3">
                    <label>Base IRPF:
                        <input type="text" readOnly value={formatValue(baseIRPF)} />
                    </label>
                </div>
                <div className="col s3">
                    <label>Desconto IRPF:
                        <input type="text" readOnly value={`${formatValue(discountIRPF)} (${discountIRPF * 0.1}%)`} />
                    </label>
                </div>
                <div className="col s3">
                    <label>Salário Líquido:
                        <input type="text" readOnly value={`${formatValue(netSalary)} (${formatValuePercent(netSalary * 0.1)}%)`} />
                    </label>
                </div>
            </div>
        )
    }
}
