import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundMain: {
    flex: 1,
    backgroundColor: 'black'
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end'
  },
  result: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
    marginBottom: 7,
    paddingHorizontal: 10
  },
  smallResult: {
    fontSize: 30,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
    paddingHorizontal: 12
  },
  btnRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 18,
    paddingHorizontal: 10
  }
});
