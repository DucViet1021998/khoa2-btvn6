import React from "react";
import './style.css'
import { useState } from "react";



localStorage.setItem('item', JSON.stringify([   'Hit the gym',
 'Pay bills',
 'Meet George',
 'Buy eggs',]))
export default function Todolist(){
  const itemLocal = JSON.parse(localStorage.getItem('item'))
  const [item, setItem] = useState([]);

    const [input, setInput] = useState('');

    const addItem = () => {
        if (input === ''){
            return
        }
        setInput('');
        setItem([...item, input]);
    }
    const handleInput = (e) => {
        setInput(e.target.value) 
    }
    const deleteItem = (index) => {
       item.splice(index, 1);
        setItem([...item])
    } 
      return (
        <div>
          <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" value={input} onChange={handleInput} />
            <span className="addBtn" onClick={addItem}>Add</span>
          </div>
          <ul id="myUL">
            {item.map((e, indexMap) => {
                return <li className="wrapperLi">
                    <span>{e}</span>
                    <button className="closeBTN" onClick={()=> deleteItem(indexMap)}>X</button>
                </li>
            })}
          </ul>
        </div>
      );
    }
  