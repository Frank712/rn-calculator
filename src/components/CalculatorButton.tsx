import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  color?: string;
  large?: boolean;
}

export const CalculatorButton = ({
  text,
  color = '#2D2D2D',
  large = false,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.btn,
          backgroundColor: color,
          width: large ? 180 : 80,
          alignItems: large ? 'flex-start' : 'center',
          paddingHorizontal: large ? 35 : 0,
        }}>
        <Text
          style={{
            ...styles.btnText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  btnText: {
    fontSize: 35,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },
});
