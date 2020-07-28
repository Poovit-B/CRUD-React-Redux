import React from 'react';

const FormReducer = (state = [], action) =>{
    
    switch (action.type) { 
        case 'ADD_DATA': 
            return state.concat([action.user])
        case 'DELETE_DATA': 
            return state.filter((users)=>users.id !== action.id)
        case 'EDIT_DATA': 
            return state.map((users)=>users.id === action.id
            ? {...users,editing : !users.editing}
            :users    
            )
        default: 
            return state; 
    } 
    
}
 
export default FormReducer