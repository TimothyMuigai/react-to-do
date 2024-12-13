import { useState,useMemo } from 'react'
import Body from './Body';

function Functions() {
  const [userData, setuserData] = useState([]);
  const [inputData, setinputData]=useState('');
  const [filter, setFilter] =useState('no-filter')

  const showInput=()=>{
    if (inputData.trim() === '') return;
    const newData = {newInput:inputData, isChecked: false};
    setuserData(u=>[...u,newData]);
    setinputData('');
  };

  const handleInput = (e)=>{
    setinputData(e.target.value);
  }
  
  const handleFilter = (e)=>{
    setFilter(e.target.value);
  }
  const handleCheckboxChange = (index) => {
    setuserData((prev) =>
      prev.map((task,i)=>
      i ==index?{...task, isChecked: !task.isChecked}:task
    )); 
  };

  const filteredItems = userData.filter((task) => {
    if (filter === "no-filter") return true;
        if (filter === "complete") return task.isChecked;
        if (filter === "inComplete") return !task.isChecked;
        return true;
  });

  const delTask=(id)=>{
    setuserData(userData.filter((_,index) => index!==id ))
  }

  const [query, setQuery]= useState('');
  const displayedItems = useMemo(() => {
    const itemsToSearch = filter === "no-filter" ? userData : filteredItems;
    return itemsToSearch.filter((task) =>
      task.newInput.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, filteredItems, userData, filter]);
  

  return (
    <Body
      inputData = {inputData}
      showInput = {showInput}
      delTask = {delTask}
      handleCheckboxChange = {handleCheckboxChange}
      handleInput ={handleInput}
      handleFilter ={handleFilter}
      setQuery ={setQuery}
      query = {query}
      displayedItems = {displayedItems}      
    />    
  )
}

export default Functions