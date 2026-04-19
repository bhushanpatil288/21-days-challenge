import { Container } from "../"
import DesktopMenu from "./DesktopMenu"
import HamburgerMenu from "./HamburgerMenu"
import ThemeToggle from "./ThemeToggle"
import "./header.css"

const navItems = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Contact",
        url: "/contact"
    }
]

const Header = () => {
    return (
        <Container>
            <header>
                <nav className="flex items-center justify-between select-none">
                    <div>
                        <img src="/logo.png" alt="" width={150} />
                    </div>
                    <div className="flex items-center gap-4">
                        <DesktopMenu navItems={navItems} />
                        <ThemeToggle />
                        <HamburgerMenu navItems={navItems} />
                    </div>
                </nav>
            </header>
        </Container>
    )
}

export default Header