// == Import
import * as React from 'react';
import * as PropTypes from 'prop-types';
import './styles.scss';

// == Composant
type MyProps = {
  baseAmount: number;
  editAmountState: boolean;
  toggleBaseAmountState: Function;
  onChangeInputValue: Function;
};

function Header({
  baseAmount,
  editAmountState,
  toggleBaseAmountState,
  onChangeInputValue,
}: MyProps) {
  const handleBaseAmountClick = () => {
    toggleBaseAmountState(!editAmountState);
  };
  const handleBlur = () => {
    toggleBaseAmountState(!editAmountState);
  };
  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggleBaseAmountState(!editAmountState);
    }
  };
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = Math.abs(Number(event.currentTarget.value));
    onChangeInputValue(value);
  };
  let displayAmount = (
    <p className="header__baseamount" onClick={handleBaseAmountClick}>
      {baseAmount} Euro
    </p>
  );
  if (editAmountState) {
    displayAmount = (
      <p>
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          id="baseAmount"
          className="baseAmountInput"
          type="number"
          value={baseAmount}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyPress={handleEnter}
          min={0}
        />
        <span>Euro</span>
      </p>
    );
  }
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      {displayAmount}
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  editAmountState: PropTypes.bool.isRequired,
};
// == Export
export default Header;
