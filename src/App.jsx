import CrossIcon from "./components/CrossIcon";

const app = () => {
  return(
    <>
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain ">

      <header className="container mx-auto px-4 pt-8">

        <div className="flex justify-between">

        <h1 className=" text-white text-3xl font-semibold tracking-[0.3em]  uppercase">Todo</h1>
        <button>luna</button>
        
        </div>

        <form className="mt-8 flex gap-4 bg-white rounded-md overflow-hidden py-4 px-4 items-center ">
          <span className=" rounded-full border-2 h-5 w-5 inline-block "></span>
          <input className=" w-full text-gray-400 outline-none" type="text" placeholder=" create a new todo.. " />
        </form>

      </header>

      <main className="mt-8 container mx-auto px-4">

        <div className=" rounded-md  bg-white">

          <article className="  flex gap-4 py-4 px-4 border-b-gray-400 border-b ">
            <button className="rounded-full border-2 h-5 w-5 flex-none inline-block"></button>
            <p className=" text-gray-600 grow ">complete online javascript course in bluweeb</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>


          <article className="  flex gap-4 py-4 px-4 border-b-gray-400 border-b ">
            <button className="rounded-full border-2 h-5 w-5 flex-none inline-block"></button>
            <p className=" text-gray-600 grow ">complete online javascript course in bluweeb</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>


          <article className="  flex gap-4 py-4 px-4 border-b-gray-400 border-b ">
            <button className="rounded-full border-2 h-5 w-5 flex-none inline-block"></button>
            <p className=" text-gray-600 grow ">complete online javascript course in bluweeb</p>
            <button className=" flex-none"><CrossIcon/></button>
          </article>


          <section className="py-4 px-4">
            <span className=" text-gray-400">5 items left...</span>
            <button className=" text-gray-400">clear completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4">
        <button> All </button>
        <button> Active </button>
        <button> Completed </button>
      </section>

      <p className="text-center">Drag an drop to reorder list</p>
      
    </div>
    

    
    
    </>
  )
}

export default app;