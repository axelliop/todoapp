import React, { useState } from 'react'

const Todo = ({item, onUpdate, onDelete}) => {

//boton para poder editar y eliminar
const [isEdit, setIsEdit] = useState(false)


/* ---------------------- */

const FormEdit = () => { //para editar

const [newValue, setNewValue] = useState(item.title); 
 //cuando cambie el texto actualizamos el estado

function handleSubmit(e){
    e.preventDefault(); //para que no se reinicie la pag
}

function handleChange(e){
    const value = e.target.value
    setNewValue(value)
}

function handleClickUpdateTodo(){
    onUpdate(item.id, newValue)
    setIsEdit(false);
}

  return (
    <form className='todoUpdateForm' onSubmit={handleSubmit}>
        <input type="text" className='todoInput' onChange={handleChange} value={newValue}/>
        <button className='button' onClick={handleClickUpdateTodo}>Update</button>
    </form>
  )
}


/* ----------------------------- */

const TodoElement = () => { //para que muestre todo
  return (
    <div className='todoInfo'>
       <span className='todotitle'>{item.title}</span> 
        <button className='button' onClick={() => setIsEdit(true)}>Editar</button>
         <button className='buttonDelete' onClick={(e) => onDelete(item.id) }>Eliminar</button>
        </div>
  )
}



/* ---------------------- */


  return (
    //el map esta en ToDoApp.js
<div className='todo'>
    {isEdit ? <FormEdit/> : <TodoElement/>} 



</div>


  )
}

export default Todo