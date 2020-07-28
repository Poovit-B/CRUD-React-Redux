import React from 'react'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const FormInput = () =>{
    return(
       <div className="mt-5">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <div className="form-group row">
                            <label  className="col-sm-5 col-form-label">Title *</label>
                            <div className="col-sm-7">
                                <select id="inputState" className="form-control">
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
                            <input type="text" className="form-control" id="inputAddress2" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-5 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">Lastname *</label>
                            <div className="col-sm-9">
                            <input type="text" className="form-control" id="inputAddress2"  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5 ">
                        <div className="form-group row">
                            <label  className="col-sm-3 col-form-label">Birthday *</label>
                            <div className="col-sm-9">
                            <input type="date" className="form-control" id="inputAddress2"  />
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-7 pl-5">
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label">Nationality</label>
                            <div className="col-sm-10">
                                <select id="inputState" className="form-control">
                                    <option selected>Thai</option>
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
                            <input type="text" className="form-control" id="inputAddress2" />
                            </div> 
                        </div>
                    </div>               
                </div>

                <div className="form-row"  style={{paddingBottom: "35px"}}>
                <label  className="col-sm-1 col-form-label">Gender *</label>
                <div className="col-sm-11 pt-2">
                    <div className="form-check form-check-inline">
                        <input checked className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
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
                                    <select id="inputState" className="form-control">
                                        <option selected>+66</option>
                                        <option>+77</option>
                                    </select>
                                </div>
                                <p className="col-form-label">-</p>
                                <div className="col-sm-7">
                                    <input type="tel" className="form-control" id="inputAddress2" />
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
                            <input type="text" className="form-control" id="inputAddress2" />
                            </div>
                        </div>
                    </div>               
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="form-group row">
                            <label  className="col-sm-4 col-form-label">Expected Salary *</label>
                            <div className="col-sm-8">
                            <input type="text" className="form-control" id="inputAddress2" />
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
                        <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>             
                </div>

            </form>
       </div>
    );
}

export default FormInput;