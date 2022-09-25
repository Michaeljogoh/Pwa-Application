import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
// import Create from './components/Create';
import Read from './components/Read';

function  App (){
  return (
    <div className='App'>
    <Navbar />
     

     <Read />
     {/* <Create /> */}
    </div>
  );
}

export default App;
