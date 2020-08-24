import React, { Component } from 'react'
import { formatNumer } from '../../helpers/formatHelpers';
import css from './header.module.css';

export default class Header extends Component {
    handleInputChange = (event) => {
        const newText = event.target.value;

        this.props.onChangeFilter(newText);
    }

    render() {
        const { filter, countryCount, totalPopulation } = this.props;

        return (
            <div className={css.flexRow}>
                <input type="text" value={filter} placeholder='Digite o país desejado' onChange={this.handleInputChange} />
                | <span className={css.countries}>Países: <strong>{countryCount}</strong></span> 
                | <span className={css.population}>População: <strong>{formatNumer(totalPopulation)}</strong></span>
            </div>
        )
    }
}
