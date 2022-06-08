import React, { Component } from 'react';
import "./style.css";
import Test from './Test';
import Footer from './Footer';

export default class 
 extends Component {
   constructor(props){
     super(props);
   } 
  render() {

    return (
      <>  
    <img src='M-SALAR.LLC.png' alt='logo not found' className='logo'/>
    <h1 className='title'>Quiz Application </h1>
     <div  className='main'>
    <div class="form-group">
      <Test/> 
      <input name="" id="" className='submit' type="button" value="Submit"/>
      
      
    </div>
    </div>
    <Footer/>
    </>

    )
  }

 
 }

