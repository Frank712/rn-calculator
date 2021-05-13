import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {CalculatorButton} from '../components/CalculatorButton';
import {styles} from '../theme/appTheme';

enum Operations {
  addition,
  subtraction,
  multiply,
  divide,
}

export const CalculatorScreen = () => {
  const [showNumber, setShowNumber] = useState('250');
  const [showNumberHist, setShowNumberHist] = useState('150');
  const lastOperation = useRef<Operations>();

  const clear = () => {
    setShowNumber('0');
    setShowNumberHist('0');
  };

  const clearLast = () => {
    (showNumber.includes('-') && showNumber.length === 2) ||
    showNumber.length === 1
      ? setShowNumber('0')
      : setShowNumber(showNumber => showNumber.slice(0, -1));
  };

  const upNumber = () => {
    const num = showNumber.endsWith('.')
      ? showNumber.substring(0, showNumber.length - 1)
      : showNumber;
    setShowNumberHist(num);
    setShowNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    if (showNumber.includes('.') && textNumber === '.') return;

    if (showNumber.startsWith('0') || showNumber.startsWith('-0')) {
      if (textNumber === '.') {
        setShowNumber(showNumber + textNumber);
      } else if (textNumber === '0' && showNumber.includes('.')) {
        setShowNumber(showNumber + textNumber);
      } else if (textNumber !== '0' && !showNumber.includes('.')) {
        setShowNumber(textNumber);
      } else if (textNumber === '0' && !showNumber.includes('.')) {
        setShowNumber(showNumber);
      }
    } else {
      setShowNumber(showNumber + textNumber);
    }
  };

  const toogleNumberSign = () => {
    if (showNumber.includes('-')) {
      setShowNumber(showNumber.replace('-', ''));
    } else {
      setShowNumber('-' + showNumber);
    }
  };

  const btnOperation = (operator: string) => {
    switch (operator) {
      case '+':
        lastOperation.current = Operations.addition;
        break;
      case '-':
        lastOperation.current = Operations.subtraction;
        break;
      case 'X':
        lastOperation.current = Operations.multiply;
        break;
      case '/':
        lastOperation.current = Operations.divide;
        break;
      default:
        lastOperation.current = undefined;
    }
    upNumber();
  };

  const calculate = () => {
    const num1 = Number(showNumberHist)
    const num2 = Number(showNumber)

    switch(lastOperation.current) {
      case Operations.addition:
        setShowNumber(`${num1 + num2}`)
        break;
      case Operations.subtraction:
        setShowNumber(`${num1 - num2}`)
        break;
      case Operations.multiply:
        setShowNumber(`${num1 * num2}`)
        break;
      case Operations.divide:
        setShowNumber(`${num1 / num2}`)
        break;
      default:
        setShowNumber('0')
    }
    setShowNumberHist("0")
  }

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
