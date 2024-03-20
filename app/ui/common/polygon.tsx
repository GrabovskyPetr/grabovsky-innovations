import React, { ReactNode, useRef, useMemo } from "react"
import { motion } from "framer-motion"
import { v4 } from "uuid"
import clsx from "clsx"

interface PolygonProps {
    className: string
    deviation: number
    glowColor: string
    children: ReactNode
    isAnimated?: boolean
}

const Polygon: React.FC<PolygonProps> = React.memo(({ className, deviation, glowColor, children, isAnimated = false }) => {
    const filterId = useRef( v4() ).current
    
    const glowVariants = useMemo(() => ({
        active: {
            stdDeviation: [ deviation, deviation * 2, deviation ],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        },
        inactive: {
            stdDeviation: deviation
        },
    }), [ deviation ])

    return (
        <div 
            className={clsx(
                className,
                "relative flex flex-col items-center justify-center"
        )}>
            <svg 
                className="w-full h-full absolute inset-0 overflow-visible"
                viewBox="0 0 100 88"
                xmlns="http://www.w3.org/2000/svg"
            >
                <filter id={ filterId } x="-50%" y="-50%" width="200%" height="200%">
                <motion.feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation={ deviation }
                        animate={ isAnimated ? "active" : "inactive" }
                        variants={ glowVariants }
                        result="blur"
                    />
                    <feFlood 
                        floodColor={ glowColor }
                        result="color"
                        className="transition-all duration-500 ease-in-out"
                    />
                    <feComposite in="color" in2="blur" operator="in" result="compositeResult" />
                    <feMerge>
                        <feMergeNode in="compositeResult" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <path
                    filter={`url(#${ filterId })`}
                    d="M100 43.7449L75 87.0462L25 87.0462L5.16362e-07 43.7449L25 0.443635L75 0.443634L100 43.7449Z" 
                />
            </svg>
            { children }
        </div>
    )
})

export default Polygon