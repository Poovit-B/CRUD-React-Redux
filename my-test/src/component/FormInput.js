import React, { useState } from 'react'
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import Create from './Create'
import Edit from './Edit' 

const FormInput = (props) => {

    return( 
        <div> 
            {(props.userdata == null)
            ? <Create /> 
            : <Edit userdata={props.userdata } />
            }
        </div>
    );
}
export default connect()(FormInput);