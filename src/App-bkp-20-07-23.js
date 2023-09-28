import { Component } from "react";
import Table from './components/Table';
import './index.css';
import Contact from "./components/Contact";

class App extends Component {

    state = {
        characters : [
            {   name : 'Murugan',
                job  : 'Former',
            },
            {
                name : 'Lakshmi',
                job  : 'Hosue wife',
            },
            {
                name : 'Maragatham',
                job  : 'House wife',
            },
            {
                name : 'Rangasamy',
                job  : 'Software developer',
            },
            {
                name : 'Mythili',
                job  : 'Teacher',
            }]
        }

        removeCharacter = ( index )=> {
            const {characters} = this.state
            let filtered = characters.filter((character, i) => {
                return i !== index
            });
            this.setState({characters:filtered})
        }

    render(){

        const characters = this.state
        //console.log(characters)
        return( 
            <div className="App">
                <h1> Table Display </h1>
                <Contact />
                <Table removeCharacter={this.removeCharacter} charactersData = { characters }/>
            </div>       
        )
    }
}

export default App;