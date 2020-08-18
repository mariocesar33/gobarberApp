import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputPrps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}
const Input: React.FC<InputPrps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput 
        keyboardAppearance="dark"
        placeholderTextColor="#666360" 
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;