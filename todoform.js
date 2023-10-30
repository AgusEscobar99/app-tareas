import React, { useState } from 'react'

function todoform({addtodo}) { 

    const [userInput , setUserInput] = useState('');

    const handleonchange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(userInput.trim() !== ''){
        addtodo(userInput);
        setUserInput('');
      }

    }
  return (
    <div style = {{margin: 20}}>
      <form onSubmit = {handleSubmit} >
        <input type = "text" value = {userInput} onChange = {handleonchange} />
        <button>Add todo</button>
      </form>
    </div>
  )
}
