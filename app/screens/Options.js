import React from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const Options = () => {
  const ICON_PREFIX = Platform.OS === 'ios' ? "ios" : 'md';
  const ICON_COLOR = '#868686';
  const ICON_SIZE = 23;

  const handleThemesPress = () => console.log('Themes row pressed');
  const handleSitePress = () => console.log('Site row pressed');

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Themes"
        onPress={handleThemesPress}
        customIcon={
          <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
        }
      />
      <Separator />
      <ListItem
        text="Fixer.io"
        onPress={handleSitePress}
        customIcon={
          <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
        }
      />
      <Separator />
    </ScrollView>
  );
};

export default Options;
