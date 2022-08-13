
import './App.css';
import Todolist from './Todolist';
import { useState , useRef, useEffect} from 'react';
import userEvent from '@testing-library/user-event';
import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY='todoApp.todos'


function App() {
  
  const [todos, settodos]=useState([]);
  const [noftodoitems, setnoftodoitems]=useState(todos.length);
  
  const todoitemtext=useRef();

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

       // now add the new todolist to local storage
       localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newtodolist));

      settodos(newtodolist);
      
  }



      //side effect functions only when [todos] state is changed 
    useEffect(()=>{

      const newnofitems=todos.reduce((totalitems,item)=>
      {
          if(item.done===false)
            {return totalitems+1;}
          else
            {return totalitems;}
      },0);
  
      console.log(`${newnofitems} is the nof todolist items`);

      setnoftodoitems(newnofitems);

    }, [todos])


      // side effect only when the component loads
    useEffect(()=>{

      const storedtodos=JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY) );
         if(storedtodos) settodos(storedtodos);
         else             settodos([]);


    }, [])

    const handleaddTodo=(e)=>{
      const text=todoitemtext.current.value;
      if(text==="")return ;

      settodos( (prevtodos)=>{
            const updatedtodos= [...prevtodos, {id:uuidv4(), listitem: text, done: false}];

            // now add the new todolist to local storage
            localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(updatedtodos));

            console.log(`${text}  wala kaaam hai MC`); 

      })

      todoitemtext.current.value=null
    }


    const deletelist=(e)=>{
      localStorage.clear();
      settodos([]);
    }



  return (
    <div className="App">
      <header className="App-header">
       
          Learn React na be

          <Todolist todoslist={todos} handletoggle={handletoggle} />

          <input type="text" ref={todoitemtext} />

          
          <div> {noftodoitems} tasks left to do</div>

          <button onClick={handleaddTodo}> Add todo </button>
          <button> Mark a todo done</button>
          <button onClick={deletelist}>Delete All List Items</button>

      </header>
    </div>
  );
}

export default App;
