// == Import
import * as React from 'react';
import * as PropTypes from 'prop-types';
import './styles.scss';

// == Composant

interface Props {
  value: number;
  currency: string;
}
function Selected({ value, currency }: Props) {
  return (
    <footer className="selected">
      <p className="selected__value">{value}</p>
      <p className="selected__currency">{currency}</p>
    </footer>
  );
}

Selected.propTypes = {
  value: PropTypes.number,
  currency: PropTypes.string,
};

Selected.defaultProps = {
  value: 0.0,
  currency: 'Select a currency',
};
// == Export
export default Selected;
