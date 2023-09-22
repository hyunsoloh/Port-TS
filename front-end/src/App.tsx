import React from 'react';
import './App.css'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
