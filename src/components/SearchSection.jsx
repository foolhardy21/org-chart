const SearchSection = ({ searchedEmployees }) => {

    return (
        <section>
            {
                searchedEmployees?.map(member => <article key={member._id} className="card-dim card-shadow-xs pd-md mg-xs">
                    <p>{member.name}</p>
                    <p>{member.designation}</p>
                </article>)
            }
        </section>
    )
}

export default SearchSection