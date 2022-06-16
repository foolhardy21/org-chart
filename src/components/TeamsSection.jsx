import { useHeads } from "../contexts"
import styles from './header.module.css'
import styles2 from './section.module.css'

const TeamsSection = ({ handleTeamClick, handleTeamEdit, handleAddTeamClick }) => {
    const { headTeams } = useHeads()

    return (
        <div className={`flx flx-column pd-btm-s mg-md ${styles.headerBorder}`}>
            <p className="txt-lg txt-off-primary txt-ucase mg-btm-s">teams</p>
            <section className="flx">
                {
                    headTeams?.map(team => <article key={team._id} className="card-dim card-shadow-xs pd-md mg-xs">
                        <p className="txt-off-primary txt-500 txt-md txt-cap mg-btm-xs">{team.name}</p>
                        <p className="txt-md txt-off-primary">{team.department}</p>
                        <div className="flx flx-maj-end mg-top-s">
                            <button onClick={() => handleTeamClick(team.name)} className="btn-txt txt-md txt-off-primary mg-left-xxlg">view members</button>
                            <span className="mg-left-xs mg-right-xs">|</span>
                            <button onClick={() => handleTeamEdit(team._id)} className="btn-txt txt-md txt-off-primary">edit</button>
                        </div>
                    </article>)
                }
                <article onClick={handleAddTeamClick} className={`card-shadow-xs flx flx-center pd-md mg-xs ${styles2.cardAdd}`}>
                    <p className="txt-off-primary txt-500 txt-md txt-cap">add a team</p>
                </article>
            </section>
        </div>
    )
}

export default TeamsSection