import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  ReactElement,
} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {FlexAlign, FlexJustify} from './types/FlexTypes';

interface IColProps {
  children?: ReactNode;
  gap?: number;
  style?: StyleProp<ViewStyle>;
  alignItems?: FlexAlign;
  justifyContent?: FlexJustify;
}

export const Col = ({
  children,
  alignItems = FlexAlign.center,
  justifyContent = FlexJustify.flexStart,
  gap,
  style,
}: IColProps) => {
  const childrenArray = Children.toArray(children);

  return (
    <View style={[styles.col, {alignItems, justifyContent}, style]}>
      {childrenArray.map((children, index) => {
        if (isValidElement(children)) {
          return cloneElement(children as ReactElement, {
            style: {
              ...children.props.style,
              marginBottom:
                index != childrenArray.length - 1 && !!gap ? gap / 2 : 0,
            },
          });
        }
        return 0;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
});
