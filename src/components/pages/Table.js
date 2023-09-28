import React,{ Component } from "react";

const TableHeader = ()=>  {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

 
const TableBody = (props)=> {
 
   const {charactersData,removeCharacter } = props
   console.log(charactersData.characters);
   const rows = charactersData.map((character,index)=>{
        return (
            <tr >
                <td>{character.name}</td>
                <td>{character.job}</td>
                <td><button className="btn btn-primary">Delete</button></td>
            </tr>
            )
         })

    return (
        <tbody>
             { rows }
        </tbody>
    )
}

class Table extends Component{
    render(){
        const {charactersData, removeCharacter} = this.props
        
        return(
            <table>
                <TableHeader/>
                <TableBody removeCharacter={removeCharacter} charactersData={charactersData}/>
            </table>
        )
    }
}


export default Table;