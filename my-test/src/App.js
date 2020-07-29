import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import FormInput from './component/FormInput';
import Edit from './component/Edit'
import List from './component/List';
import { useDispatch , useSelector} from 'react-redux'; 


function App(props) {
  const { user } = useSelector((state) => state); 
  let roots = user.map(function(users) {
    if(users.editing == true){
        return users 
    }
  })
  console.log(roots)
  return ( 
    <div> 
        <Header />
       <div className="container"> 
          {
          user.filter(users => users.editing==true).map(filteredName => (
              // console.log(filteredName)    
              <FormInput key={filteredName.id} userdata={filteredName} />  
          ))    
          }
          <FormInput />
          <List />
    

       </div>
       <Footer />
    </div>
    
  );
}
// const mapStateToProps = (state) =>{
//   return{
//       user: state
//   }
// } 

export default App;
