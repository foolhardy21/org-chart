const MembersSection = ({ teamMembers, handleMemberEdit, handleAddMemberClick }) => {

    return (
        <>
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
        </>
    )
}

export default MembersSection