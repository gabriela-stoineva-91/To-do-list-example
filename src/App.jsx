import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader';
import Footer from './components/Footer';
import TableContainer from './components/TableContainer';

function App() {

  return (
    <div className="root">
      <Header />
      <Loader />
      <Footer />
      <TableContainer />
    </div>
  )
}

export default App
