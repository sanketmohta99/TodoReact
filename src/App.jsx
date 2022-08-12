
import './App.css';
import Todolist from './Todolist';
import { useState } from 'react';

function App() {
  
  const [todos, settodos]=useState([{id:1, listitem:"Clean the room", done:false}, {id:2, listitem:"Study CS Fundamentals",  done:false} ]);

  // default is going to be empty array


  // given an id , just remove it from the array  of todos if its checked and re render the whole list again
  const handletoggle =(todo_id)=>{

    const newtodolist= todos.map ( (listitem)=>{

        if(listitem.id===todo_id)
        {
          return {...listitem,done:!listitem.done}
        }
        else
        {
          return {...listitem}
        }

    })

      console.log(newtodolist);
      settodos(newtodolist);
  }



  return (
    <div className="App">
      <header className="App-header">
       
          Learn React na be

          <Todolist todoslist={todos} handletoggle={handletoggle} />

          <input type="text" />

          <div> {todos.length} tasks left to do</div>

          <button> Add todo </button>
          <button> Mark a todo done</button>
          

      </header>
    </div>
  );
}

export default App;
