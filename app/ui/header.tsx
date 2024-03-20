"use client"

import Logo from "./logo"
import Hamburger from "./hamburger"

const Header: React.FC = () => {
    return (
        <header className="w-full h-20 fixed inset-0 z-50 bg-header backdrop-blur-sm items-center flex flex-col">
            <div className="w-full max-w-5xl h-full flex justify-between items-center px-3">
                <Logo className="h-14" />
                <Hamburger />                
            </div>
        </header>
    )
}

export default Header