import React from 'react';
import {Text, View} from 'react-native';
import { CalculatorButton } from '../components/CalculatorButton';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>35,000.99</Text>
      <Text style={styles.result}>35,000.99</Text>

      <View style={styles.btnRow}>
        <CalculatorButton text="C" color="#9B9B9B"/>
        <CalculatorButton text="+/-" color="#9B9B9B"/>
        <CalculatorButton text="del" color="#9B9B9B"/>
        <CalculatorButton text="/" color="#FF9427"/>
      </View>

      <View style={styles.btnRow}>
        <CalculatorButton text="7"/>
        <CalculatorButton text="8"/>
        <CalculatorButton text="9"/>
        <CalculatorButton text="X" color="#FF9427"/>
      </View>

      <View style={styles.btnRow}>
        <CalculatorButton text="4"/>
        <CalculatorButton text="5"/>
        <CalculatorButton text="6"/>
        <CalculatorButton text="-" color="#FF9427"/>
      </View>

      <View style={styles.btnRow}>
        <CalculatorButton text="1"/>
        <CalculatorButton text="2"/>
        <CalculatorButton text="3"/>
        <CalculatorButton text="+" color="#FF9427"/>
      </View>

      <View style={styles.btnRow}>
        <CalculatorButton text="0" large/>
        <CalculatorButton text="."/>
        <CalculatorButton text="+" color="#FF9427"/>
      </View>
    </View>
  );
};
