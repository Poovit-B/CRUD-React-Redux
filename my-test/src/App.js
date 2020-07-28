import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Form from './component/FormInput';
import List from './component/List';

function App() {
  return ( 
    <div>
        <Header />
       <div className="container">
          <Form />
          <List />
       </div>
        
    </div>
  );
}

export default App;
