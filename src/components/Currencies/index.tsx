// == Import
import * as React from 'react';
import * as PropTypes from 'prop-types';
import './styles.scss';

type MyProps = {
  currencies: { name: string; rate: number }[];
  onCurrencyClick: Function;
  inputValue: string;
  onChangeInputValue: any;
};

function Currencies({
  currencies,
  onCurrencyClick,
  inputValue,
  onChangeInputValue,
}: MyProps) {
  const handleCurrencyClick = (event: React.SyntheticEvent) => {
    onCurrencyClick(event.currentTarget.textContent);
  };
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChangeInputValue(event.currentTarget.value);
  };
  const jsxCurrencies = currencies.map(({ name }) => (
    <li
      className="currencies__list__item"
      key={name}
      onClick={handleCurrencyClick}
    >
      {name}
    </li>
  ));
  return (
    <div className="currencies">
      <input
        type="text"
        className="currencies__input"
        placeholder="Rechercher une devise"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul className="currencies__list">{jsxCurrencies}</ul>
    </div>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rate: PropTypes.number,
    }),
  ).isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};

// == Export
export default Currencies;
