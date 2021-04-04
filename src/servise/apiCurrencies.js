import axios from 'axios';

const getCurrencies = () => {
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(resp => resp.data);
};

export default getCurrencies;
