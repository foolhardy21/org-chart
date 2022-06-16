import { employees } from "../data/org.data";
const heads = employees.filter(emp => emp.designation === 'Head')

const HeadsSection = ({ handleHeadClick }) => {

    return (
        <>
            <p className="mg-top-md mg-top-s">heads</p>
            <section className="flx">
                {
                    heads?.map(head => <article key={head._id} onClick={() => handleHeadClick(head.department)} className="card-dim card-shadow-xs pd-md mg-xs">
                        <p>{head.name}</p>
                        <p>{head.department}</p>
                    </article>)
                }
            </section>
        </>
    )
}

export default HeadsSection