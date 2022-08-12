import React from 'react'
import ListItemComp from './ListItemComp'

function Todolist({todoslist,handletoggle}) {
  return (

    // todoslist is an array of JS objects
    
    todoslist.map ( (todoitem)=>{

      // todoitem is a JS object , that has all list item details
      
      return ( <ListItemComp key={todoitem.id} listel={todoitem} handletoggle={handletoggle} /> );
      // <div>{todoitem}</div>
      

    })

  )
}

export default Todolist;