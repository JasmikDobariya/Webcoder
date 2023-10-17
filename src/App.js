import './App.css';
import About from './componant/About';
import Navbar from './componant/Navbar';
import { Route, Routes } from 'react-router-dom'
import Homepage from './componant/Homepage';
import Service from './componant/Service';
import Footer from './componant/Footer';
import Contact from './componant/Contact';
// import Covidtable from './Covidtable'
// import PopuApicall from './PopuApicall'






function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/Reactliveweb' element={<Homepage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact_us' element={<Contact />} />
        <Route exact path='/service' element={<Service />} />
      </Routes>
      <Footer />
      {/* <Covidtable />
      <PopuApicall /> */}
    </>
  );
}

export default App;
