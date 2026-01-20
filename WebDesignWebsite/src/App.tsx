import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import MainBody from './components/mainBody.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <MainBody/>

      <Footer/>

    </>
  )
}

export default App
