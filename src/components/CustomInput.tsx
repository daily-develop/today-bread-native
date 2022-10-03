import React, { useCallback } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { Colors } from '@/constants/color';

import Conditional from '@/hocs/Conditional';

interface CustomInputProps {
  title?: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  props?: TextInputProps;
}

const CustomInput: React.FC<CustomInputProps> = ({
  title = undefined,
  text,
  setText,
  style,
  titleStyle,
  inputStyle,
  props,
}) => {
  const handleOnChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  return (
    <View style={[styles.container, style]}>
      <Conditional condition={title !== undefined}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Conditional>

      <TextInput
        style={[styles.input, inputStyle]}
        value={text}
        onChangeText={handleOnChangeText}
        selectionColor={Colors.primary}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.darkGray,
    marginBottom: 4,
  },
  input: {
    fontWeight: '500',
    fontSize: 14,
    color: Colors.black,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray,
  },
});

export default CustomInput;
