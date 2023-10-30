import React from 'react'

 function todoItem({todo, oncomplete, onDeteleItem}) {
  const getStyle = () =>{
    return{
        textdecoration:  todo.completed ? 'line-through' : 'none',
        margin: '20px,'
        border: '1px solid #ffffff',
        backgroundcolor: 'CCF7E3'
    }
  }
  return (
    <div style = {getStyle()}>
      <input type= 'checkbox' checked = {todo.completed}
      onchange= {() => oncompleted(todo.id)}/>
      {
         todo.task
      }
      <button className = 'add-btn' onclick = {() => onDeteleItem(todo.id) } >x</button>
      
    </div>
  )
}
export default  todoItem;