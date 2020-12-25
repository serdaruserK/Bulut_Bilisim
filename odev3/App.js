import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function Input({
  name
}) {
  return (
    <View style={{ padding: 5 }}>
      <Text>{name}</Text>
      <TextInput style={{
        borderWidth: 2,
        borderColor: "#d8d8d8",
        borderRadius: 15
      }}/>
    </View>    
  )
}

function App() {
  return (
    <View style={{ padding: 10 }}>
      <Input name="Ad" />
      <Input name="Soyad" />
      <Input name="E-posta adresi" />
      <Input name="Yaş" />
      <Input name="Şifre" />
      <Input name="Şifre tekrar" />
      <Button title="Kaydol"/>
    </View>
  )
}

export default App;