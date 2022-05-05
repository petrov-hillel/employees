import './employers-list-item.css'

export default function EmployersListItem(props){
    const {name,
        salary,
        onDelete,
        onToggleProp,
        onUpdateSalary,
        increase,
        like} = props

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) classNames += ' increase';
    if (like) classNames += ' like';

    return (
        <li className={classNames}>
            <span onClick={onToggleProp} data-toggle="like" className="list-group-item-label">{name}</span>
            <div>
                <input type="number"
                       className="list-group-item-input"
                       onChange={onUpdateSalary}
                       defaultValue={salary}/>
                <span className="dollar">$</span>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        data-toggle="increase"
                        onClick={onToggleProp}
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}