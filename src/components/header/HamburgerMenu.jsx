import { useState } from "react";
import { NavLink } from "react-router-dom"
import { TiThMenuOutline } from "react-icons/ti";


const HamburgerMenu = ({ navItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="hamMenu md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-3 hover:bg-lime-500 rounded-2xl cursor-pointer transition-all duration-200">
                <TiThMenuOutline size={25} />
            </button>
            <ul className={`flex flex-col gap-3 absolute text-center w-50 bg-limegreen-500 shadow rounded-2xl px-3 py-10 h-[calc(100vh-100px)] ${isOpen ? "active" : ""}`}>
                {navItems.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <NavLink to={item.url} className={({ isActive }) => isActive ? "bg-lime-500 rounded-2xl px-3 py-1 cursor-pointer shadow" : "hover:bg-lime-500 rounded-2xl px-3 py-1 cursor-pointer"}>{item.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HamburgerMenu