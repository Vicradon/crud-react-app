import  React  from 'react';
import './App.css';
import InputBoxes from './components/InputBoxes'
import Header from './components/Header'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <InputBoxes />
      <Footer />
    </div>
  );
}

export default App;
