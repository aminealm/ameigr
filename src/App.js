import './App.css';
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbar/NavbarMobile';
import Home from './components/Home/Home';
import About from './components/About/About';
import ScrollToTop from "react-scroll-to-top";
import Career from './components/Career/Career';




function App() {
  return (
    <div >
      <Navbar/>
      <NavbarMobile/>
      <Home/>
      <Career/>
      <About/>
    
      <ScrollToTop smooth
      className= 'scroll'
      color="white"
      height="20"
      width="20"
      style={{borderRadius:'50%',
      
      backgroundColor:'#6bc1e9',}}/>


    </div>
  );
}

export default App;
