import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'

export default function EmployersList({data, onDelete, onToggleProp, onUpdateSalary}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return <EmployersListItem
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onDelete={() => onDelete(id)}
            onUpdateSalary={(e) => onUpdateSalary(id, e.target.value)}
            key={id}
            {...itemProps}/>
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )

}