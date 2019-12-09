import React from 'react';
import { ScrollView, StatusBar, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from "../components/List";

const Themes = () => {
  const handleThemePress = color => console.log(color);

  const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
  });

  const rows = [
    { name: "Blue", color: styles.$blue },
    { name: "Orange", color: styles.$orange },
    { name: "Green", color: styles.$green },
    { name: "Purple", color: styles.$purple },
  ];

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <FlatList
        data={rows}
        renderItem={
          ({ item: { name, color } }) => (
            <ListItem
              text={name}
              selected
              onPress={() => handleThemePress(color)}
              checkmark={false}
              iconBackground={color}
            />
          )
        }
        keyExtractor={item => item.name}
        ItemSeparatorComponent={Separator}
      />
    </ScrollView>
  );
};

export default Themes;
