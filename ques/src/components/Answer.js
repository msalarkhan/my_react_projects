import React, { useState } from "react";
import "./style.css";
function Answer(){
   const [val,setVal]=useState([]);
   const handleAdd=()=>{
       const abc=[...val,[]]
       setVal(abc)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }
   console.log(val,"data-")
return(
    <>
        {val.map((data,i)=>{
            return(
                <div>
                    <input value={data} onChange={e=>handleChange(e,i)} className="ans" placeholder="write your answer"/>
                    <button onClick={()=>handleDelete(i)}><i class="fa-solid fa-xmark cross"></i></button>
               </div>
            )
        })}
        <button onClick={()=>handleAdd()} className="add-btn1">Add-Answer</button>
        
    </>
);
}
export default Answer;