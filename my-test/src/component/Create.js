import React, { useState } from 'react'
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';

const Create = (props) => {  
    const [errorCheck, setErrorCheck] = useState({});
    const [error, setError] = useState({});
    const [user, setUser] = useState({  
        id:new Date, 
        user_title:"Mr",
        user_firstname: '',
        user_lastname: '',
        user_birthday:'',
        user_nationality:'',
        user_citizenID:'',
        user_gender:"Male",
        user_phoneType:"+66",
        user_mobliephone:'',
        user_passportNo:'',
        user_salary:'', 
        editing:false
    }); 
    
    const dispatch = useDispatch({}); 
    const onChange = (e) => {
        if (e.target.name == "user_firstname" || e.target.name == "user_lastname") {
            let value = e.target.value.replace(/[^A-Za-zก-๙\d]/gi, "");
            setUser({ ...user, [e.target.name]: value });  
        }
        setUser({ ...user, [e.target.name]: e.target.value });
     };

     const validation = (e) => {
        let formIsValid = true;
        let errors = { error_firstname: "", error_lastname: "", error_birthday: "", error_phone: "",error_salary: "",  };
        let errorChecks = { errorChecks_firstname: false, errorChecks_lastname: false, errorChecks_birthday: false, errorChecks_phone: false,errorChecks_salary: false, };
        if (user.user_firstname.length == 0) {
          formIsValid = false;
          errorChecks.errorChecks_firstname = true;
          errors.error_firstname = "Firstname cannot be empty";
        }

        if (user.user_lastname.length == 0) {
            formIsValid = false; 
            errorChecks.errorChecks_lastname = true;
            errors.error_lastname = "Lastname cannot be empty";
        }

        if (user.user_birthday == '') {
            formIsValid = false;  
            errorChecks.errorChecks_birthday = true;
            errors.error_birthday = "Please select birthday";
        }

        if (user.user_mobliephone == '') {
            formIsValid = false;  
            errorChecks.errorChecks_phone = true;
            errors.error_phone = "Phone cannot be empty";
        }

        if (user.user_salary == '') {
            formIsValid = false;  
            errorChecks.errorChecks_salary = true;
            errors.error_salary = "Please field salary";
        }
        
    
        setErrorCheck({ ...errorCheck, ...errorChecks });
        setError({ ...error, ...errors });
        return formIsValid;
      };
    
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const val = validation();
        if (val) { 
            dispatch({    
                type:'ADD_DATA', 
                payload : user  
            }) 
            let clear_user = {
                id:new Date, 
                user_title:"Mr",
                user_firstname: '',
                user_lastname: '',
                user_birthday:'',
                user_nationality:'',
                user_citizenID:'',
                user_gender:"Male",
                user_phoneType:"+66",
                user_mobliephone:'',
                user_passportNo:'',
                user_salary:'', 
                editing:false 
            }
            setUser({...user, ...clear_user})
            alert('Submit Success')
        }  
    }
   

    return(
       <div className="mt-5">
            <form onSubmit={handleSubmit}> 
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <div className="form-group row">
                            <label  className="col-sm-5 col-form-label">Title *</label>
                            <div className="col-sm-7">
                                <select id="inputState" name="user_title" className="form-control" onChange={onChange}>
                                    <option selected>Mr</option>
                                    <option>Mrs</option>
                                    <option>Miss</option>
                                    <option>Ms</option>
                                    <option>Dr</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-5 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">Firstname *</label>
                            <div className="col-sm-9">    
                            <input type="text" className={`form-control ${errorCheck.errorChecks_firstname ? 'is-invalid' : ''}`} name="user_firstname" value={user.user_firstname} onChange={onChange} />
                            <div class="invalid-feedback">
                            {error.error_firstname}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-5 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">Lastname *</label>
                            <div className="col-sm-9">   
                            <input type="text"  className={`form-control ${errorCheck.errorChecks_lastname ? 'is-invalid' : ''}`} name="user_lastname" value={user.user_lastname} onChange={onChange}  />
                            <div class="invalid-feedback">
                            {error.error_lastname} 
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
               
                <div className="form-row">
                    <div className="form-group col-md-5 ">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Birthday *</label>
                            <div className="col-sm-9">
                            <input type="date"  className={`form-control ${errorCheck.errorChecks_birthday? 'is-invalid' : ''}`} name="user_birthday" value={user.user_birthday} onChange={onChange} />
                            <div class="invalid-feedback">
                            {error.error_birthday}  
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-7 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Nationality</label>
                            <div className="col-sm-10">
                                <select id="inputState" className="form-control" name="user_nationality" onChange={onChange}>
                                    <option selected>Choose your Nationality</option>
                                    <option>Thai</option>
                                    <option>American</option>
                                    <option>Laos</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-8">
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Citizen ID </label>
                            <div className="col-sm-6">
                            <input type="text" className="form-control" name="user_citizenID" value={user.user_citizenID} onChange={onChange} />
                            </div> 
                        </div>
                    </div>               
                </div>

                <div className="form-row"  style={{paddingBottom: "35px"}}>
                <label  className="col-sm-1 col-form-label">Gender </label>
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
                            <label  className="col-sm-4 col-form-label">Moblie Phone *</label>
                            <div className="col-sm-8">
                            <div className="form-group row"  style={{marginBottom: "-10px"}}>
                                <div className="col-sm-4">
                                    <select className="form-control" name="user_phoneType" onChange={onChange}>
                                        <option selected>+66</option>
                                        <option>+77</option>
                                        <option>+88</option>
                                    </select>
                                </div>
                                <p className="col-form-label">-</p>
                                <div className="col-sm-7">
                                    <input type="tel" className={`form-control ${errorCheck.errorChecks_phone ? 'is-invalid' : ''}`} name="user_mobliephone" value={user.user_mobliephone}  onChange={onChange}/>
                                    <div class="invalid-feedback">
                                    {error.error_phone}  
                                    </div>
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
                            <input type="text" className={`form-control ${errorCheck.errorChecks_salary? 'is-invalid' : ''}`} name="user_salary"  value={user.user_salary} onChange={onChange} />
                                <div class="invalid-feedback">
                                    {error.error_salary}  
                                </div> 
                            </div>
                        </div>
                    </div>    
                    <div className="form-group col-md-5">
                        <div className="form-group row">
                            <p className="col-sm-4 col-form-label">THB</p>
                        </div>
                    </div>    
                    <div className="form-group col-md-1">
                        <div className="form-group row">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </div>             
                </div>
                
            </form>
       </div>
    );
}
export default connect()(Create);