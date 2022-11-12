import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  ReactElement,
} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {FlexAlign, FlexJustify} from './types/FlexTypes';

interface IRowProps {
  children?: ReactNode;
  gap?: number;
  style?: StyleProp<ViewStyle>;
  alignItems?: FlexAlign;
  justifyContent?: FlexJustify;
}

export const Row = ({
  children,
  alignItems = FlexAlign.center,
  justifyContent = FlexJustify.flexStart,
  gap,
  style,
}: IRowProps) => {
  const childrenArray = Children.toArray(children);

  return (
    <View style={[styles.row, {alignItems, justifyContent}, style]}>
      {childrenArray.map((children, index) => {
        if (isValidElement(children)) {
          return cloneElement(children as ReactElement, {
            style: {
              ...children.props.style,
              marginRight:
                index != childrenArray.length - 1 && !!gap ? gap / 2 : 0,
            },
          });
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
});
