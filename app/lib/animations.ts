import { Variants } from "framer-motion"

export const drawOutlineLogoPrimary: Variants = {
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
            pathLength: { type: "spring", duration: 2, bounce: 0 }, 
            fill: { delay: 2, duration: 1 }, 
            stroke: { delay: 3, duration: 0.5 }
        }
    }
}

export const drawOutlineLogoSecondary: Variants = {
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
            pathLength: { type: "spring", duration: 2, bounce: 0, delay: 2.5 }, 
            fill: { delay: 4.5, duration: 1 }, 
            stroke: { delay: 5.5, duration: 0.5 }
        }
    }
}

export const unfoldRotateLogoPrimary: Variants = {
    initial: {
        scale: 0.5,
        rotate: -90,
        opacity: 0
    },
    animate: {
        scale: 1,
        rotate: 0,
        opacity: 1,
        transition: {
            scale: { duration: 1, ease: "easeOut" },
            rotate: { duration: 1.2, ease: "easeOut" },
            opacity: { duration: 0.8, ease: "easeOut" }
        }
    }
}

export const unfoldRotateLogoSecondary: Variants = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            y: { type: "spring", stiffness: 100, duration: 1.5 },
            opacity: { duration: 1 }
        }
    }
}