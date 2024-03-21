import { Variants } from "framer-motion"

export const drawOutlineLogoPrimaryPath: Variants = {
    initial: {
        pathLength: 0, 
        fill: "#00000000", 
        stroke: "#F6F6F6"
    },
    animate: {
        pathLength: 1, 
        fill: "#F6F6F6", 
        stroke: "#00000000",
        transition: {
            pathLength: { delay: 1.2, type: "spring", duration: 2, bounce: 0 }, 
            fill: { delay: 4, duration: 1 }, 
            stroke: { delay: 4, duration: 0.5 }
        }
    }
}

export const drawOutlineLogoSecondaryPath: Variants = {
    initial: {
        pathLength: 0, 
        fill: "#00000000", 
        stroke: "#84BF61"
    },
    animate: {
        pathLength: 1, 
        fill: "#84BF61", 
        stroke: "#00000000",
        transition: { 
            pathLength: { delay: 1.2, type: "spring", duration: 2, bounce: 0 }, 
            fill: { delay: 4, duration: 1 }, 
            stroke: { delay: 4, duration: 0.5 }
        }
    }
}

export const disassembleLogoPrimaryPath: Variants = {
    initial: {
        pathLength: 1,
        opacity: 1,
    },
    disassemble: {
        pathLength: 0,
        opacity: 0,
        transition: { duration: 1 },
    },
    reassemble: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1, delay: 1 }
    }
}

export const disassembleLogoSecondaryPath: Variants = {
    initial: {
        pathLength: 1,
        opacity: 1,
    },
    disassemble: {
        pathLength: 0,
        opacity: 0,
        transition: { duration: 1 },
    },
    reassemble: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1, delay: 1 }
    }
}