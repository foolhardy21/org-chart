import { employees, teams } from "./data/org.data";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CEO from "./components/CEO";
import HeadsSection from "./components/HeadsSection";
import TeamsSection from "./components/TeamsSection";
import MembersSection from "./components/MembersSection";


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

  useEffect(() => {
    setTeamMembers(allEmployees.filter(emp => emp.team === currentTeam))
  }, [allEmployees])

  useEffect(() => {
    setDepartmentTeams(allTeams.filter(team => team.department === currentDepartment))
  }, [allTeams])


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
      <CEO />
      <HeadsSection handleHeadClick={handleHeadClick} />
      <TeamsSection departmentTeams={departmentTeams} handleTeamClick={handleTeamClick} handleTeamEdit={handleTeamEdit} handleAddTeamClick={handleAddTeamClick} />
      <MembersSection teamMembers={teamMembers} handleMemberEdit={handleMemberEdit} handleAddMemberClick={handleAddMemberClick} />
      {
        modalType.length > 0 && <Modal type={modalType} allEmployees={allEmployees} setAllEmployees={setAllEmployees} allTeams={allTeams} setAllTeams={setAllTeams} currentTeam={currentTeam} currentDepartment={currentDepartment} setModalType={setModalType} toBeEditedTeam={toBeEditedTeam} toBeEditedMember={toBeEditedMember} />
      }
    </div>
  );
}

export default App;

// move members across teams
// remove members from the team
// view detailed info
// search members based on their details