import {Component} from "react";
import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    onResetInput = () => {
        this.setState({
            term: ''
        });
        this.props.onUpdateSearch('');
    }

    render() {
        return (
                <div style={{position: 'relative'}}>
                    <input type="text"
                           onChange={this.onUpdateSearch}
                           value={this.state.term}
                           placeholder="Найти сотрудника"
                           className="form-control search-input"/>
                    <button style={
                        {position: 'absolute',
                        top:'-3px',
                        right:'5px',
                        border:'none',
                        backgroundColor:'transparent',
                        fontSize:'26px',
                        fontWeight:'bold'}
                    } onClick={this.onResetInput}>&times;</button>
                </div>
        )
    }
}

