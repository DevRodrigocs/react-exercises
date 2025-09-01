"use client"

import { listReducer } from "@/reducers/listReducer";
import { Item } from "@/types/Item";
import { useReducer, useState } from "react";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState ('');

  const handleAddButton = () => {
    if(addField.trim() === '') return false;

    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    });

    setAddField('');
  }

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: 'toggleDone',
      payload: { id }
    });
  }

  const handleEdit = (id: number) => {
    const item = list.find(it => it.id === id);
    if(!item) return false;

    const newText = window.prompt('Edit Task', item.text);
    if(!newText || newText.trim() === '') return false;

    dispatch({
      type: 'editText',
      payload: {id, newText }
    });
  }

  const handleRemove = (id: number) => {
    if(!window.confirm('Are you sure you want to delete this item?')) return false;
    dispatch({
      type: 'remove',
      payload: { id }
    });
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl my-4">To-Do List</h1>
      <div className="max-w-2xl mx-auto flex rounded-md bg-amber-50 border border-gray-400 p-4 my-4 outline-none">
        <input 
          type="text" 
          className="flex-1 rounded-md border border-black p-3 bg-transparent text-black"
          placeholder="Enter an item"
          value={addField}
          onChange={e => setAddField(e.target.value)}
        />
        <button 
          className="p-4 text-black"
          onClick={handleAddButton}
        >ADD</button>
      </div>
      <ul className="max-w-2xl mx-auto">
        {list.map(item => (
          <li 
            key={item.id}
            className="flex items-center p-3 my-3 border-b border-gray-300"
          >
            <input 
              type="checkbox"
              className="w-6 h-6 mr-4"
              checked= {item.done}
              onChange={() => handleDoneCheckbox(item.id)}
            />
            <p className="flex-1 text-lg">{item.text}</p>
            <button onClick={() => handleEdit(item.id)} className="mx-4 hover:text-gray-500">Edit</button>
            <button onClick={() => handleRemove(item.id)} className="mx-4 hover:text-gray-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Page;