import React, { useEffect, useState } from 'react';
import Todolist from './Todolist';

const getLocalItem = ()=>{
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }else{
    return [];
  }
}

function App() {

  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState(getLocalItem());

  const itemEvent = (event)=> {
      setInputList(event.target.value);
  };

  const listOfItems = ()=>{
      if(inputList!==""){
        setItems((oldItems)=>{
          return [...oldItems, inputList];
        });
      }else{
        alert("Eneter Data first");
      }
      setInputList("");
  };

  const deleteItems = (id)=>{
      setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index !== id;
        })
      })
  };

  useEffect(()=>{
      localStorage.setItem("lists",JSON.stringify(items));
  },[items]);


  return (
    <>
      <div className="main_div">
          <div className="center_div">
              <br />
              <h1>ToDo List</h1>
              <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent}/>
              <button onClick={listOfItems}> + </button>

              <ol>
                  { items.map( (itemval,index)=>{ 
                      
                      return <Todolist 
                      key={index} 
                      id={index} 
                      text={itemval}
                      onSelect={deleteItems}
                      />;
                    
                    } ) }
              </ol> 
          </div>
      </div>
    </>
  );
}

export default App;
