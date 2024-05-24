import React from 'react'

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">

            <div className="flex justify-between">

                <h1 className=" text-white text-3xl font-semibold tracking-[0.3em]  uppercase">Todo</h1>
                <button><MoonIcon className="fill-red-500" /></button>
            
            </div>

            <form className="mt-8 flex gap-4 bg-white rounded-md overflow-hidden py-4 px-4 items-center ">
                <span className=" rounded-full border-2 h-5 w-5 inline-block "></span>
                <input className=" w-full text-gray-400 outline-none" type="text" placeholder=" create a new todo.. " />
            </form>

        </header>
    )
}

export default Header