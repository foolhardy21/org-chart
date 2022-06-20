import { useState } from "react";
import { CEOSection, HeadsSection, TeamsSection, MembersSection, Modal, Header } from "./components";
import { useHeads, useTeams, useMembers, useEmployees } from "./contexts";
import { useInitialiseEmployees, useInitialiseTeams, useUpdateEmployeesData, useUpdateTeamMembers, useUpdateTeams } from "./hooks";

function App() {
  const [modalType, setModalType] = useState('')
  const { allEmployees, setAllEmployees } = useEmployees()
  const { setHeadTeams, currentHead, setCurrentHead } = useHeads()
  const { currentTeam, allTeams, setAllTeams, setCurrentTeam, setToBeEditedTeam } = useTeams()
  const { setTeamMembers, setToBeEditedMember } = useMembers()
  useInitialiseEmployees(setAllEmployees)
  useInitialiseTeams(setAllTeams)
  useUpdateTeams(setHeadTeams, allTeams, currentHead)
  useUpdateTeamMembers(setTeamMembers, allEmployees, currentTeam)

  function handleHeadClick(selectedDepartment) {
    setCurrentHead(selectedDepartment)
    setHeadTeams(allTeams.filter(team => team.department === selectedDepartment))
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
    setToBeEditedTeam(allTeams.find(team => team.id === teamId))
  }

  function handleMemberEdit(memberId) {
    setModalType('edit_member')
    setToBeEditedMember(allEmployees.find(emp => emp.id === memberId))
  }

  function handleMemberMove(memberId) {
    setModalType('move_member')
    setToBeEditedMember(allEmployees.find(emp => emp.id === memberId))
  }

  function handleMemberView(memberId) {
    setModalType('view_member')
    setToBeEditedMember(allEmployees.find(emp => emp.id === memberId))
  }

  return (
    <div className='flx flx-column'>
      <Header handleMemberView={handleMemberView} />
      <CEOSection setModalType={setModalType} setToBeEditedMember={setToBeEditedMember} />
      <HeadsSection setModalType={setModalType} setToBeEditedMember={setToBeEditedMember} handleHeadClick={handleHeadClick} />
      <TeamsSection handleTeamClick={handleTeamClick} handleTeamEdit={handleTeamEdit} handleAddTeamClick={handleAddTeamClick} />
      <MembersSection handleMemberEdit={handleMemberEdit} handleAddMemberClick={handleAddMemberClick} handleMemberMove={handleMemberMove} handleMemberView={handleMemberView} />
      {
        modalType.length > 0 && <Modal type={modalType} setModalType={setModalType} />
      }
    </div>
  );
}

export default App;
