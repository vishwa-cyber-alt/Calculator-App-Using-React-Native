import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const AddNumbers = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(`${number1}+${number2}=${sum}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter first number"
        onChangeText={text => setNumber1(text)}
        value={number1}
        keyboardType="numeric"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter second number"
        onChangeText={text => setNumber2(text)}
        value={number2}
        keyboardType="numeric"
      />
      <Button title="Add Numbers" onPress={handleAddition} />
      <Text style={{ marginTop: 10 }}>{result}</Text>
    </View>
  );
};

export default AddNumbers;
