import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Term from './component/T&C/Term';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Header/>
      </header>
      <footer>
        <Footer/>
        <Term/>
      </footer>
    </div>
  );
}

export default App;
