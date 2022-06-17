import axios from "axios"
import { useEffect } from "react"

export const useInitialiseEmployees = (setAllEmployees) => {
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:3001/employees')
                setAllEmployees([...response.data])
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
                const response = await axios.get('http://localhost:3001/teams')
                setAllTeams([...response.data])
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