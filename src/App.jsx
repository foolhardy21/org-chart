import { employees, teams } from "./data/org.data";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const ceo = employees.find(emp => emp.designation === 'CEO')
  const heads = employees.filter(emp => emp.designation === 'Head')
  const [departmentTeams, setDepartmentTeams] = useState([])
  const [currentTeam, setCurrentTeam] = useState('')
  const [currentDepartment, setCurrentDepartment] = useState('')
  const [teamMembers, setTeamMembers] = useState([])
  const [modalType, setModalType] = useState('')

  function handleHeadClick(selectedDepartment) {
    setCurrentDepartment(selectedDepartment)
    setDepartmentTeams(teams.filter(team => team.department === selectedDepartment))
    setTeamMembers([])
  }

  function handleTeamClick(selectedTeam) {
    setCurrentTeam(selectedTeam)
    setTeamMembers(employees.filter(emp => emp.team === selectedTeam))
  }

  function handleAddMemberClick() {
    setModalType('add_member')
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
          heads?.map(head => <article key={head._id} onClick={() => handleHeadClick(head.department)} className="card-dim card-shadow-xs pd-md mg-xs">
            <p>{head.name}</p>
            <p>{head.department}</p>
          </article>)
        }
      </section>
      <p className="mg-top-md mg-top-s">teams</p>
      <section className="flx">
        {
          departmentTeams?.map(team => <article key={team._id} onClick={() => handleTeamClick(team.name)} className="card-dim card-shadow-xs pd-md mg-xs">
            <p>{team.name}</p>
            <p>{team.department}</p>
          </article>)
        }
      </section>
      <p className="mg-top-md mg-top-s">members</p>
      <section className="flx">
        {
          teamMembers?.map(member => <article key={member._id} className="card-dim card-shadow-xs pd-md mg-xs">
            <p>{member.name}</p>
            <p>{member.designation}</p>
          </article>)
        }
        <article onClick={handleAddMemberClick} className="card-dim card-shadow-xs pd-md mg-xs">
          <p>add a member</p>
        </article>
      </section>
      {
        modalType.length > 0 && <Modal type={modalType} teamMembers={teamMembers} setTeamMembers={setTeamMembers} currentTeam={currentTeam} currentDepartment={currentDepartment} setModalType={setModalType} />
      }
    </div>
  );
}

export default App;
