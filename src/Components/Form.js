import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../Store/action'
import './Form.css'
import Nav from './Nav'

class Form extends Component {
  state={
    name:'',
    phone:''
  }
  
 
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmitHandler = () => {
    this.props.onSubmit(this.state);
    this.props.history.push('/')
  
  }
  onBackHandler = () => {
    this.props.history.goBack();
  }
  
  render() {
    return (
     <div>
        <Nav>ADD SUBSCRIBER</Nav>
        <div class="form">
        <div  className='back-btn'onClick={this.onBackHandler}>Back</div>

          <div className='label'>Name:</div>
          <input name='name' onChange={this.onChange}  value={this.name} />

          <div className='label'>Phone:</div>
          <input name='phone' onChange={this.onChange} value={this.phone}  />
            <br/>
            <br/>
          <div class='label bold'>Subscriber to be Added</div>
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
