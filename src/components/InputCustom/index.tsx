import React from 'react';
import {View, Text} from 'react-native';

export const InputCustom = ({text}: {text?: string}) => {
  return (
    <View>
      <Text>Ola eu sou</Text>
      {text && <Text>{text}</Text>}
    </View>
  );
};
