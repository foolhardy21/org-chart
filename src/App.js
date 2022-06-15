import { employees, teams } from "./data/org.data";
// import styles from './app.module.css'
import { useState } from "react";

function App() {
  const [ceo, setCeo] = useState(employees.find(emp => emp.designation === 'CEO'))
  const [heads, setHeads] = useState(employees.filter(emp => emp.designation === 'Head'))
  const [currentTeams, setCurrentTeams] = useState([])
  const [currentMembers, setCurrentMembers] = useState([])

  function handleHeadClick(selectedDepartment) {
    setCurrentTeams(teams.filter(team => team.department === selectedDepartment))
  }

  function handleTeamClick(selectedTeam) {
    setCurrentMembers(employees.filter(emp => emp.team === selectedTeam))
  }

  return (
    <div className='flx flx-column flx-center'>
      <article className={`card-dim card-shadow-xs pd-md`}>
        <p>ceo</p>
        <p>{ceo.name}</p>
      </article>
      <p className="mg-top-md mg-top-s">heads</p>
      <section className="flx">
        {
          heads?.map(head => <article onClick={() => handleHeadClick(head.department)} className="card-dim card-shadow-xs pd-md">
            <p>{head.name}</p>
            <p>{head.department}</p>
          </article>)
        }
      </section>
      <p className="mg-top-md mg-top-s">teams</p>
      <section className="flx">
        {
          currentTeams?.map(team => <article onClick={() => handleTeamClick(team.name)} className="card-dim card-shadow-xs pd-md">
            <p>{team.name}</p>
            <p>{team.department}</p>
          </article>)
        }
      </section>
      <p className="mg-top-md mg-top-s">members</p>
      <section className="flx">
        {
          currentMembers?.map(member => <article className="card-dim card-shadow-xs pd-md">
            <p>{member.name}</p>
            <p>{member.designation}</p>
          </article>)
        }
      </section>
    </div>
  );
}

export default App;
