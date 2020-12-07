import './variables.css'
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Articles from './Components/Articles'
import SimpleSlider from './Components/Slider'
import Menu from './Components/Burger'
import Up from './Components/Up'

function App() {
  return (
      <div id="outer-container">
      <Menu />
      <main id="page-wrap">
        <Header />
        <About />
        <Articles />
        <SimpleSlider/>
        <Up/>
      </main>
      </div>
  );
}

export default App;
