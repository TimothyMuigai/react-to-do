import React, { useState } from 'react'
import Body from './body';

function Functions() {
  const [userData, setuserData] = useState([]);
  const [inputData, setinputData]=useState('');

  const handleCheckboxChange = (index) => {
    setuserData(userData.map((task,i)=>
      i ==index?{...task, isChecked: !task.isChecked}:task
    )); 
  };

  const handleInput = (e)=>{
    setinputData(e.target.value);
  }
  const showInput=()=>{
    const newData = {newInput:inputData, isChecked: false};
    setuserData(u=>[...u,newData]);
    setinputData('');
  };
  const delTask=(id)=>{
    setuserData(userData.filter((_,index) => index!==id ))
  }

  return (
    <Body
      userInput = {inputData}
      displayData = {showInput}
      deleteTask = {delTask}
      markDone = {handleCheckboxChange}
      handleInput ={handleInput}
      userData ={userData}
    />    
  )
}

export default Functions