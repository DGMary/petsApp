import React from 'react';
import './App.scss';
import { Route, Routes} from "react-router-dom"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Layout from './components/UI/Layout/Layout/Layout';


function App() {
  return (
    <div className="App">  
      <Layout>
        <Routes>     
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />          
        </Routes>     
      </Layout>     
    </div>
  );
}

export default App;
