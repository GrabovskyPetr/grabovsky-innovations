import { Variants } from "framer-motion"

export const drawOutlineLogoPrimaryPath: Variants = {
    initial: {
        pathLength: 0, 
        fill: "#00000000", 
        stroke: "var(--color-third)"
    },
    animate: {
        pathLength: 1, 
        fill: "var(--color-third)", 
        stroke: "#00000000",
        transition: {
            pathLength: { delay: 1.2, type: "spring", duration: 2, bounce: 0 }, 
            fill: { delay: 3, duration: 1 }, 
            stroke: { delay: 4, duration: 0.5 }
        }
    }
}

export const drawOutlineLogoSecondaryPath: Variants = {
    initial: {
        pathLength: 0, 
        fill: "#00000000", 
        stroke: "var(--color-sixth)"
    },
    animate: {
        pathLength: 1, 
        fill: "var(--color-sixth)", 
        stroke: "#00000000",
        transition: { 
            pathLength: { delay: 1.2, type: "spring", duration: 2, bounce: 0 }, 
            fill: { delay: 3, duration: 1 }, 
            stroke: { delay: 4, duration: 0.5 }
        }
    }
}