import { NavItem } from "./definitions"
import { ImHome3 } from "react-icons/im"
import { IoIosPerson } from "react-icons/io"
import { FaDiagramProject } from "react-icons/fa6"
import { PiPhoneFill } from "react-icons/pi"

const navItems: NavItem[] = [
    { name: "Domů", href: "/", Icon: ImHome3 },
    { name: "O mně", href: "/aboutMe", Icon: IoIosPerson },
    { name: "Projekty", href: "/projects", Icon: FaDiagramProject },
    { name: "Kontakty", href: "/contacts", Icon: PiPhoneFill }
]

export default navItems