import './App.css';
import Hero from './components/Hero';
import Programmes from './components/Programmes';
import Reasons from './components/Reasons'; 
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Join from './components/Join';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
          <Hero />
          <Programmes />
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
          <Footer />
          
    </div>
  );
}

export default App;
