import React from 'react'
import CrossIcon from './CrossIcon';



const TodoItem = ({todo}) => {

    const {id,title,completed} = todo;

    return (
            <article className="  flex gap-4   border-b-gray-400 border-b ">
                <button className="rounded-full border-2 h-5 w-5 flex-none inline-block"></button>
                <p className=" text-gray-600 grow ">{title}</p>
                <button className=" flex-none"><CrossIcon/></button>
            </article>
    )
}