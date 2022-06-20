import { useEffect } from "react"
import { employees, teams } from "./data/org.data"

export const useInitialiseEmployees = (setAllEmployees) => {
    useEffect(() => {
        (() => {
            try {
                localStorage.setItem('employees', JSON.stringify(employees))
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
                localStorage.setItem('teams', JSON.stringify(teams))
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

export const updateEmployeesData = (newEmployees) => {
    localStorage.setItem('employees', JSON.stringify([...newEmployees]))
}

export const updateTeamsData = (newTeams) => {
    localStorage.setItem('teams', JSON.stringify([...newTeams]))
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