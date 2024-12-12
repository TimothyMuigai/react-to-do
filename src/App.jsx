import { useEffect, useState } from "react"
import Auth from "./components/Auth"
import { db } from "./config/Config";
import { getDocs,collection, doc } from "firebase/firestore";
import Functions from "./to-do components/Functions";

function App() {
  // const [toDOList, settoDoList] =useState([]);

  // const toDOListCollectionRef =collection(db, "Todo list");

  // useEffect(()=>{
  //   const getTodoList =async () =>{
  //     //read data
  //     //set the to do list
  //     try{
  //       const data =await getDocs(toDOListCollectionRef);
  //       const filteredData = data.docs.map((doc) =>({
  //         ...doc.data(),
  //         id: doc.id,
  //       }))
  //       settoDoList(filteredData);
  //     }catch (err){
  //       console.error(err);
  //     }
  //   };
  //   getTodoList()
  // },[]);
  return (
    <>
      {/* <div>
        <Auth/>
        <div>
        {toDOList.map((todo) => (
            <div key={todo.id}>
              <h1>{todo.date}</h1>
              <p>{todo.list}</p>
            </div>
          ))}
        </div>
      </div> */}
      <Functions/>
    </>
  )
}

export default App
