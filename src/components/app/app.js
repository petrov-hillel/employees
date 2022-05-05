import {Component} from "react";

import AppInfo from '../app-info/app-info'
import SearchPanel from "../search-panel/search-panel";
import AddFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import './app.css'

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {id: this.newId(), like: true, name: 'Oleh', salary: 500},
                {id: this.newId(), like: false, name: 'Alex', salary: 1000},
                {id: this.newId(), like: false, name: 'Vlad', salary: 2500},
                {id: this.newId(), like: true, name: 'John', salary: 999}
            ],
            term: '',
            filter: 'all'
        }
    }

    onAdd = (name, salary) => {
        const newItem = {
            id: this.newId(),
            name,
            salary,
            increase: false,
            like: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return  {
                data: newArr
            }
        })
    }

    newId = () => {
        return +Math.random().toString(16).slice(-8)
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    onUpdateSalary = (id, value) => {
        this.setState(({data}) => ({
            data: data.map(item => item.id === id ? {...item, salary: value} : item)
        }))
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like)
            case 'moreThen1000':
                return items.filter(item => item.salary >= 1000)
            case 'lessThen1000':
                return items.filter(item => item.salary < 1000)
            default:
                return items
        }
    }

    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    }

    render() {
        const {data, term, filter} = this.state
        const employees = data.length;
        const increased = data.filter(i => i.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo increased={increased} employees={employees}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AddFilter onFilterSelect={this.onFilterSelect}
                               filter={filter}/>
                </div>

                <EmployersList onDelete={this.deleteItem}
                               onUpdateSalary={this.onUpdateSalary}
                               onToggleProp={this.onToggleProp}
                               data={visibleData}/>
                <EmployersAddForm onAdd={this.onAdd}/>
            </div>
        )
    }
}

export default App