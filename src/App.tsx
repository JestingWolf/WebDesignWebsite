import './App.css';
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import indexBody from './components/indexBody.tsx';
import ContactForm from './components/contactForm.tsx';
import PopUpGallery from './components/popUpGallery';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import IndexBody from './components/indexBody.tsx';
import CatalogueContainer from './components/catalogueContainer.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>

        </nav>          
          <Link to="/" className = "indexButton">Home</Link>
          <Link to="/contact" className = "contactButton">Contact</Link>
          <Link to="/catalogue" className = "catalogueButton">Catalogue</Link>
          <Link to="/pricing" className = "pricingButton">Pricing</Link>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


function Index() {
  return (
    <>
    
      <Header/>

      <IndexBody/>

      <PopUpGallery/>

      <Footer/>

    </>
  );
}

function Contact() {
  return (
    <>
      <Header />

      <ContactForm/>

      <Footer/>
    </>
  );
} 

function Catalogue() {
  return (
    <>
      <Header/>
      
      <CatalogueContainer/>

      <Footer/>
    </>
  );
}

function Pricing() {
  return (
    <>
      <Header/>

      <Footer/>
    </>
  );
}
export default App
