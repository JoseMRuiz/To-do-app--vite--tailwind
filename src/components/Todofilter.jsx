
import React from 'react'

const Todofilter = () => {
    return (
        <>

        <section className="container  mx-auto mt-8 px-4">
            <div className=" flex justify-center bg-white p-4 rounded-md gap-4 ">
            <button className=" text-blue-600"> All </button>
            <button className=" hover:text-blue-600"> Active </button>
            <button className=" hover:text-blue-600"> Completed </button>
            </div>
        </section>
        
        </>
        
    )
}

export default Todofilter;