"use client"

import "./ui/globals.css"
import { inter } from "./ui/fonts"
import clsx from "clsx"
import { GlobalContextProvider } from "./lib/globalContext"
import Header from "./ui/header"
import Footer from "./ui/footer"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="cs">
      <body className={clsx(
        inter.className,
        "bg-secondary text-white flex flex-col min-h-screen w-full items-center"
      )}>
        <GlobalContextProvider>
          <Header />
          <main className="mt-24 flex-grow w-full max-w-5xl px-3">
            { children }
          </main>
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  )
}

export default RootLayout