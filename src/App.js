import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component from './Component';
import Component2 from './Component2';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <h1>hello</h1> 
      <Header/>
      <Component1/>
      <Component/>
      <Component2/>
      <Footer/>
    </div>
  );
}

export default App;
