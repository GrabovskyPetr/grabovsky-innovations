import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

interface GlobalContextType {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<GlobalContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {}
})

export const useGlobalContext = (): GlobalContextType => {
    return useContext( GlobalContext )
}


interface GlobalContextProviderProps {
    children: ReactNode
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>( false )

    return (
        <GlobalContext.Provider
            value={{ isMenuOpen, setIsMenuOpen }}
        >
            { children }
        </GlobalContext.Provider>
    )
}