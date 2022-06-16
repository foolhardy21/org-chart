import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useTeams, useHeads, useMembers } from '../contexts'

const Modal = ({ type, setAllEmployees, setModalType }) => {
    const [moveToTeam, setMoveToTeam] = useState({})
    const { currentHead } = useHeads()
    const { setAllTeams, currentTeam, allTeams, toBeEditedTeam } = useTeams()
    const { toBeEditedMember } = useMembers()

    function handleAddMember(e) {
        e.preventDefault()
        const newMember = {
            _id: uuid(),
            name: e.target.name.value,
            phoneno: e.target.phoneno.value,
            email: e.target.email.value,
            team: currentTeam,
            designation: 'Member',
            department: currentHead,
        }
        setAllEmployees((allEmployees) => [...allEmployees, newMember])
        setModalType('')
    }

    function handleAddTeam(e) {
        e.preventDefault()
        const newMember = {
            _id: uuid(),
            name: e.target.name.value,
            department: currentHead,
        }
        setAllTeams((allTeams) => [...allTeams, newMember])
        setModalType('')
    }

    function handleEditTeam(e) {
        e.preventDefault()
        setAllTeams(allTeams => allTeams.map(team => team._id === toBeEditedTeam._id ? ({ ...team, name: e.target.name.value }) : team))
        setModalType('')
    }

    function handleEditMember(e) {
        e.preventDefault()
        setAllEmployees(allEmployees => allEmployees.map(emp => emp._id === toBeEditedMember._id ? ({
            ...emp, name: e.target.name.value,
            phoneno: e.target.phoneno.value,
            email: e.target.email.value
        }) : emp))
        setModalType('')
    }

    function handleMoveMember(e) {
        e.preventDefault()
        if (moveToTeam.name) {
            setAllEmployees(allEmployees => allEmployees.map(emp => emp._id === toBeEditedMember._id ? ({ ...emp, team: moveToTeam.name, department: moveToTeam.department }) : emp))
            setModalType('')
        }

    }

    return (
        <section className="flx flx-center modal-container pos-fixed tl-0 z-5">
            <article className="modal-md txt-primary pd-lg bg-primary">
                {
                    type === 'add_member'
                        ? <form onSubmit={handleAddMember}>
                            <input required type='text' placeholder="name" name='name' />
                            <input required type='number' placeholder="phone no." name='phoneno' />
                            <input required type='email' placeholder="email" name='email' />
                            <button className="btn-solid pd-xs txt-md txt-ucase">add</button>
                        </form>
                        : type === 'add_team'
                            ? <form onSubmit={handleAddTeam}>
                                <input required type='text' placeholder="name" name='name' />
                                <button className="btn-solid pd-xs txt-md txt-ucase">add</button>
                            </form>
                            : type === 'edit_team'
                                ? <form onSubmit={handleEditTeam}>
                                    <input required type='text' placeholder="name" name='name' />
                                    <button className="btn-solid pd-xs txt-md txt-ucase">update</button>
                                </form>
                                : type === 'edit_member'
                                    ? <form onSubmit={handleEditMember}>
                                        <input required type='text' placeholder="name" name='name' />
                                        <input required type='number' placeholder="phone no." name='phoneno' />
                                        <input required type='email' placeholder="email" name='email' />
                                        <button className="btn-solid pd-xs txt-md txt-ucase">update</button>
                                    </form>
                                    : type === 'move_member'
                                        ? <form onSubmit={handleMoveMember}>
                                            {
                                                allTeams?.map(team =>
                                                    <label key={team._id}>
                                                        <input type='radio' name='team' onChange={() => setMoveToTeam({ ...team })} />
                                                        {`${team.name} (${team.department})`}
                                                    </label>
                                                )
                                            }
                                            <button className="btn-solid pd-xs txt-md txt-ucase">update</button>
                                        </form>
                                        : type === 'view_member'
                                            ? <>
                                                <p>{toBeEditedMember.name}</p>
                                                <p>{toBeEditedMember.email}</p>
                                                <p>{toBeEditedMember.phone}</p>
                                                <p>{toBeEditedMember.designation}</p>
                                                <p>{toBeEditedMember.department}</p>
                                            </>
                                            : null
                }
            </article>
        </section>
    )
}

export default Modal
