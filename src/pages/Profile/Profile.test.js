// src/pages/Profile/Profile.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import Profile from './ProfileScreen';

describe('Profile Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Profile />);

    // Verifica se o título é renderizado
    expect(getByText('Perfil do Usuário')).toBeTruthy();

    // Verifica se as informações do usuário são renderizadas corretamente
    expect(getByText(/Nome Completo:/)).toBeTruthy();
    expect(getByText(/1234567890/)).toBeTruthy();
    expect(getByText(/30/)).toBeTruthy();
    expect(getByText(/Honda CB500F/)).toBeTruthy();
    expect(getByText(/São Paulo/)).toBeTruthy();
  });
});


