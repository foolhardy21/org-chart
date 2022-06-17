import { createContext, useContext, useState } from "react";

const HeadsContext = createContext()

export const HeadsProvider = ({ children }) => {
    const [headTeams, setHeadTeams] = useState([])
    const [currentHead, setCurrentHead] = useState('')

    return (
        <HeadsContext.Provider
            value={{
                headTeams, setHeadTeams,
                currentHead, setCurrentHead
            }}
        >
            {children}
        </HeadsContext.Provider>
    )
}

export const useHeads = () => useContext(HeadsContext)