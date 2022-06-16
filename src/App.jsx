import { employees } from "./data/org.data";
import { useEffect, useState } from "react";
import { CEOSection, HeadsSection, TeamsSection, MembersSection, Modal, Header } from "./components";
import { useHeads, useTeams, useMembers } from "./contexts";

function App() {
  const [allEmployees, setAllEmployees] = useState(employees)
  const [modalType, setModalType] = useState('')
  const { setHeadTeams, currentHead, setCurrentHead } = useHeads()
  const { currentTeam, allTeams, setCurrentTeam, setToBeEditedTeam } = useTeams()
  const { setTeamMembers, setToBeEditedMember } = useMembers()

  useEffect(() => {
    setTeamMembers(allEmployees.filter(emp => emp.team === currentTeam))
  }, [allEmployees])

  useEffect(() => {
    setHeadTeams(allTeams.filter(team => team.department === currentHead))
  }, [allTeams])

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
    setToBeEditedTeam(allTeams.find(team => team._id === teamId))
  }

  function handleMemberEdit(memberId) {
    setModalType('edit_member')
    setToBeEditedMember(allEmployees.find(emp => emp._id === memberId))
  }

  function handleMemberMove(memberId) {
    setModalType('move_member')
    setToBeEditedMember(allEmployees.find(emp => emp._id === memberId))
  }

  function handleMemberView(memberId) {
    setModalType('view_member')
    setToBeEditedMember(allEmployees.find(emp => emp._id === memberId))
  }

  return (
    <div className='flx flx-column'>
      <Header allEmployees={allEmployees} handleMemberView={handleMemberView} />
      <CEOSection setModalType={setModalType} setToBeEditedMember={setToBeEditedMember} />
      <HeadsSection setModalType={setModalType} setToBeEditedMember={setToBeEditedMember} handleHeadClick={handleHeadClick} />
      <TeamsSection handleTeamClick={handleTeamClick} handleTeamEdit={handleTeamEdit} handleAddTeamClick={handleAddTeamClick} />
      <MembersSection handleMemberEdit={handleMemberEdit} handleAddMemberClick={handleAddMemberClick} handleMemberMove={handleMemberMove} handleMemberView={handleMemberView} />
      {
        modalType.length > 0 && <Modal type={modalType} setAllEmployees={setAllEmployees} setModalType={setModalType} />
      }
    </div>
  );
}

export default App;
