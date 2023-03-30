import logo from './logo.svg';
import './App.css';
import MyHeader from './Components/Navigationbar/header';
import MyBody from './Components/main/mybody';
import MyFooter from './Components/footer/footer';
function App() {
  return (
    <div className="App">
      
      <MyHeader/>
      <MyBody/>
      <MyFooter/>


    </div>
  );
}

export default App;
