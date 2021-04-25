import './App.css';
import Nav from './components/Nav'
import SplashScreen from './components/SplashScreen'

function App() {
  return (
    <div className="App">
      <div className="left-side"></div>
      <Nav />
      <SplashScreen />
      <div className="right-side"></div>
    </div>
  );
}

export default App;
