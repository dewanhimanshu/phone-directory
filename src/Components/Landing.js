import React, { Component } from 'react';
import { BrowserRouter, Switch, Route ,Link} from 'react-router-dom'
import Form from '../Components/Form'
import {connect} from 'react-redux'
import './Landing.css'
import * as actionTypes from '../Store/action'

class Landing extends Component {



onSubmit = (details) =>{
    console.log(details)
    const newDirectory = {...this.state.directory,details}
    this.setState({
        directory:newDirectory
    })
    
}
handleForm  = () => {
  
}


  render() {
      //looping through all directory to display it
      let list = (
          this.props.directory.map(
              (detail) => {
                return(
            <div>
                <div>{detail.name}</div>
                <div>{detail.phone}</div>
                <div className='btn red' 
                onClick={()=>{this.props.onDelete(detail)}} >
                    Delete
                </div>
            </div>
                )
              }
          )
      )
    return (
    <div>
        <div className='btn green'>
            <Link to='/add'>Add</Link>
        </div>
        <div className='list'>
            <span>NAME</span>
            <span>PHONE</span>
        </div>
      <div>
        
      </div>
        {list}
    </div>
    );
  }
}
const mapStateToProps = (state) => {
    return{
        directory:state.directory
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return{
      onDelete:(detail) => dispatch({
        type:actionTypes.DELETE_USER,
        data:detail
      })
    }
  }
  
 
  

export default connect(mapStateToProps,mapDispatchToProps)(Landing);
