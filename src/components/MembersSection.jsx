import { useMembers } from "../contexts"
import styles from './header.module.css'
import styles2 from './section.module.css'

const MembersSection = ({ handleMemberEdit, handleAddMemberClick, handleMemberMove, handleMemberView }) => {
    const { teamMembers } = useMembers()

    return (
        <div className={`flx flx-column pd-btm-s mg-md ${styles.headerBorder}`}>
            <p className="txt-lg txt-off-primary txt-ucase mg-btm-s">members</p>
            <section className="flx">
                {
                    teamMembers?.map(member => <article key={member.id} className="card-dim card-shadow-xs pd-md mg-xs">
                        <p className="txt-off-primary txt-500 txt-md txt-cap mg-btm-xs">{member.name}</p>
                        <p className="txt-off-primary txt-md txt-cap">{member.designation}</p>
                        <div className="flx flx-maj-end mg-top-s">
                            <button onClick={() => handleMemberEdit(member.id)} className="btn-txt txt-md txt-off-primary mg-left-xxlg">edit</button>
                            <span className="mg-left-xs mg-right-xs">|</span>
                            {
                                member.designation !== 'Leader' &&
                                <>
                                    <button onClick={() => handleMemberMove(member.id)} className="btn-txt txt-md txt-off-primary">move</button>
                                    <span className="mg-left-xs mg-right-xs">|</span>
                                </>
                            }
                            <button onClick={() => handleMemberView(member.id)} className="btn-txt txt-md txt-off-primary">more...</button>
                        </div>
                    </article>)
                }
                <article onClick={handleAddMemberClick} className={`card-shadow-xs flx flx-center pd-md mg-xs ${styles2.cardAdd}`}>
                    <p className="txt-off-primary txt-500 txt-md txt-cap">add a member</p>
                </article>
            </section>
        </div>
    )
}

export default MembersSection