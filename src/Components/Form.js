import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../Store/action'
class Form extends Component {
  state={
    name:'',
    phone:''
  }
  componentDidMount(){
    console.log(this.props)
  }
 
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmitHandler = () => {
    this.props.onSubmit(this.state);
    this.props.history.push('/')
  
  }
  
  render() {
    return (
      <div>

          <div>Name</div>
          <input name='name' onChange={this.onChange}  value={this.name} />

          <div>Phone</div>
          <input name='phone' onChange={this.onChange} value={this.phone}  />

          <button onClick={this.onSubmitHandler}>Submit</button>
          
          <div>{this.state.name}</div>
          <div>{this.state.phone}</div>
          
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{

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
