import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const app = () => {
  return(
    <>
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain ">

      <main className="mt-8 container mx-auto px-4">

        <div className=" rounded-md [&>article]:p-4 bg-white">

          <article className="  flex gap-4   border-b-gray-400 border-b ">
            <button className="rounded-full border-2 h-5 w-5 flex-none inline-block"></button>
            <p className=" text-gray-600 grow ">complete online javascript course in bluweeb</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>


          <article className="  flex gap-4   border-b-gray-400 border-b ">
            <button className="rounded-full border-2 h-5 w-5 flex-none inline-block"></button>
            <p className=" text-gray-600 grow ">complete online javascript course in bluweeb</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>


          <article className="  flex gap-4  border-b-gray-400 border-b ">
            <button className="rounded-full border-2 h-5 w-5 flex-none inline-block"></button>
            <p className=" text-gray-600 grow ">complete online javascript course in bluweeb</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>


          <section className="flex justify-between py-4 px-4">
            <span className=" text-gray-400">5 items left...</span>
            <button className=" text-gray-400">clear completed</button>
          </section>
        </div>
      </main>

      <section className="container  mx-auto mt-8 px-4">

        <div className=" flex justify-center bg-white p-4 rounded-md gap-4 ">
          <button className=" text-blue-600"> All </button>
          <button className=" hover:text-blue-600"> Active </button>
          <button className=" hover:text-blue-600"> Completed </button>
        </div>
        
      </section>

      <p className="text-center mt-8">Drag an drop to reorder list</p>
      
    </div>
    

    
    
    </>
  )
}

export default app;