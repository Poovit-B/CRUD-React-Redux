const initialState = {
    user: [],
}; 

export default (state = initialState, action) => {


    switch (action.type) {
        case 'ADD_DATA':
            return {  
                ...state, 
                user: [action.payload,...state.user]
            };
        //return [...state, user: state.concat([action.payload])
        case 'DELETE_DATA': 
            console.log(action.payload)
            return {
                ...state,
                user: state.user.filter((users)=>users.id !== action.payload)  
            }
        case 'MULTI_DELETE_DATA':
            var filteredKeywords = state.user.filter((users) => !action.payload.includes(users.id));
            return { 
                    ...state,
                    user : filteredKeywords
                }
        case 'EDIT_DATA': 
            return {
                ...state,
                user : state.user.map((users)=>users.id === action.payload
                ? {...users,editing : !users.editing}
                : users     
                )
            }
        case 'UPDATE_DATA': 
            console.log(action.payload.user_firstname)   
            return { 
                ...state,
                user : state.user.map((users)=>{
                    if(users.id === action.payload.id){
                        return{
                            ...users,    
                            user_title: action.payload.user_title,
                            user_firstname: action.payload.user_firstname,
                            user_lastname: action.payload.user_lastname,
                            user_birthday: action.payload.user_birthday,
                            user_nationality: action.payload.user_nationality,
                            user_citizenID:action.payload.user_citizenID,
                            user_gender:action.payload.user_gender,
                            user_phoneType: action.payload.user_phoneType,
                            user_mobliephone: action.payload.user_mobliephone,
                            user_passportNo: action.payload.user_passportNo,
                            user_salary: action.payload.user_salary,
                            editing:!users.editing
                        }
                    }else{
                        return users
                    }
                } 
                )
            }
        default:
            return state;
    }

}