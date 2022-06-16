import { v4 as uuid } from 'uuid'
import { useHeads } from '../contexts'
import { useTeams } from '../contexts'

const Modal = ({ type, setAllEmployees, setModalType, toBeEditedMember }) => {
    const { currentHead } = useHeads()
    const { setAllTeams, currentTeam, toBeEditedTeam } = useTeams()

    // modal types - edit member, edit a team, show employee details

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

    return type === 'add_member' ? (
        <section className="flx flx-center modal-container pos-fixed tl-0 z-5">
            <article className="modal-md txt-primary pd-lg bg-primary">
                <form onSubmit={handleAddMember}>
                    <input required type='text' placeholder="name" name='name' />
                    <input required type='number' placeholder="phone no." name='phoneno' />
                    <input required type='email' placeholder="email" name='email' />
                    <button className="btn-solid pd-xs txt-md txt-ucase">add</button>
                </form>
            </article>
        </section>
    ) : type === 'add_team' ? (
        <section className="flx flx-center modal-container pos-fixed tl-0 z-5">
            <article className="modal-md txt-primary pd-lg bg-primary">
                <form onSubmit={handleAddTeam}>
                    <input required type='text' placeholder="name" name='name' />
                    <button className="btn-solid pd-xs txt-md txt-ucase">add</button>
                </form>
            </article>
        </section>
    ) : type === 'edit_team' ? (
        <section className="flx flx-center modal-container pos-fixed tl-0 z-5">
            <article className="modal-md txt-primary pd-lg bg-primary">
                <form onSubmit={handleEditTeam}>
                    <input required type='text' placeholder="name" name='name' />
                    <button className="btn-solid pd-xs txt-md txt-ucase">update</button>
                </form>
            </article>
        </section>
    ) : type === 'edit_member' ? (
        <section className="flx flx-center modal-container pos-fixed tl-0 z-5">
            <article className="modal-md txt-primary pd-lg bg-primary">
                <form onSubmit={handleEditMember}>
                    <input required type='text' placeholder="name" name='name' />
                    <input required type='number' placeholder="phone no." name='phoneno' />
                    <input required type='email' placeholder="email" name='email' />
                    <button className="btn-solid pd-xs txt-md txt-ucase">update</button>
                </form>
            </article>
        </section>
    ) : null
}

export default Modal
