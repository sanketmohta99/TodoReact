import React from 'react'

function ListItemComp({listel,handletoggle, index}) {


    const handlecheckboxchange=(e)=>{
        // e.preventDefault();
        handletoggle(e.target.value );
        console.log(`${e.target.value} id  of the target variable`);
    }


  return (
    // list el is a JS Object and has todo item id and text as attributes/fields

    <div>

    <input type="checkbox" checked={listel.done} value={listel.id} onChange={handlecheckboxchange}  />

    
        <span>{index} </span>
         . 
         <span className={listel.done===true ? "striketodo": ""}> {listel.listitem} </span> 
    

    </div>

  )
}

export default ListItemComp;
