import './variables.css'
import './App.css';
import Header from './Components/Header'
import SimpleSlider from './Components/Slider'
import Menu from './Components/Burger'
import Up from './Components/Up'
import About from './Components/About'
import Contacts from './Components/Сontacts'
import Form from './Components/Form'
function App() {
  return (
      <div id="outer-container">
      <Menu />
      <main id="page-wrap">
        <Header />
        <SimpleSlider />
        <Form />
        <About />
        <Contacts />
        <Up/>
      </main>
      </div>
  );
}

export default App;

