import { useRef, useState } from "react";

enum Operations {
  addition,
  subtraction,
  multiply,
  divide,
}

export const useCalculator = () => {

  const [showNumber, setShowNumber] = useState('0');
  const [showNumberHist, setShowNumberHist] = useState('0');
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

  return {
    showNumberHist,
    showNumber,
    clear,
    toogleNumberSign,
    clearLast,
    btnOperation,
    buildNumber,
    calculate
  }
}
