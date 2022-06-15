import { v4 as uuid } from 'uuid'

const Modal = ({ type, setAllEmployees, setAllTeams, currentTeam, currentDepartment, setModalType }) => {

    // modal types - adding a member, edit member, adding a team, edit a team, show employee details

    function handleAddMember(e) {
        e.preventDefault()
        const newMember = {
            _id: uuid(),
            name: e.target.name.value,
            phoneno: e.target.phoneno.value,
            email: e.target.email.value,
            team: currentTeam,
            designation: 'Member',
            department: currentDepartment,
        }
        setAllEmployees((allEmployees) => [...allEmployees, newMember])
        setModalType('')
    }

    function handleAddTeam(e) {
        e.preventDefault()
        const newMember = {
            _id: uuid(),
            name: e.target.name.value,
            department: currentDepartment,
        }
        setAllTeams((allTeams) => [...allTeams, newMember])
        setModalType('')
    }
    console.log(type)
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
    ) : null
}

export default Modal
