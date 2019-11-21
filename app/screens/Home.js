import React from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";

export default () => {
  const TEMP_BASE_CURRENCY = "USD";
  const TEMP_QOUTE_CURRENCY = "GBP";
  const TEMP_BASE_PRICE = "100";
  const TEMP_QOUTE_PRICE = "79.74";
  const TEMP_CONVERSION_RATE = 0.7974;
  const TEMP_CONVERSION_DATE = new Date();

  const handleChangeText = () => {
    console.log("text changed");
  };

  const handlePressBaseCurrency = () => {
    console.log("press base currency");
  };

  const handlePressQuoteCurrency = () => {
    console.log("press quote currency");
  };

  const swapCurrency = () => {
    console.log("press swap");
  };

  const handleOptionsPress = () => {
    console.log('handle options change');
  };

  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header onPress={handleOptionsPress} />
      <KeyboardAvoidingView behavior="padding">
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={handleChangeText}
        />
        <InputWithButton
          buttonText={TEMP_QOUTE_CURRENCY}
          onPress={handlePressQuoteCurrency}
          editable={false}
          value={TEMP_QOUTE_PRICE}
        />
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QOUTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton text="Reverse currencies" onPress={swapCurrency} />
      </KeyboardAvoidingView>
    </Container>
  );
};
