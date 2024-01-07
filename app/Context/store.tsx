"use client"

import React, { createContext, useContext, useState } from 'react'

interface AppContextType{
  navState: boolean,
  setNavState: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

export default function ContextProvider({children}:{children : React.ReactNode}) {
    const [navState, setNavState] = useState<boolean>(true)
  return (
    <AppContext.Provider value={{navState, setNavState}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};