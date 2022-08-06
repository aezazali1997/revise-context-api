import logo from './logo.svg';
import './App.css';
import {ThemeContext} from './context/ThemeContext'
import {Header} from './components/Header'
function App() {
  const theme = 'light';
  return (
    <ThemeContext.Provider value={theme}>
    <div className="App">
    <Header>
    </Header>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
