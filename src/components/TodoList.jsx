import React from 'react'
import CrossIcon from './CrossIcon'

const TodoList = () => {
    return (
        <>
        <div className="mt-8 rounded-md [&>article]:p-4 bg-white">

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
            </div>
        
        </>
        
    )
}

export default TodoList