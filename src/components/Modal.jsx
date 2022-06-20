import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useTeams, useHeads, useMembers, useEmployees } from '../contexts'
import { updateEmployeesData, updateTeamsData } from '../hooks'

const Modal = ({ type, setModalType }) => {
    const [moveToTeam, setMoveToTeam] = useState({})
    const { currentHead } = useHeads()
    const { setAllTeams, currentTeam, allTeams, toBeEditedTeam } = useTeams()
    const { toBeEditedMember } = useMembers()
    const { allEmployees, setAllEmployees } = useEmployees()

    function handleAddMember(e) {
        e.preventDefault()
        try {
            const newMember = {
                id: uuid(),
                name: e.target.name.value,
                phone: e.target.phoneno.value,
                email: e.target.email.value,
                team: currentTeam,
                designation: 'Member',
                department: currentHead,
            }
            setAllEmployees((allEmployees) => [...allEmployees, newMember])
            updateEmployeesData([...allEmployees, newMember])
        } catch (e) {
            console.log(e)
        } finally {
            setModalType('')
        }
    }

    function handleAddTeam(e) {
        e.preventDefault()
        try {
            const newTeam = {
                id: uuid(),
                name: e.target.name.value,
                department: currentHead,
            }
            setAllTeams((allTeams) => [...allTeams, newTeam])
            updateTeamsData([...allTeams, newTeam])
        } catch (e) {
            console.log(e)
        } finally {
            setModalType('')
        }
    }

    async function handleEditTeam(e) {
        e.preventDefault()
        try {
            const newTeams = allTeams.map(team => team.id === toBeEditedTeam.id ? ({ ...team, name: e.target.name.value }) : team)
            setAllTeams(newTeams)
            updateTeamsData(newTeams)
        } catch (e) {
            console.log(e)
        } finally {
            setModalType('')
        }
    }

    async function handleEditMember(e) {
        e.preventDefault()
        try {
            const updatedMember = {
                ...toBeEditedMember,
                name: e.target.name.value,
                phone: Number(e.target.phoneno.value),
                email: e.target.email.value,
            }
            const newEmployees = allEmployees.map(emp => emp.id === toBeEditedMember.id ? ({ ...updatedMember }) : emp)
            setAllEmployees(newEmployees)
            updateEmployeesData(newEmployees)
        } catch (e) {
            console.log(e)
        } finally {
            setModalType('')
        }
    }

    async function handleMoveMember(e) {
        e.preventDefault()

        const updatedMember = {
            ...toBeEditedMember,
            team: moveToTeam.name,
            department: moveToTeam.department,
        }
        if (moveToTeam.name) {
            try {
                const newEmployees = allEmployees.map(emp => emp.id === toBeEditedMember.id ? ({ ...updatedMember }) : emp)
                setAllEmployees(newEmployees)
                updateEmployeesData(newEmployees)
            } catch (e) {
                console.log(e)
            } finally {
                setModalType('')
            }
        }
    }

    return (
        <section onClick={() => setModalType('')} className="flx flx-center modal-container pos-fixed tl-0 z-5">
            <article onClick={(e) => e.stopPropagation()} className="modal-md txt-primary pd-lg bg-primary">
                {
                    type === 'add_member'
                        ? <form onSubmit={handleAddMember} className='flx flx-column flx-maj-start'>
                            <p className='txt-lg txt-500 txt-cap mg-btm-s'>add a member</p>
                            <input required type='text' placeholder="name" name='name' className='input input-s txt-md pd-xs mg-btm-xs' />
                            <input required type='number' placeholder="phone no." name='phoneno' className='input input-s txt-md pd-xs mg-btm-xs' />
                            <input required type='email' placeholder="email" name='email' className='input input-s txt-md pd-xs mg-btm-xs' />
                            <div className='flx flx-maj-end'>
                                <button className="btn-solid bg-secondary txt-secondary pd-xs txt-md txt-ucase">add</button>
                            </div>
                        </form>
                        : type === 'add_team'
                            ? <form onSubmit={handleAddTeam} className='flx flx-column flx-maj-start'>
                                <p className='txt-lg txt-500 txt-cap mg-btm-s'>add a team for  {currentHead}</p>
                                <input required type='text' placeholder="name" name='name' className='input input-s txt-md pd-xs mg-btm-xs' />
                                <div className='flx flx-maj-end'>
                                    <button className="btn-solid bg-secondary txt-secondary pd-xs txt-md txt-ucase">add</button>
                                </div>
                            </form>
                            : type === 'edit_team'
                                ? <form onSubmit={handleEditTeam} className='flx flx-column flx-maj-start'>
                                    <p className='txt-lg txt-500 txt-cap mg-btm-s'>update team name</p>
                                    <input required type='text' placeholder="name" name='name' className='input input-s txt-md pd-xs mg-btm-xs' />
                                    <div className='flx flx-maj-end'>
                                        <button className="btn-solid bg-secondary txt-secondary pd-xs txt-md txt-ucase">update</button>
                                    </div>
                                </form>
                                : type === 'edit_member'
                                    ? <form onSubmit={handleEditMember} className='flx flx-column flx-maj-start'>
                                        <p className='txt-lg txt-500 txt-cap mg-btm-s'>update member details</p>
                                        <input required type='text' placeholder="name" name='name' className='input input-s txt-md pd-xs mg-btm-xs' />
                                        <input required type='number' placeholder="phone no." name='phoneno' className='input input-s txt-md pd-xs mg-btm-xs' />
                                        <input required type='email' placeholder="email" name='email' className='input input-s txt-md pd-xs mg-btm-xs' />
                                        <div className='flx flx-maj-end'>
                                            <button className="btn-solid bg-secondary txt-secondary pd-xs txt-md txt-ucase">update</button>
                                        </div>
                                    </form>
                                    : type === 'move_member'
                                        ? <form onSubmit={handleMoveMember} className='flx flx-column'>
                                            <p className='txt-lg txt-500 txt-cap mg-btm-s'>move to</p>
                                            {
                                                allTeams?.map(team =>
                                                    toBeEditedMember.department === 'Staff' && team.department === 'Design' ? null :
                                                        <label key={team.id} className='mg-btm-xs'>
                                                            <input type='radio' name='team' onChange={() => setMoveToTeam({ ...team })} />
                                                            {` ${team.name} (${team.department})`}
                                                        </label>
                                                )
                                            }
                                            <div className='flx flx-maj-end'>
                                                <button className="btn-solid bg-secondary txt-secondary pd-xs txt-md txt-ucase">update</button>
                                            </div>
                                        </form>
                                        : type === 'view_member'
                                            ? <>
                                                <p className='txt-lg txt-cap txt-500 txt-off-primary'>{toBeEditedMember.name}</p>
                                                <p className='txt-md txt-off-primary mg-btm-s'>{toBeEditedMember.email}</p>
                                                <p className='txt-md txt-off-primary txt-cap mg-btm-s'>{`phone - ${toBeEditedMember.phone}`}</p>
                                                <p className='txt-md txt-off-primary txt-cap'>{`${toBeEditedMember.designation} of ${toBeEditedMember.department ?? 'your org.'}`}</p>
                                            </>
                                            : null
                }
            </article>
        </section>
    )
}

export default Modal
