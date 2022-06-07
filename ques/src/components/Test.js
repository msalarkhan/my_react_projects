import React, { useState } from 'react';
import './style.css';
import Answer from './Answer';

function Test(){
  const [first,setfirst]=useState([]);
  const handleAdd=()=>{
      const getData=[...first,[]]
      setfirst(getData)
  }
  const handleChange=(onChangeValue,i)=>{
    const inputdata=[...first]
    inputdata[i]=onChangeValue.target.value;
    setfirst(inputdata)
   } 
   const handleDelete=(i)=>{
    const deletVal=[...first]
    deletVal.splice(i,1)
    setfirst(deletVal)  
}
   
   
  return(
    <>
    {first.map((data,i)=>{
      
      return(
        <div>

<input className='ques' value={data} onChange={e=>handleChange(e,i)}  placeholder="write your question here" name="" id="" aria-describedby="helpId"/>
          <button onClick={()=>handleDelete(i)}><i class="fa-solid fa-xmark cross-ques"></i></button>
          <Answer/>
        </div>
          );
          
        
        })};
        {/* <h1 className='your-ques'>{first}</h1> */}
        <button onClick={()=>handleAdd()} className="add-btn">Add-Question</button>


        </>
      );
      


    }
    export default Test;
