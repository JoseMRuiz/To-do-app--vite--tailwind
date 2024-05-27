import { useState } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Todocomputed from "./components/Todocomputed";
import Todocreate from "./components/Todocreate";
import Todofilter from "./components/Todofilter";

const initialStateTodos= [
    {id: 1, title: "complete javascript course" , completed:false},
    {id: 2, title: "gimnasio" , completed:true},
    {id: 3, title: "estudio" , completed:false},
    {id: 4, title: "ducharse" , completed:true},
    {id: 5, title: "leer" , completed:true},
]

const app = () => {
  const [todos,setTodos] = useState(initialStateTodos);

  const createTodo = (title) =>{
    const newTodo = {
    id:Date.now(),
    title,
    completed: false,   
  };
  setTodos = ([...todos,newTodo]);
};

  return(
    <>
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain ">
      <Header/>

      <main className="mt-8 container mx-auto px-4">

          <Todocreate createTodo={createTodo}/>

          <TodoList todos={todos}/>

          <Todocomputed/>

          <Todofilter/>

      </main>

    

      <p className="text-center mt-8">Drag an drop to reorder list</p>
      
    </div>
    

    
    
    </>
  )
}

export default app;