import CrossIcon from "./components/CrossIcon";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Todocomputed from "./components/Todocomputed";
import Todocreate from "./components/Todocreate";

const app = () => {
  return(
    <>
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain ">
      <Header/>

      <main className="mt-8 container mx-auto px-4">

          <Todocreate/>

          <TodoList/>

          <Todocomputed/>
 
      </main>

     

      <p className="text-center mt-8">Drag an drop to reorder list</p>
      
    </div>
    

    
    
    </>
  )
}

export default app;