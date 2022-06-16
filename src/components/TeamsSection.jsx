import { useHeads } from "../contexts"

const TeamsSection = ({ handleTeamClick, handleTeamEdit, handleAddTeamClick }) => {
    const { headTeams } = useHeads()

    return (
        <>
            <p className="mg-top-md mg-top-s">teams</p>
            <section className="flx">
                {
                    headTeams?.map(team => <article key={team._id} onClick={() => handleTeamClick(team.name)} className="card-dim card-shadow-xs pd-md mg-xs">
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