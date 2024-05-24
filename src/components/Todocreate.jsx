import React from 'react'

const Todocreate = () => {
    return (
        <form className="mt-8 flex gap-4 bg-white rounded-md overflow-hidden py-4 px-4 items-center ">
                <span className=" rounded-full border-2 h-5 w-5 inline-block "></span>
                <input className=" w-full text-gray-400 outline-none" type="text" placeholder=" create a new todo.. " />
        </form>
    ) 
}

export default Todocreate