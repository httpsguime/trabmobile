// src/pages/Login/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './LoginStyles';

const LoginScreen = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Defina um login e senha pré-definidos
  const predefinedEmail = 'sla';
  const predefinedPassword = '123';

  const handleLogin = () => {
    if (email === predefinedEmail && password === predefinedPassword) {
      setIsLoggedIn(true); // Altera o estado para logado
    } else {
      alert('Login ou senha incorretos. Tente novamente.'); // Mensagem de erro
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;





