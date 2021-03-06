import { createContext, useContext, useState } from "react";

const TeamsContext = createContext()

export const TeamsProvider = ({ children }) => {
    const [allTeams, setAllTeams] = useState([])
    const [currentTeam, setCurrentTeam] = useState('')
    const [toBeEditedTeam, setToBeEditedTeam] = useState({})

    return (
        <TeamsContext.Provider
            value={{
                allTeams, setAllTeams,
                currentTeam, setCurrentTeam,
                toBeEditedTeam, setToBeEditedTeam
            }}
        >
            {children}
        </TeamsContext.Provider>
    )
}

export const useTeams = () => useContext(TeamsContext)