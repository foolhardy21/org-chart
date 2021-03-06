import { useEffect, useState } from 'react'
import { useEmployees } from '../contexts'
import styles from './header.module.css'

const HeadsSection = ({ handleHeadClick, setModalType, setToBeEditedMember }) => {
    const [heads, setHeads] = useState([])
    const { allEmployees } = useEmployees()

    useEffect(() => {
        setHeads(allEmployees.filter(emp => emp.designation === 'Head'))
    }, [allEmployees])

    function handleMoreClick(head) {
        setModalType('view_member')
        setToBeEditedMember({ ...head })
    }

    return (
        <div className={`flx flx-column pd-btm-s mg-md ${styles.headerBorder}`}>
            <p className="txt-lg txt-off-primary txt-ucase mg-btm-s">heads</p>
            <section className="flx">
                {
                    heads?.map(head => <article key={head.id} className="card-dim card-shadow-xs pd-s mg-xs">
                        <p className="txt-off-primary txt-500 txt-md txt-cap mg-btm-xs">{head.name}</p>
                        <p className="txt-md txt-off-primary">{head.department}</p>
                        <div className="flx flx-maj-end mg-top-s">
                            <button onClick={() => handleHeadClick(head.department)} className="btn-txt txt-md txt-off-primary mg-left-xxlg">view teams</button>
                            <span className="mg-left-xs mg-right-xs">|</span>
                            <button onClick={() => handleMoreClick(head)} className="btn-txt txt-md txt-off-primary">more...</button>
                        </div>
                    </article>)
                }
            </section>
        </div>
    )
}

export default HeadsSection