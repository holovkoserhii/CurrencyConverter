import React from "react";
import { StatusBar } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";

export default () => {
  const swapCurrency = () => {
    console.log("press swap");
  };

  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <Logo />
      <InputWithButton
        buttonText="blah1"
        onPress={() => {
          console.log("pressed 1");
        }}
        defaultValue="99"
        keyboardType="numeric"
        onChangeText={() => {
          console.log("text changed");
        }}
      />
      <InputWithButton
        buttonText="blah2"
        onPress={() => {
          console.log("pressed 2");
        }}
        editable={false}
        value="77"
      />
      <ClearButton text="Reverse currencies" onPress={swapCurrency} />
    </Container>
  );
};
