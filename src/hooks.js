import { useEffect } from "react"
import { employees, teams } from "./data/org.data"

export const useInitialiseEmployees = (setAllEmployees) => {
    useEffect(() => {
        (() => {
            try {
                setAllEmployees([...employees])
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])
}


export const useInitialiseTeams = (setAllTeams) => {
    useEffect(() => {
        (async () => {
            try {
                setAllTeams([...teams])
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])
}

export const useInitialiseCeo = (allEmployees, setCeo) => {
    useEffect(() => {
        if (allEmployees.length > 0) {
            setCeo(allEmployees.find(emp => emp.designation === 'CEO'))
        }
    }, [allEmployees])
}

export const useUpdateTeamMembers = (setTeamMembers, allEmployees, currentTeam) => {
    useEffect(() => {
        setTeamMembers(allEmployees.filter(emp => emp.team === currentTeam))
    }, [allEmployees])
}

export const useUpdateTeams = (setHeadTeams, allTeams, currentHead) => {
    useEffect(() => {
        setHeadTeams(allTeams.filter(team => team.department === currentHead))
    }, [allTeams])
}