// src/pages/Map.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  // Lista de membros do motoclube com suas localizações
  const members = [
    { id: 1, name: "João", latitude: -23.5505, longitude: -46.6333, description: "Membro 1" }, // Exemplo: São Paulo
    { id: 2, name: "Maria", latitude: -22.9068, longitude: -43.1729, description: "Membro 2" }, // Exemplo: Rio de Janeiro
    { id: 3, name: "Carlos", latitude: -30.0346, longitude: -51.2177, description: "Membro 3" }, // Exemplo: Porto Alegre
    // Adicione mais membros conforme necessário
  ];

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setLoading(false);
    };

    getLocation();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Carregando mapa...</Text>
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title={"Você está aqui"}
          description={"Localização atual"}
        />
        {members.map(member => (
          <Marker
            key={member.id}
            coordinate={{ latitude: member.latitude, longitude: member.longitude }}
            title={member.name}
            description={member.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});

export default MapScreen;





