import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Navbar from './src/components/Navbar';
import Login from './src/pages/Login/Login';
import Map from './src/pages/Map/Map';
import Members from './src/pages/Members/Members';
import MemberDetails from './src/pages/Members/MemberDetails'; // Componente para detalhes do membro
import Profile from './src/pages/Profile/ProfileScreen'; // Adicione a importação da tela de perfil

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MembersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Members" 
        component={Members} 
        options={{ headerShown: false }} // Sem header nesta tela
      />
      <Stack.Screen 
        name="MemberDetails" 
        component={MemberDetails} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} /> // Mostra a tela de login se não estiver logado
      ) : (
        <Tab.Navigator tabBar={(props) => <Navbar {...props} />}>
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{ 
              headerShown: false,
              tabBarLabel: 'Perfil' // Nome personalizado para a aba de perfil
            }} 
          />
          <Tab.Screen 
            name="Map" 
            component={Map} 
            options={{ 
              headerShown: false,
              tabBarLabel: 'Mapa' // Nome personalizado para a aba de mapa
            }} 
          />
          <Tab.Screen 
            name="MembersStack" 
            component={MembersStack} 
            options={{ 
              headerShown: false,
              tabBarLabel: 'Membros' // Nome personalizado para a aba de membros
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}




