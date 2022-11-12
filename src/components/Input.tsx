import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import {Colors} from '../styles/Colors';

interface IInputProps extends TextInputProps {
  onChangeText: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input = (props: IInputProps) => {
  const hadnleChangeText = (value: string) => {
    props.onChangeText(value);
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View
        style={styles.content}
        pointerEvents={props.editable === false ? 'none' : 'auto'}>
        <TextInput
          {...props}
          onChangeText={hadnleChangeText}
          style={[styles.input, props.style]}
          placeholder={''}
          selectionColor={Colors.cursor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.gray600,
    height: 56,
    position: 'relative',
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden',
    borderRadius: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    margin: 0,
    paddingVertical: 12,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },
});
