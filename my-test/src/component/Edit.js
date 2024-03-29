import React, { useState } from 'react'
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';

const FormInput = (props) => {
    const userdata = props.userdata
    const [user, setUser] = useState({  
        id:userdata.id, 
        user_title: userdata.user_title,
        user_firstname: userdata.user_firstname,
        user_lastname: userdata.user_lastname,
        user_birthday: userdata.user_birthday,
        user_nationality: userdata.user_nationality,
        user_citizenID:userdata.user_citizenID,
        user_gender:userdata.user_gender,
        user_phoneType: userdata.user_phoneType,
        user_mobliephone: userdata.user_mobliephone,
        user_passportNo: userdata.user_passportNo,
        user_salary: userdata.user_salary, 
        
    }); 
    const dispatch = useDispatch({}); 
    const onChange = (e) => {
        console.log(e.target.name);
        setUser({ ...user, [e.target.name]: e.target.value });
     };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        dispatch({    
            type:'UPDATE_DATA', 
            payload : user   
        })
        alert('Update Success') 
    }
    const handleCancel = (e) => { 
        dispatch({    
            type:'EDIT_DATA', 
            payload:e
        })  
    }
   

    return(
       <div className="mt-5">  
           <h2>Edit Form Data</h2>
            <form onSubmit={handleSubmit}> 
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <div className="form-group row">
                            <label  className="col-sm-5 col-form-label">Title *</label>
                            <div className="col-sm-7">
                                <select id="inputState" name="user_title" className="form-control" onChange={onChange}>
                                    <option selected={userdata.user_title=="Mr"}>Mr</option>
                                    <option selected={userdata.user_title=="Mrs"}>Mrs</option>
                                    <option selected={userdata.user_title=="Miss"}>Miss</option>
                                    <option selected={userdata.user_title=="Ms"}>Ms</option>
                                    <option selected={userdata.user_title=="Dr"}>Dr</option> 
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-5 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">Firstname *</label>
                            <div className="col-sm-9"> 
                            <input type="text" className="form-control" name="user_firstname" value={user.user_firstname} onChange={onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-5 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">Lastname *</label>
                            <div className="col-sm-9">   
                            <input type="text" className="form-control" name="user_lastname" value={user.user_lastname} onChange={onChange}  />
                            </div>
                        </div>
                    </div>
                </div> 
               
                <div className="form-row">
                    <div className="form-group col-md-5 ">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Birthday *</label>
                            <div className="col-sm-9">
                            <input type="date" className="form-control" name="user_birthday" value={userdata.user_birthday} onChange={onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-7 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Nationality</label>
                            <div className="col-sm-10">
                                <select id="inputState" className="form-control" name="user_nationality" onChange={onChange}>
                                    <option selected={userdata.user_nationality==null}>Choose your Nationality</option>
                                    <option selected={userdata.user_nationality=="Thai"}>Thai</option>
                                    <option selected={userdata.user_nationality=="American"}>American</option>
                                    <option selected={userdata.user_nationality=="Laos"}>Laos</option> 
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-8">
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Citizen ID *</label>
                            <div className="col-sm-6">
                            <input type="text" className="form-control" name="user_citizenID" value={user.user_citizenID} onChange={onChange} />
                            </div> 
                        </div>
                    </div>               
                </div>

                <div className="form-row"  style={{paddingBottom: "35px"}}>
                <label  className="col-sm-1 col-form-label">Gender *</label>
                <div className="col-sm-11 pt-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="user_gender" id="inlineRadio1" value="Male" checked={user.user_gender == 'Male'}  onChange={onChange} />
                        <label className="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="user_gender" id="inlineRadio2" value="Female" checked={user.user_gender == 'Female'} onChange={onChange} />
                        <label className="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="user_gender" id="inlineRadio3" value="Unisex" checked={user.user_gender == 'Unisex'}  onChange={onChange}/>
                        <label className="form-check-label" for="inlineRadio3">Unisex</label>
                    </div>
                </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-5">
                        <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">Moblie Phone.*</label>
                            <div className="col-sm-8">
                            <div className="form-group row"  style={{marginBottom: "-10px"}}>
                                <div className="col-sm-4">
                                    <select className="form-control" name="user_phoneType" onChange={onChange}>
                                        <option  selected={userdata.user_phoneType=="+66"} >+66</option>
                                        <option selected={userdata.user_phoneType=="+77"}>+77</option>
                                        <option selected={userdata.user_phoneType=="+88"}>+88</option>
                                    </select>
                                </div>
                                <p className="col-form-label">-</p>
                                <div className="col-sm-7">
                                    <input type="tel" className="form-control" name="user_mobliephone" value={user.user_mobliephone}  onChange={onChange}/>
                                </div>
                         
                            </div>                        
                            </div>
                        </div>
                    </div>               
                </div>

                <div className="form-row">
                    <div className="form-group col-md-5">
                        <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">Passport No.</label>
                            <div className="col-sm-8">
                            <input type="text" className="form-control" name="user_passportNo" value={user.user_passportNo}  onChange={onChange} />
                            </div>
                        </div>
                    </div>               
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">Expected Salary *</label>
                            <div className="col-sm-8">
                            <input type="text" className="form-control" name="user_salary" value={user.user_salary}  onChange={onChange} />
                            </div>
                        </div>
                    </div>    
                    <div className="form-group col-md-4">
                        <div className="form-group row">
                            <p className="col-sm-4 col-form-label">THB</p>
                        </div> 
                    </div>    
                    <div className="form-group col-md-2"> 
                        <div className="form-group row">
                        <input type="submit" className="btn btn-primary" value="Update" />
                        
                        <input type="button" className="btn btn-danger ml-2" value="Cancel"  onClick={() => handleCancel(user.id)} />
                        
                        </div>
                    </div>             
                </div>
                
            </form>
       </div>
    );
}
export default connect()(FormInput);