import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SectionFirst from './components/SectionFirst/SectionFirst';
import SectionFourth from './components/SectionFourth/SectionFourth';
import SectionSecond from './components/SectionSecond/SectionSecond';
import SectionThird from './components/SectionThird/SectionThird';
import './styles/App.css';
import './styles/Media.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionFirst/>
      <SectionSecond/>
      <SectionThird/>
      <SectionFourth/>
      <Footer/>
    </div>
  );
}

export default App;
