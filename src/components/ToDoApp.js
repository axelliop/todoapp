import React, { useState } from 'react'
import Todo from './Todo';
import "./todoapp.css"
const ToDoApp = () => {
// ------------ MANEJO DEL ESTADO, HOOKS. ---------------------- // 

        const [title, setTitle] = useState("Hola"); /* donde esta el parentesis es el valor inicial, iria un string vacio */
        const [todos, setTodos] = useState([]) //cada vez que de enter tomo el valor de Title e inserto el valor de To Do


        let uuid = self.crypto.randomUUID() //IMPORTANTE, ME GENERA UN ID RANDOM





        function handleChange(event){ // cada vez que escribo me actualiza el estado
            const value = event.target.value;
             /* hago uso de mi parametro, accedo a la propiedad de value */
            setTitle(value)
        }



        function handleSubmit(e){
            e.preventDefault();

            const newTodo = {
                id: crypto.randomUUID(),
                title: title,
                completed: false
            }

            const temp = [...todos]
            temp.unshift(newTodo) // agregar una tarea, le sumo un title que yo coloque

            setTodos(temp);
        }

        function handleUpdate(id, value){
            const temp = [...todos];
            const item = temp.find((item) => item.id === id) // si la encuentro iterm title sera igual al nuevo valor
            item.title = value;
            setTodos(temp)
        }

        function handleDelete(id){  //al tocar delete
            const temp = todos.filter(item => item.id !== id) //buscamos para cada item, buscamos un item diferente a ese id, nos regresa una nueva copia de ese arreglo

            setTodos(temp)
        }


        

  return (
    <div className='todoContainer'>
        <form className='todoCreateForm' onSubmit={handleSubmit}>
            <input onChange={handleChange} className='todoInput' value={title}/>

            <input 
            onClick={handleSubmit} 
            type='submit'
             value='Create Todo' 
             className='buttonCreate'
             /> {/* seteo el title con axelin */}
        </form>

<div className='todosContainer'>
    {
    todos.map((item) => (
            <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))
    } 
</div>

         </div>
  )
}

export default ToDoApp