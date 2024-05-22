const app = () => {
  return(
    <>
    <div className=" bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain ">

      <header className="container mx-auto px-4">
        <div className="flex justify-between">

        <h1 className=" uppercase">Todo</h1>
        <button>luna</button>
        
        </div>

        <form >
          <input type="text" placeholder=" create a new todo.. " />
        </form>

      </header>

      <main className=" container mx-auto px-4">

        <article className="">
          <button>circulo</button>
          <p>complete online javascript course in bluweeb</p>
          <button>exis</button>
        </article>
        <article className="">
          <button>circulo</button>
          <p>complete online javascript course in bluweeb</p>
          <button>exis</button>
        </article>
        <article className="">
          <button>circulo</button>
          <p>complete online javascript course in bluweeb</p>
          <button>exis</button>
        </article>
        <section>
          <span>5 items left...</span>
          <button>clear completed</button>
        </section>

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