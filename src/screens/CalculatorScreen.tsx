import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {CalculatorButton} from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {

  const {
    showNumberHist,
    showNumber,
    clear,
    toogleNumberSign,
    clearLast,
    btnOperation,
    buildNumber,
    calculate
  } = useCalculator()
  

  return (
    <View style={styles.calculatorContainer}>
      {showNumberHist !== "0" && (
        <Text style={styles.smallResult}>{showNumberHist}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {showNumber}
      </Text>
      <View style={styles.btnRow}>
        <CalculatorButton text="C" color="#9B9B9B" action={clear} />
        <CalculatorButton
          text="+/-"
          color="#9B9B9B"
          action={toogleNumberSign}
        />
        <CalculatorButton text="del" color="#9B9B9B" action={clearLast} />
        <CalculatorButton text="/" color="#FF9427" action={btnOperation} />
      </View>
      <View style={styles.btnRow}>
        <CalculatorButton text="7" action={buildNumber} />
        <CalculatorButton text="8" action={buildNumber} />
        <CalculatorButton text="9" action={buildNumber} />
        <CalculatorButton text="X" color="#FF9427" action={btnOperation} />
      </View>
      <View style={styles.btnRow}>
        <CalculatorButton text="4" action={buildNumber} />
        <CalculatorButton text="5" action={buildNumber} />
        <CalculatorButton text="6" action={buildNumber} />
        <CalculatorButton text="-" color="#FF9427" action={btnOperation} />
      </View>
      <View style={styles.btnRow}>
        <CalculatorButton text="1" action={buildNumber} />
        <CalculatorButton text="2" action={buildNumber} />
        <CalculatorButton text="3" action={buildNumber} />
        <CalculatorButton text="+" color="#FF9427" action={btnOperation} />
      </View>
      <View style={styles.btnRow}>
        <CalculatorButton text="0" action={buildNumber} large />
        <CalculatorButton text="." action={buildNumber} />
        <CalculatorButton text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
