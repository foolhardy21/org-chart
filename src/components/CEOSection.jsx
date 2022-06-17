import { useState } from 'react'
import { useEmployees } from '../contexts'
import { useInitialiseCeo } from '../hooks'
import styles from './header.module.css'

const CEOSection = ({ setModalType, setToBeEditedMember }) => {
    const [ceo, setCeo] = useState({})
    const { allEmployees } = useEmployees()
    useInitialiseCeo(allEmployees, setCeo)

    function handleCEOClick() {
        setModalType('view_member')
        setToBeEditedMember({ ...ceo })
    }

    return (
        <div className={`pd-btm-s mg-md ${styles.headerBorder}`}>
            <p className="txt-xlg txt-off-primary txt-ucase mg-btm-s">ceo</p>
            <article className={`card-dim card-shadow-xs pd-s`}>
                <p className="txt-off-primary txt-500 txt-md txt-cap">{ceo.name}</p>
                <div className="flx flx-maj-end mg-top-s">
                    <button onClick={handleCEOClick} className="btn-txt txt-md txt-off-primary">more...</button>
                </div>
            </article>
        </div>
    )
}

export default CEOSection