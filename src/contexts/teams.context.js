import { createContext, useContext, useState } from "react";
import { teams } from "../data/org.data";

const TeamsContext = createContext()

export const TeamsProvider = ({ children }) => {
    const [allTeams, setAllTeams] = useState(teams)
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