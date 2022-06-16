import { useEffect, useState } from 'react'
import styles from './header.module.css'

const Header = ({ allEmployees, handleMemberView }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchedEmployees, setSearchedEmployees] = useState([])

    useEffect(() => {
        if (searchQuery.length > 0) {
            if (isNaN(Number(searchQuery))) {
                setSearchedEmployees(allEmployees.filter(emp => emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || emp.email.toLowerCase().includes(searchQuery.toLowerCase())))
            } else {
                setSearchedEmployees(allEmployees.filter(emp => String(emp.phone).includes(searchQuery.toLowerCase())))
            }
        } else {
            setSearchedEmployees([])
        }
    }, [searchQuery])

    function handleSearchedEmployeeClick(memberId) {
        handleMemberView(memberId)
    }

    return (
        <header className={`flx flx-maj-even flx-min-center ${styles.header} mg-btm-md`}>
            <p className="txt-xlg txt-500 txt-cap txt-off-primary pd-md">your org.</p>
            <div className="flx flx-min-center pos-relative">
                <input type='text' placeholder='name, email or phone...' value={searchQuery} onChange={(e => setSearchQuery(e.target.value))} className='input input-md txt-md pd-xs' />
                <span className="material-icons txt-off-primary">
                    search
                </span>
                {
                    searchedEmployees.length > 0 && <div className={`pos-absolute bg-primary pd-s card-shadow-xs ${styles.articleSearch}`}>
                        {
                            searchedEmployees?.map(emp => <button key={emp._id} onClick={() => handleSearchedEmployeeClick(emp._id)} className='btn-outlined b-solid b-primary txt-md txt-primary pd-xs mg-xs'>{emp.name}</button>)
                        }
                    </div>

                }
            </div>
        </header>
    )
}

export default Header