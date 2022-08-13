import React from 'react'
import ListItemComp from './ListItemComp'

function Todolist({todoslist,handletoggle}) {

  var itemno=0;
  return (

    // todoslist is an array of JS objects
    
    
    todoslist.map ( (todoitem)=>{

      // todoitem is a JS object , that has all list item details
      itemno++;

      return ( <ListItemComp key={todoitem.id} index={itemno} listel={todoitem} handletoggle={handletoggle} /> );
      // <div>{todoitem}</div>
      

    })

  )
}

export default Todolist;