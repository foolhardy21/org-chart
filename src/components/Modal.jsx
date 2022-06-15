import { v4 as uuid } from 'uuid'

const Modal = ({ type, teamMembers, setTeamMembers, currentTeam, currentDepartment, setModalType }) => {

    // modal types - adding a member, adding a team, show employee details

    function handleAddMember(e) {
        e.preventDefault()
        const newMember = {
            _id: uuid(),
            name: e.target.name.value,
            phoneno: e.target.phoneno.value,
            email: e.target.email.value,
            team: currentTeam,
            department: currentDepartment,
        }
        setTeamMembers([...teamMembers, newMember])
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
    ) : null
}

export default Modal
