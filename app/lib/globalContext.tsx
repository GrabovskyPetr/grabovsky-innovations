import { 
    Dispatch, ReactNode, SetStateAction, createContext, 
    useContext, useState, useEffect 
} from "react"
import throttle from "lodash/throttle"

interface GlobalContextType {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
    isScreenSmall: boolean
    isScrollTop: boolean
}

const GlobalContext = createContext<GlobalContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
    isScreenSmall: true,
    isScrollTop: true
})

export const useGlobalContext = (): GlobalContextType => {
    return useContext( GlobalContext )
}


interface GlobalContextProviderProps {
    children: ReactNode
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>( false )
    const [ isScreenSmall, setIsScreenSmall ] = useState<boolean>( true )
    const [ isScrollTop, setIsScrollTop ] = useState<boolean>( true )

    const handleScreenResize = throttle(() => {
        const screenIsSmall = window.innerWidth < 640
        setIsScreenSmall( screenIsSmall )
        if ( !screenIsSmall ) setIsMenuOpen( false )   
    }, 100)

    const handleScroll = throttle(() => {
        const scrollIsTop = window.scrollY < 50
        setIsScrollTop( scrollIsTop )
    }, 100)

    useEffect(() => {
        if ( typeof window === "undefined" ) return
      
        window.addEventListener( "resize", handleScreenResize )
        window.addEventListener( "scroll", handleScroll )
      
        handleScreenResize()
        handleScroll()
      
        return () => {
          window.removeEventListener( "resize", handleScreenResize )
          window.removeEventListener( "scroll", handleScroll )
          handleScreenResize.cancel()
          handleScroll.cancel()
        }
      }, [])

    return (
        <GlobalContext.Provider
            value={{ isMenuOpen, setIsMenuOpen, isScreenSmall, isScrollTop }}
        >
            { children }
        </GlobalContext.Provider>
    )
}