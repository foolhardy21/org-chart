const TeamsSection = ({ departmentTeams, handleTeamClick, handleTeamEdit, handleAddTeamClick }) => {

    return (
        <>
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
        </>
    )
}

export default TeamsSection