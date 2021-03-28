import React from 'react';
import logo from './assets/logo.png';
import {AppContainer, ImageContainer} from './App.styles.js';
import Audio from './api/audio.api';

export const App = () => {
  return (
    <AppContainer>
      <ImageContainer src={logo} alt="logo" />
      <Audio/>
    </AppContainer>
  );
}

export default App;
