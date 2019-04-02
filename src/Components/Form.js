import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../Store/action'
import './Form.css'
import Nav from './Nav'


const regex = {
  name:/^\w{5,12}$/ ,
  phone:/^\d{10}$/,
}

;

class Form extends Component {
  state={
    name:'',
    phone:'',
    invalidName:false,
    invalidPhone:false
  }
  
 
  onChange = (e) => {this.setState({ [e.target.name]: e.target.value })}

  onSubmitHandler = () => {
    
    if(!regex.name.test(this.state.name)){
      this.setState({
        invalidName: true
      }
      )
    }
    if(!regex.phone.test(this.state.phone)){
      console.log('Invalid name')
      this.setState({
        invalidPhone: true
      }
      )
    }
    else{
    
    this.props.onSubmit(this.state);
    this.props.history.push('/')
    }
  
  }
  onBackHandler = () => {
    this.props.history.goBack();
  }
  
   
     
   
  
  render() {
   let error = null;
    if(this.state.invalidName && this.state.invalidPhone){
      error = (
        <div className='error'>
          *Username should be between 5 and 12 letters long and
          phone should be 10 digits long
        </div>
      )
    }
    else if(this.state.invalidName ){
      error = (<div className='error'>
          *Username should be between 5 and 12 letters
        </div>
      )
    }
    else if(this.state.invalidPhone){
       error=( <div className='error'>
         *phone should be 10 digits long
        </div>
       )
    }
    
    return (
     <div>
        <Nav>ADD SUBSCRIBER</Nav>
        <div className="form">
        {error}
        <div  className='back-btn'onClick={this.onBackHandler}>Back</div>

          <div className='label'>Name:</div>
          <input name='name' onChange={this.onChange}  value={this.name} />

          <div className='label'>Phone:</div>
          <input name='phone' onChange={this.onChange}  value={this.phone}  />
            <br/>
            <br/>
          <div className='label bold'>Subscriber to be Added</div>
          <div>Name:{this.state.name}</div>
          <div>Phone:{this.state.phone}</div>
          <div className='btn green submit-btn' onClick={this.onSubmitHandler}>Add</div>
          
      </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    onSubmit:(details) => dispatch({
      type:actionTypes.ADD_USER,
      data:details
    })
  }
}

export default connect(null,mapDispatchToProps)(Form);
