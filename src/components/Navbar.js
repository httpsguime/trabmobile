import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Ícone específico para cada rota
        let iconName;
        if (route.name === 'Login') {
          iconName = isFocused ? 'log-in' : 'log-in-outline';
        } else if (route.name === 'Map') {
          iconName = isFocused ? 'map' : 'map-outline';
        } else if (route.name === 'Members') {
          iconName = isFocused ? 'people' : 'people-outline';
        } else if (route.name === 'Profile') { // Lógica para o ícone de perfil
          iconName = isFocused ? 'person' : 'person-outline';
        } else {
          iconName = 'help-circle-outline'; // Ícone padrão
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.button, isFocused && styles.focusedButton]}
            activeOpacity={0.7}
          >
            <Ionicons
              name={iconName}
              size={30} // Aumentar o tamanho do ícone se necessário
              color={isFocused ? '#FFD700' : '#888'}
              style={isFocused && styles.iconFocused}
            />
            <Text style={[styles.label, isFocused && styles.focusedLabel]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#444',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 6,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center', // Adicionando para centralizar verticalmente
    paddingHorizontal: 16,
  },
  focusedButton: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 22,
  },
  iconFocused: {
    transform: [{ scale: 1.15 }],
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  focusedLabel: {
    color: '#FFD700',
    fontWeight: '600',
    fontSize: 13,
  },
});




