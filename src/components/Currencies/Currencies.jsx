import React, { Component } from 'react';
import getCurrencies from '../../servise/apiCurrencies';
import styles from './Currencies.module.css';

class Currencies extends Component {
  state = {
    course: [],
    error: null,
  };

  componentDidMount() {
    getCurrencies()
      .then(data => {
        return this.setState({ course: [...data] });
      })
      .catch(error => {
        return this.setState({ error });
      });
  }
  render() {
    return (
      <div className={styles.box}>
        <p className={styles.title}>Курсы валют</p>
        <table>
          <thead>
            <th>Валюта</th>
            <th>Покупка</th>
            <th>Продажа</th>
          </thead>
          <tbody>
            {this.state.course.map(item => {
              return (
                <tr>
                  <td>
                    {item.base_ccy}/{item.ccy}
                  </td>
                  <td>{item.buy.slice(0, 5)}</td>
                  <td>{item.sale.slice(0, 5)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Currencies;
