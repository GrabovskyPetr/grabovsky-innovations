import React, { ReactNode } from "react"
import clsx from "clsx"

interface PolygonProps {
    id: string
    className: string
    deviation: number
    glowColor: string
    children: ReactNode
    isAnimated: boolean
}

const Polygon: React.FC<PolygonProps> = React.memo(({ id, className, deviation = 0, glowColor, children, isAnimated = false }) => {

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
                <filter id={ id } x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation={ deviation } in="SourceGraphic" result="blur">
                        {isAnimated &&
                        <animate 
                            attributeName="stdDeviation"
                            values={ `${deviation}; ${deviation * 2}; ${deviation};` }
                            dur="2s" 
                            repeatCount="indefinite"
                        />
                        }
                    </feGaussianBlur>
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
                    filter={`url(#${ id })`}
                    d="M100 43.7449L75 87.0462L25 87.0462L5.16362e-07 43.7449L25 0.443635L75 0.443634L100 43.7449Z" 
                />
            </svg>
            { children }
        </div>
    )
})

Polygon.displayName = "Polygon"
export default Polygon