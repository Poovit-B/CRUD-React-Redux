import React from 'react'
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux'; 

const List = (props) =>{
    const dispatch = useDispatch({}); 
    const handleDelete = (e) => { 
        dispatch({    
            type:'DELETE_DATA', 
            id:e
        })  
    }
    return(
        <div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col" style={{width:"5%"}}></th>
                <th scope="col" style={{width:"25%"}}>Name</th>   
                <th scope="col" style={{width:"15%"}}>Gender</th> 
                <th scope="col" style={{width:"20%"}}>Moblie Phone</th>
                <th scope="col" style={{width:"15%"}}>Nationality</th>
                <th scope="col" style={{width:"20%"}}>Action</th>
                </tr>
            </thead>
            <tbody> 
                {props.user != null 
                ? props.user.map((users) => (  
                    <tr key={users.id}> 
                    <th  scope="row"><input class="" type="checkbox" value="" id="defaultCheck1" /></th>
                    <td>{users.user_title+". "+users.user_firstname+" "+users.user_lastname}</td> 
                    <td>{users.user_gender}</td> 
                    <td>{users.user_phoneType+users.user_mobliephone}</td>  
                    <td>{users.user_nationality}</td>
                    <td>  
                        <a href=""> Edit</a> /
                        <a href="#" onClick={() => handleDelete(users.id)}> Delete </a>
                      
                    </td>
                    </tr>
                ))  
                : <tr>
                    <td>Empty</td>
                </tr> 
                } 
                {/* <tr> 
                <th scope="row"><input class="" type="checkbox" value="" id="defaultCheck1" /></th>
                <td>{console.log(users.user_firstname)}</td>  
                <td>Otto</td> 
                <td>@mdo</td> 
                <td>Otto</td>
                <td>
                    <a href="">Edit </a>/
                    <a href=""> Delete</a>
                </td>
                </tr> */}
              
            </tbody>
            </table>
        </div>
    );
}
const mapStateToProps = (state) =>{
    return{
        user: state
    }
}
 
export default connect(mapStateToProps)(List);