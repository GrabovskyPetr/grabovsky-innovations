import { motion, Variants } from "framer-motion"
import { 
    drawOutlineLogoPrimaryPath, 
    drawOutlineLogoSecondaryPath,
    disassembleLogoPrimaryPath,
    disassembleLogoSecondaryPath
} from "@/app/lib/animations"
import { useEffect, useState } from "react"

interface LogoProps {
    className: string
}

interface AnimationVariants {
    primaryPath: Variants
    secondaryPath: Variants
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    const [ animation, setAnimation ] = useState<AnimationVariants>({
        primaryPath: drawOutlineLogoPrimaryPath,
        secondaryPath: drawOutlineLogoSecondaryPath
    })
    
    return (
        <svg
            className={ className }
            viewBox="0 0 251 251"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                variants={ animation.primaryPath }
                initial="initial"
                animate="animate"
                d="M200.51 0.659088H100.51C45.2819 0.659088 0.510391 45.4306 0.510391 100.659C0.510391 
                    155.888 45.2819 200.659 100.51 200.659H200.51L150.51 150.659H125.51C97.8962 150.659 
                    75.5104 128.273 75.5104 100.659C75.5104 73.0449 97.8962 50.6591 125.51 50.6591H250.51L200.51 
                    0.659088Z"                
            />
            <motion.path
                variants={ animation.secondaryPath }
                initial="initial"
                animate="animate"
                d="M150.51 100.659H200.51H250.51V200.659V250.659L200.51 200.659V150.659L150.51 100.659Z"                
            />
        </svg>
    )
}

export default Logo