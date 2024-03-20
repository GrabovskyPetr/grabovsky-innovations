import Polygon from "./common/polygon"
import { motion } from "framer-motion"
import { CgMenuGridR } from "react-icons/cg"
import { RxCross2 } from "react-icons/rx"
import { useGlobalContext } from "../lib/globalContext"
import { useEffect, useCallback } from "react"
import throttle from "lodash/throttle"

const menuIconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 90 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5 } }
}

const crossIconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5 } }
}

const Hamburger: React.FC = () => {
    const { isMenuOpen, setIsMenuOpen } = useGlobalContext()    

    const handleToggleMenu = useCallback(throttle(() => {
        setIsMenuOpen( prevState => !prevState )
    }, 500), [])

    useEffect(() => {
        return () => {
            handleToggleMenu.cancel()
        }
    }, [])

    return (
        <button
            onClick={ handleToggleMenu }
            aria-label={ isMenuOpen ? "Skrýt menu" : "Zobrazit menu" }
            className="w-12 h-12"
        >
            <Polygon 
                id="hamburger"
                className="w-full h-full fill-secondary" 
                glowColor={ isMenuOpen ? "var(--color-fifth)" : "var(--color-fourth)" }
                deviation={ 10 }
                isAnimated={ true }
            >
                 <motion.div
                    initial="hidden"
                    animate={ isMenuOpen ? "hidden" : "visible" }
                    variants={ menuIconVariants }
                    className="absolute inset-0 flex justify-center items-center"
                >
                    <CgMenuGridR className="text-third text-2xl" />
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={ isMenuOpen ? "visible" : "hidden" }
                    variants={ crossIconVariants }
                    className="absolute inset-0 flex justify-center items-center"
                >
                    <RxCross2 className="text-third text-2xl" />
                </motion.div>
            </Polygon>
        </button>
    )
}

export default Hamburger