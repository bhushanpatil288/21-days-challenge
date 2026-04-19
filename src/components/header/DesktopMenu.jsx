import { Link, NavLink } from 'react-router-dom'

const DesktopMenu = ({ navItems }) => {
    return (
        <ul className="hidden md:flex gap-3">
            {navItems.map((item, idx) => {
                return (
                    <li key={idx}>
                        <NavLink to={item.url} className={({ isActive }) => isActive ? "bg-nav-active text-nav-active-text shadow rounded-2xl px-3 py-1 cursor-pointer" : "hover:bg-nav-hover rounded-2xl px-3 py-1 cursor-pointer"}>{item.name}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default DesktopMenu