import { employees, teams } from "./data/org.data";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

const ceo = employees.find(emp => emp.designation === 'CEO')
const heads = employees.filter(emp => emp.designation === 'Head')

function App() {
  const [allEmployees, setAllEmployees] = useState(employees)
  const [allTeams, setAllTeams] = useState(teams)
  const [departmentTeams, setDepartmentTeams] = useState([])
  const [currentDepartment, setCurrentDepartment] = useState('')
  const [currentTeam, setCurrentTeam] = useState('')
  const [toBeEditedTeam, setToBeEditedTeam] = useState({})
  const [toBeEditedMember, setToBeEditedMember] = useState({})
  const [teamMembers, setTeamMembers] = useState([])
  const [modalType, setModalType] = useState('')

  function handleHeadClick(selectedDepartment) {
    setCurrentDepartment(selectedDepartment)
    setDepartmentTeams(allTeams.filter(team => team.department === selectedDepartment))
    setTeamMembers([])
  }

  function handleTeamClick(selectedTeam) {
    setCurrentTeam(selectedTeam)
    setTeamMembers(allEmployees.filter(emp => emp.team === selectedTeam))
  }

  function handleAddMemberClick() {
    setModalType('add_member')
  }

  function handleAddTeamClick() {
    setModalType('add_team')
  }

  useEffect(() => {
    setTeamMembers(allEmployees.filter(emp => emp.team === currentTeam))
  }, [allEmployees])

  useEffect(() => {
    setDepartmentTeams(allTeams.filter(team => team.department === currentDepartment))
  }, [allTeams])

  function handleTeamEdit(teamId) {
    setModalType('edit_team')
    setToBeEditedTeam(allTeams.find(team => team._id === teamId))
  }

  function handleMemberEdit(memberId) {
    setModalType('edit_member')
    setToBeEditedMember(allEmployees.find(emp => emp._id === memberId))
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
            <button onClick={() => handleTeamEdit(team._id)}>edit</button>
          </article>)
        }
        <article onClick={handleAddTeamClick} className="card-dim card-shadow-xs pd-md mg-xs">
          <p>add a team</p>
        </article>
      </section>
      <p className="mg-top-md mg-top-s">members</p>
      <section className="flx">
        {
          teamMembers?.map(member => <article key={member._id} className="card-dim card-shadow-xs pd-md mg-xs">
            <p>{member.name}</p>
            <p>{member.designation}</p>
            <button onClick={() => handleMemberEdit(member._id)}>edit</button>
          </article>)
        }
        <article onClick={handleAddMemberClick} className="card-dim card-shadow-xs pd-md mg-xs">
          <p>add a member</p>
        </article>
      </section>
      {
        modalType.length > 0 && <Modal type={modalType} allEmployees={allEmployees} setAllEmployees={setAllEmployees} allTeams={allTeams} setAllTeams={setAllTeams} currentTeam={currentTeam} currentDepartment={currentDepartment} setModalType={setModalType} toBeEditedTeam={toBeEditedTeam} toBeEditedMember={toBeEditedMember} />
      }
    </div>
  );
}

export default App;
