import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 30,
    flex: 1,
    flexDirection: 'row'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 3
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 10,
    flex: 1,
    alignSelf: 'center'
  }
};

export { Input };
