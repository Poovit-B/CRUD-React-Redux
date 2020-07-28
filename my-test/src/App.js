import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import FormInput from './component/FormInput';
import Edit from './component/Edit'
import List from './component/List';
import {connect} from 'react-redux'

function App(props) {
  return ( 
    <div> 
        <Header />
       <div className="container">
          <FormInput />
          <List />

          {props.user.map((users) => (
          
          (users.editing == true) 
          ? <Edit />      
          : ''       
          )) }
       </div>
        
    </div>
  );
}
const mapStateToProps = (state) =>{
  return{
      user: state
  }
} 

export default connect(mapStateToProps)(App);
