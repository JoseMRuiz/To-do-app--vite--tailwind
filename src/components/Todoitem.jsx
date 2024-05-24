import React from 'react'
import CrossIcon from './CrossIcon'

const Todoitem = () => {
    return (
        <article className="  flex gap-4  border-b-gray-400 border-b ">
                <button className="rounded-full border-2 h-5 w-5 flex-none inline-block"></button>
                <p className=" text-gray-600 grow ">complete online javascript course in bluweeb</p>
                <button className=" flex-none"><CrossIcon/></button>
            </article>
    )
}

export default Todoitem;
