import React from 'react'
import MoonIcon from './MoonIcon'

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">

            <div className="flex justify-between">

                <h1 className=" text-white text-3xl font-semibold tracking-[0.3em]  uppercase">Todo</h1>
                <button><MoonIcon className="fill-white" /></button>
            
            </div>

            

        </header>
    )
}

export default Header