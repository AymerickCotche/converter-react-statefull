// == Import
import * as React from 'react';
import './styles.scss';
import Header from 'src/components/Header';
import currenciesData from 'src/data/currencies';
import Currencies from 'src/components/Currencies';
import Selected from 'src/components/Selected';
import * as _ from 'lodash';

// == Type
type CounterProps = {};

type CounterState = {
  baseAmount: number;
  currencyName: string;
  currencies: { name: string; rate: number }[];
  search: string;
  editAmountState: boolean;
};

// == Composant
export default class App extends React.Component<CounterProps, CounterState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      baseAmount: 1,
      currencyName: 'United States Dollar',
      currencies: currenciesData,
      search: '',
      editAmountState: false,
    };
  }

  componentDidMount() {
    this.changeTitle();
    document.addEventListener('keyup', (e) => {
      console.log(e);
    });
  }

  componentDidUpdate(prevProps: CounterProps, prevState: CounterState) {
    const { currencyName } = this.state;
    if (prevState.currencyName !== currencyName) {
      console.log('on change le titre');
      this.changeTitle();
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  changeTitle = () => {
    const { currencyName } = this.state;

    document.title = `Euro to ${currencyName}`;
  };

  setCurrency = (currencyName: string) => {
    this.setState({
      currencyName,
    });
  };

  setEditAmountState = (editAmountState: boolean) => {
    this.setState({
      editAmountState,
    });
  };

  setSearch = (search: string) => {
    this.setState({
      search,
    });
  };

  setBaseAmount = (baseAmount: number) => {
    this.setState({
      baseAmount,
    });
  };

  makeConversion = () => {
    const { baseAmount, currencyName, currencies } = this.state;
    const foundCurrency = currencies.find(
      (currency) => currencyName === currency.name,
    );
    return Number((baseAmount * foundCurrency.rate).toFixed(2));
  };

  render() {
    // eslint-disable-next-line object-curly-newline
    const { baseAmount, currencyName, currencies, search, editAmountState } =
      this.state;
    const value = this.makeConversion();
    const fc = currencies.filter(
      (item) => _.includes(item.name.toLowerCase(), search.toLowerCase()),
      // eslint-disable-next-line function-paren-newline
    );

    const sorted = _.sortBy(fc, 'name');

    return (
      <div className="app">
        <Header
          baseAmount={baseAmount}
          editAmountState={editAmountState}
          toggleBaseAmountState={this.setEditAmountState}
          onChangeInputValue={this.setBaseAmount}
        />
        <Currencies
          currencies={sorted}
          onCurrencyClick={this.setCurrency}
          inputValue={search}
          onChangeInputValue={this.setSearch}
        />
        <Selected value={value} currency={currencyName} />
      </div>
    );
  }
}
