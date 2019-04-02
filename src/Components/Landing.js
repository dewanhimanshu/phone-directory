import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Landing.css'
import * as actionTypes from '../Store/action'
import Nav from './Nav'

class Landing extends Component {

render() {
      //looping through all directory to display it
      let list = (
          this.props.directory.map(
           
              (detail) => {
              
                return(
            <div   key={detail.phone+detail.name} className='list '>
                <div>{detail.name}</div>
                <div>{detail.phone}</div>
                <div className='btn red width-6' 
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
          <Nav>PHONE DIRECTORY</Nav>
            <Link to='/add'><div className='btn green'>Add</div></Link>
        
        <div className='list'>
            <div>NAME</div>
            <div>PHONE</div>
        </div>
        <div>
            {list}
        </div>
        
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
