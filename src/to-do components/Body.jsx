import React from 'react'

function Body({userData, handleInput, markDone, deleteTask, displayData, userInput}) {
  return (
    <div className="body">
      <div className='container'>
      <h2>To-do List</h2>
          <div className='list-container'>
              <input type="text"
                  value={userInput}
                  onChange={handleInput}
                  placeholder='Add your list'
              />
              <button onClick={displayData}>Add to list</button>
          </div>
          <div className='search-container' style={{display:'none'}}>
              <input type="text" />
              <button>Search</button>
          </div>
          {/* <div className='filter-container'>
              <select name="Filter" id="selectBox" defaultValue="default">
                  <option value="default" disabled>Filter Task</option>
                  <option value="no-filter">None</option>
                  <option value="complete">Completed Tasks</option>
                  <option value="inComplete">Yet to be Completed</option>
              </select>
          </div> */}
          <div className="display-container">
          <ul>
            {userData.map((data, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={data.isChecked}
                  onChange={() => markDone(index)}
                />
                <span
                  style={{ textDecoration: data.isChecked ? 'line-through' : 'none' }}>
                  {data.newInput}
                </span>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Body