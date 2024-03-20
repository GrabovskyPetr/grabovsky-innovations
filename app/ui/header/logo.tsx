import { motion, useAnimation } from "framer-motion"
import { useState } from "react"
import { 
    drawOutlineLogoPrimary, 
    drawOutlineLogoSecondary,
    unfoldRotateLogoPrimary,
    unfoldRotateLogoSecondary
} from "@/app/lib/animations"

interface LogoProps {
    className: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    const [ animationType, setAnimationType ] = useState<"drawOutline" | "unfoldRotate">( "drawOutline" )
    const controls = useAnimation()

    const startAnimation = async () => {
        if ( animationType === "drawOutline" ) {
            await controls.start( "animate" )
        } else {
            await controls.start( "animate" )
        }
    }

    const toggleAnimationType = () => {
        setAnimationType( prevType => prevType === "drawOutline" ? "unfoldRotate" : "drawOutline" )
    } 

    return (
        <svg
            onClick={ startAnimation }
            className={ className }
            viewBox="0 0 251 251"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                variants={ animationType === 'drawOutline' ? drawOutlineLogoPrimary : unfoldRotateLogoPrimary }
                initial="initial"
                animate={ controls }
                d="M200.51 0.659088H100.51C45.2819 0.659088 0.510391 45.4306 0.510391 100.659C0.510391 
                    155.888 45.2819 200.659 100.51 200.659H200.51L150.51 150.659H125.51C97.8962 150.659 
                    75.5104 128.273 75.5104 100.659C75.5104 73.0449 97.8962 50.6591 125.51 50.6591H250.51L200.51 
                    0.659088Z"                
            />
            <motion.path
                variants={ animationType === 'drawOutline' ? drawOutlineLogoSecondary : unfoldRotateLogoSecondary }
                initial="initial"
                animate={ controls }
                d="M150.51 100.659H200.51H250.51V200.659V250.659L200.51 200.659V150.659L150.51 100.659Z"                
            />
        </svg>
    )
}

export default Logo