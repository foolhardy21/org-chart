import { createContext, useContext, useState } from "react";
import { teams } from "../data/org.data";

const MembersContext = createContext()

export const MembersProvider = ({ children }) => {
    const [toBeEditedMember, setToBeEditedMember] = useState({})
    const [teamMembers, setTeamMembers] = useState([])

    return (
        <MembersContext.Provider
            value={{
                toBeEditedMember, setToBeEditedMember,
                teamMembers, setTeamMembers
            }}
        >
            {children}
        </MembersContext.Provider>
    )
}

export const useMembers = () => useContext(MembersContext)