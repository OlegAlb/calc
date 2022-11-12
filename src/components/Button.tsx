import React, {useMemo} from 'react';
import {
  ViewStyle,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
  Text,
  TextStyle,
  StyleProp,
} from 'react-native';

import {Colors} from '../styles/Colors';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

interface IButtonProps extends TouchableOpacityProps {
  title?: string;
  type?: ButtonType;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const Button = (props: IButtonProps) => {
  const {title, style, textStyle, disabled, type = ButtonType.Primary} = props;

  const color = useMemo(() => {
    switch (type) {
      case ButtonType.Primary:
        return textStyle?.color || Colors.white;

      case ButtonType.Secondary:
        return textStyle?.color || Colors.black;

      case ButtonType.Tertiary:
        return textStyle?.color || Colors.white;
    }
  }, [type, textStyle]);

  const buttonStyles = useMemo(() => {
    return [styles.default, styles[type], style];
  }, [style, type]);

  const renderText = () => {
    return <Text style={[textStyle, {color}]}>{title}</Text>;
  };

  return (
    <TouchableOpacity
      onPress={disabled ? undefined : props.onPress}
      activeOpacity={disabled ? 1 : props.activeOpacity}>
      <View style={[buttonStyles, disabled && styles.disabled]}>
        {renderText()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  extended: {
    flexGrow: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  [ButtonType.Primary]: {
    backgroundColor: Colors.orange,
  },
  [ButtonType.Secondary]: {
    backgroundColor: Colors.lightGrey,
  },
  [ButtonType.Tertiary]: {
    backgroundColor: Colors.darkGrey,
  },
});
