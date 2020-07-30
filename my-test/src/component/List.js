import React, { useState } from 'react'
import {connect} from 'react-redux';
import { useDispatch , useSelector} from 'react-redux'; 
import Pagination from './Pagination'

const List = (props) =>{
    const dispatch = useDispatch({}); 
    const { user } = useSelector((state) => state);
    const [posts,setPosts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [selected, setSelected] = useState([]);
    const [isChecked, setIsChecked] = useState(false); 
    console.log(user)  
    const handleDelete = (e) => { 
        dispatch({    
            type:'DELETE_DATA', 
            payload:e
        })  
    }
    const handleUpdate = (e) => {  
        dispatch({    
            type:'EDIT_DATA', 
            payload:e
        })  
    } 
    const handleSelectClick = (event, id, name) => {
        console.log(id)
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }

        setSelected(newSelected);
      };

    const handleMultiDelete = (selected) => { 
          console.log(selected)
          if(selected == ''){
              alert('Select file to delete')
          } 
        // dispatch({    
        //     type:'MULTI_DELETE_DATA',  
        //     payload:selected
        // })   
    }
    // const handleSelectAll= () => { 
    //         let newSelected = []; 
    //         currentPosts.forEach(fruite => {              
    //             newSelected.push(fruite.id)
    //             setSelected(newSelected); 
    //         }) 
    //         setIsChecked(true) 
    // } 

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return(
        <div>
            <div className="row p-2">
                <div className="col-6">
                {/* <input class="form-check-input" style={{marginTop: "12px"}} type="checkbox" value="" id="inlineCheckbox1" 
                    onClick={() => handleSelectAll()}
                />
                <label class="form-check-label ml-4 mt-2" for="inlineCheckbox1"><h6>Select All</h6></label> */}
                <input type="button" className="btn btn-danger pt-1 tb-0 pl-5 pr-5 ml-3"  value="Delete" onClick={() => handleMultiDelete(selected)} />
                </div>
                {/* <small className="text-muted">5 Post per page</small> */}
                <div className="col-6 "> 
                <nav aria-label="...">
                    <ul class="pagination  justify-content-end">
                    
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={user.length}
                        paginate={paginate}
                    />
                    </ul>
                </nav>
                </div>
            </div>
            
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
                {currentPosts !== null 
                ? currentPosts.map((users) => (  
                    <tr key={users.id}>     
                    <th  scope="row"><input class="" type="checkbox" value=""  onClick={(event) =>
                            handleSelectClick(
                              event,
                              users.id 
                            )
                          } /></th>
                    <td>{users.user_title+". "+users.user_firstname+" "+users.user_lastname}</td> 
                    <td>{users.user_gender}</td> 
                    <td>{users.user_phoneType+users.user_mobliephone}</td>  
                    <td>{users.user_nationality}</td>
                    <td>  
                        <a href="#" onClick={() => handleUpdate(users.id)}> Edit</a> /
                        <a href="#" onClick={() => handleDelete(users.id)}> Delete </a>
                        {/* {((users.editing) == false) ? "False" : "True"} */}
                    </td> 
                    </tr>
                ))  
                : <tr> 
                    <td>Empty</td>
                </tr> 
                } 
            </tbody>
            </table>
        </div>
    );
}

// const mapStateToProps = (state) =>{
//     return{
//         user: state
//     } 
// } 
 
export default List;