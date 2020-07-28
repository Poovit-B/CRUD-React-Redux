import React, { useState } from 'react'

export function FormInput (props) {
    const [user, setUser] = useState({
        user_title:"Mr",
        user_firstname: null,
        user_lastname: null,
        user_birthday:null,
        user_nationality:null,
        user_citizenID:null,
        user_gender:"Male",
        user_phoneType:"+66",
        user_mobliephone:null,
        user_passportNo:null,
        user_salary:null,
    });
    
    // const [user,setUser] = useState("");
    // const [firstname,setFirstname] = useState("");
    // const [lastname,setLastname] = useState("");
    const onChange = (e) => {
        console.log(e.target.name);
        var phoneType = "+66";
        if(e.target.name == "user_mobliephoneType"){
             phoneType =  e.target.value;
        }
     //    if(e.target.name == "user_mobliephone"){
     //     e.target.value = phoneType + e.target.value;
     //     }   
        setUser({ ...user, [e.target.name]: e.target.value });
     };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
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
                            <input type="text" className="form-control" name="user_firstname" onChange={onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-5 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">Lastname *</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control" name="user_lastname" onChange={onChange}  />
                            </div>
                        </div>
                    </div>
                </div> 
               
                <div className="form-row">
                    <div className="form-group col-md-5 ">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Birthday *</label>
                            <div className="col-sm-9">
                            <input type="date" className="form-control" name="user_birthday" onChange={onChange} />
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
                            <label  className="col-sm-2 col-form-label">Citizen ID *</label>
                            <div className="col-sm-6">
                            <input type="text" className="form-control" name="user_citizenID" onChange={onChange} />
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
                                        <option selected>+66</option>
                                        <option>+77</option>
                                        <option>+88</option>
                                    </select>
                                </div>
                                <p className="col-form-label">-</p>
                                <div className="col-sm-7">
                                    <input type="tel" className="form-control" name="user_mobliephone"  onChange={onChange}/>
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
                            <input type="text" className="form-control" name="user_passportNo"  onChange={onChange} />
                            </div>
                        </div>
                    </div>               
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">Expected Salary *</label>
                            <div className="col-sm-8">
                            <input type="text" className="form-control" name="user_salary"  onChange={onChange} />
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
