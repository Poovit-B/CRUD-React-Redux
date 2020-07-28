import React from 'react';

const FormReducer = (state = [], action) =>{
    console.log(state)  
    switch (action.type) { 
        case 'ADD_DATA': 
            return state.concat([action.user])
        case 'DELETE_DATA': 
            return state.filter((users)=>users.id !== action.id)
        default: 
            return state; 
    } 
    
}
 
export default FormReducer