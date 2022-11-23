import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Wallet from './components/Wallet';
import SectionNft from './components/SectionNft';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Wallet />
      <SectionNft />
      <Footer />
    </div>
  );
}

export default App;
