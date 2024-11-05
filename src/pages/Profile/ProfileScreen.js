// src/pages/Profile/Profile.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
  // Informações do usuário (substitua pelos dados reais)
  const user = {
    name: 'Marcio de Souza',
    document: '1234567890',
    age: 30,
    motorcycle: 'Honda CB500F',
    city: 'São Paulo',
    photo: 'https://via.placeholder.com/150', // URL da foto do usuário
  };

  return (
    <View style={styles.container}>
      {/* Imagem do usuário */}
      <Image 
        source={{ uri: user.photo }} // Imagem do usuário
        style={styles.image}
      />
      <Text style={styles.title}>Perfil do Usuário</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Nome Completo: <Text style={styles.infoValue}>{user.name}</Text></Text>
        <Text style={styles.info}>Documento: <Text style={styles.infoValue}>{user.document}</Text></Text>
        <Text style={styles.info}>Idade: <Text style={styles.infoValue}>{user.age}</Text></Text>
        <Text style={styles.info}>Moto: <Text style={styles.infoValue}>{user.motorcycle}</Text></Text>
        <Text style={styles.info}>Cidade: <Text style={styles.infoValue}>{user.city}</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 20,
    paddingTop: 40,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Círculo
    marginBottom: 20,
    borderColor: '#FFD700',
    borderWidth: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5, // Sombra para Android
  },
  title: {
    fontSize: 32,
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400, // Limita a largura do contêiner
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5, // Sombra para Android
  },
  info: {
    fontSize: 18,
    color: '#ddd',
    marginVertical: 8,
  },
  infoValue: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});

export default Profile;



