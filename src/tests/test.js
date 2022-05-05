import {Component} from "react";
import styled from "styled-components";

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'red'};
  }
  input {
    display: block;
    margin: 10px 0 0 0;
  }
`

const Header = styled.h2`
  font-size: 22px;
  color: red;
`

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
`

class WhoAmI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            years: 27,
            text: 'Btn',
            position: 'Front end Developer'
        }
    }

    inputHandler = (e, color) => {
        console.log(color)
        this.setState({
            position: e.target.value
        })
    }
    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        const {years, text, position} = this.state;

        return (
            <EmpItem active>
                <Button onClick={this.nextYear}>{text}</Button>
                <Header>
                    My name is {name},
                    surname - {surname},
                    age - {years},
                    position - {position}
                </Header>
                <a href={link} target="_blank">My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.inputHandler(e, 'some color')}/>
                </form>
            </EmpItem>
        )
    }
}

const Wrapper = styled.div`
  width: 600px;
  text-align: center;
  margin: 80px auto 0 auto;
`;


export default function Test() {
    return (
        <Wrapper>
            <WhoAmI name='Oleh'
                    link="https://www.linkedin.com/in/oleh-petrov/"
                    surname="Petrov"/>
            <WhoAmI name='Alex'
                    link="https://www.linkedin.com/in/aleksei-loktev/"
                    surname="Loktev"/>
        </Wrapper>
    )
}