import './variables.css'
import './App.css';
import Header from './Components/Header'
import SimpleSlider from './Components/Slider'
import Menu from './Components/Burger'
import Up from './Components/Up'
import About from './Components/About'
import Contacts from './Components/Сontacts'

function App() {
  return (
      <div id="outer-container">
      <Menu />
      <main id="page-wrap">
        <Header />
        <SimpleSlider />
        <About />
        <Contacts />
        <Up/>
      </main>
      </div>
  );
}

export default App;
