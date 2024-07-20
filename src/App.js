import './App.css';
import Header from './Components/Header'
import HomePage from './Components/HomePage';
import Test from './Components/Test';
import Resources from './Components/Resources';
import Symptom from './Components/Symptom';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AfterRoom from './Components/AfterRoom/AfterRoom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<Test />} />
          <Route path='/symptom' element={<Symptom />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/after' element={<AfterRoom />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
