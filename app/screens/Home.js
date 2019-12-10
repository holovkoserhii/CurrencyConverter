import React from "react";
import PropTypes from "prop-types";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";

import { swapCurrency, changeCurrencyAmount } from "../actions/currencies";

const Home = ({
  baseCurrency,
  quoteCurrency,
  amount,
  conversionRate,
  lastConvertedDate,
  isFetching,
  primaryColor,
  navigation,
  dispatch,
}) => {
  let quotePrice = (amount * conversionRate).toFixed(2);
  if (isFetching) {
    quotePrice = "...";
  }

  const handleChangeText = amt => {
    dispatch(changeCurrencyAmount(amt));
  };

  const handlePressBaseCurrency = () => {
    navigation.navigate("CurrencyList", {
      title: "Base currency",
      type: "base",
    });
  };

  const handlePressQuoteCurrency = () => {
    navigation.navigate("CurrencyList", {
      title: "Quote currency",
      type: "quote",
    });
  };

  const handleSwapCurrency = () => {
    dispatch(swapCurrency());
  };

  const handleOptionsPress = () => {
    navigation.navigate("Options");
  };

  return (
    <Container backgroundColor={primaryColor}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header onPress={handleOptionsPress} />
      <KeyboardAvoidingView behavior="padding">
        <Logo tintColor={primaryColor} />
        <InputWithButton
          buttonText={baseCurrency}
          onPress={handlePressBaseCurrency}
          defaultValue={amount.toString()}
          keyboardType="numeric"
          onChangeText={handleChangeText}
          textColor={primaryColor}
        />
        <InputWithButton
          buttonText={quoteCurrency}
          onPress={handlePressQuoteCurrency}
          editable={false}
          value={quotePrice}
          textColor={primaryColor}
        />
        <LastConverted
          base={baseCurrency}
          quote={quoteCurrency}
          date={lastConvertedDate}
          conversionRate={conversionRate}
        />
        <ClearButton text="Reverse currencies" onPress={handleSwapCurrency} />
      </KeyboardAvoidingView>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  amount: PropTypes.number,
  conversionRate: PropTypes.number,
  isFetching: PropTypes.bool,
  lastConvertedDate: PropTypes.object,
  primaryColor: PropTypes.string,
};

const mapStateToProps = state => {
  const { baseCurrency } = state.currencies;
  const { quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(Home);
