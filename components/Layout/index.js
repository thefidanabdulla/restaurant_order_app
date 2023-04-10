import React from 'react';
import Footer from './Footer';
import Navbar from "./Navbar";

const Index = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Index