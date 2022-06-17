import { createContext, useContext, useState } from "react";

const EmployeesContext = createContext()

export const EmployeesProvider = ({ children }) => {
    const [allEmployees, setAllEmployees] = useState([])

    return (
        <EmployeesContext.Provider
            value={{
                allEmployees, setAllEmployees
            }}
        >
            {children}
        </EmployeesContext.Provider>
    )
}

export const useEmployees = () => useContext(EmployeesContext)