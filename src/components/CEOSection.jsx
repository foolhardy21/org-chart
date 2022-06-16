import { employees } from "../data/org.data";
const ceo = employees.find(emp => emp.designation === 'CEO')

const CEOSection = () => {

    return (
        <article className={`card-dim card-shadow-xs pd-md`}>
            <p>ceo</p>
            <p>{ceo.name}</p>
        </article>
    )
}

export default CEOSection