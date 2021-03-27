import logo from './assets/logo.png';
import {AppContainer, ImageContainer} from './App.styles.js';

export const App = () => {
  return (
    <AppContainer>
      <ImageContainer src={logo} className="App-logo" alt="logo" />
    </AppContainer>
  );
}

export default App;
