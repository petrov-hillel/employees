import './add-filter.css'

export default function AddFilter(props) {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'like', label: 'На повышение'},
        {name: 'lessThen1000', label: 'З/П меньше 1000$'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}
                    type="button">
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}