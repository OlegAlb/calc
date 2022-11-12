import {observer} from 'mobx-react-lite';
import React from 'react';
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {Button, ButtonType} from '../components/Button';
import {Col} from '../components/Col';
import {Input} from '../components/Input';
import {Row} from '../components/Row';
import {useRootStore} from '../hooks/useRootStore';
import {Operator} from '../modules/calc/types/CalcTypes';
import {Colors} from '../styles/Colors';

interface CalcScreenProps {}

const width = Dimensions.get('screen').width;

export const CalcScreen = observer(({}: CalcScreenProps) => {
  const {calcStore} = useRootStore();

  const handleClearPress = () => {
    calcStore.reset();
  };

  const handlePosnegPress = () => {
    calcStore.posneg();
  };

  const handlePercentagePress = () => {
    calcStore.percentage();
  };

  const handleNumberPress = (number: string) => {
    calcStore.setValue(number);
  };

  const handleOperatorPress = (operator: Operator) => {
    calcStore.setOperator(operator);
  };

  const handleCalcPress = () => {
    calcStore.calculate();
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View style={styles.container}>
        <Input
          onChangeText={() => {}}
          autoFocus
          showSoftInputOnFocus={false}
          value={calcStore.currentValue}
          style={styles.inputStyle}
          caretHidden
          containerStyle={styles.inputContainerStyle}
        />
        <Row gap={20}>
          <Col gap={20}>
            <Row gap={20}>
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="C"
                type={ButtonType.Secondary}
                onPress={handleClearPress}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="+/-"
                type={ButtonType.Secondary}
                onPress={handlePosnegPress}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="%"
                type={ButtonType.Secondary}
                onPress={handlePercentagePress}
              />
            </Row>
            <Row gap={20}>
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="7"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('7')}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="8"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('8')}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="9"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('9')}
              />
            </Row>
            <Row gap={20}>
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="4"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('4')}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="5"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('5')}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="6"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('6')}
              />
            </Row>
            <Row gap={20}>
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="1"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('1')}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="2"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('2')}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="3"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('3')}
              />
            </Row>
            <Row gap={20}>
              <Button
                textStyle={styles.buttonTitle}
                style={{...styles.buttonStyle, ...styles.buttonExtendedStyle}}
                title="0"
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('0')}
              />
              <Button
                textStyle={styles.buttonTitle}
                style={styles.buttonStyle}
                title="."
                type={ButtonType.Tertiary}
                onPress={() => handleNumberPress('.')}
              />
            </Row>
          </Col>
          <Col gap={20}>
            <Button
              textStyle={styles.buttonTitle}
              style={styles.buttonStyle}
              title="/"
              type={ButtonType.Primary}
              onPress={() => handleOperatorPress(Operator.devide)}
            />
            <Button
              textStyle={styles.buttonTitle}
              style={styles.buttonStyle}
              title="*"
              type={ButtonType.Primary}
              onPress={() => handleOperatorPress(Operator.multiply)}
            />
            <Button
              textStyle={styles.buttonTitle}
              style={styles.buttonStyle}
              title="-"
              type={ButtonType.Primary}
              onPress={() => handleOperatorPress(Operator.subtract)}
            />
            <Button
              textStyle={styles.buttonTitle}
              style={styles.buttonStyle}
              title="+"
              type={ButtonType.Primary}
              onPress={() => handleOperatorPress(Operator.add)}
            />
            <Button
              textStyle={styles.buttonTitle}
              style={styles.buttonStyle}
              title="="
              type={ButtonType.Primary}
              onPress={handleCalcPress}
            />
          </Col>
        </Row>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.black,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: Colors.black,
    textAlignVertical: 'bottom',
    textAlign: 'right',
    color: Colors.white,
    fontSize: 60,
  },
  inputContainerStyle: {
    flex: 1,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 40,
  },
  buttonStyle: {
    width: (width - 30) / 4 - 12,
    height: (width - 30) / 4 - 12,
    borderRadius: width / 8,
  },
  buttonExtendedStyle: {
    width: (width - 30) / 2 - 12,
  },
});
