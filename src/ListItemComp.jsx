import React from 'react'

function ListItemComp({listel,handletoggle}) {


    const handlecheckboxchange=(e)=>{
        // e.preventDefault();
        handletoggle(parseInt(e.target.value) );
        console.log(e.target.value);
    }


  return (
    // list el is a JS Object and has todo item id and text as attributes/fields

    <div>

    <input type="checkbox" checked={listel.done} value={listel.id} onChange={handlecheckboxchange}  />

    
        <span>{listel.id} </span>
         . 
         <span className={listel.done===true ? "striketodo": ""}> {listel.listitem} </span> 
    

    </div>

  )
}

export default ListItemComp;
