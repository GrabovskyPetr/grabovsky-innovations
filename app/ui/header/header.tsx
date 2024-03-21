import { Variants, motion } from "framer-motion"
import Logo from "./logo"
import Hamburger from "./hamburger"

const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 20, delay: 0.5 }
    }
}

const Header: React.FC = () => {
    return (
        <motion.header
            variants={ headerVariants }
            initial="hidden"
            animate="visible"
            className="w-full h-20 fixed inset-0 z-50 bg-header backdrop-blur-sm items-center flex flex-col"
        >
            <div className="w-full max-w-5xl h-full flex justify-between items-center px-3">
                <Logo className="h-14" />
                <Hamburger />                
            </div>
        </motion.header>
    )
}

export default Header