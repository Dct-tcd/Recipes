import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Display from './components/Display';
import { useState } from 'react';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <>
       {/* <SearchBar/> */}
       <Display />
    </>
  );
}

export default App;
