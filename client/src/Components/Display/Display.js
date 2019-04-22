// Imports
import "./Display.css"
import axios from "axios"
import {connect} from "react-redux"
import React , {Component} from "react";

// Stateless Component
class Display extends Component{
    constructor(){
        super();
        this.state = {
            data : {}
        }
    }

    componentDidMount = () => {
        axios.get("/students")
            .then(res => {
                this.setState({
                    data : res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render(){
        if(this.props.state.students.reload){
            window.location.reload();
        }
        console.log(this.props)
        if(this.state.data.length > 0){
            return(
                <div className="displayStudents">
                <table border={1} width="100%" align="center" >
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Student</th>
                        <th>Semester</th>
                        <th>Subject</th>
                        <th>Section</th>
                    </tr>
            {this.state.data.map(person => {
                return(
                        <tr key={person._id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.semester}</td>
                            <td>{person.subject}</td>
                            <td>{person.section}</td>
                        </tr>
                )
            })}
                </tbody>
                </table>
                </div>
            )
        }
        else{
            return(
                <div className="displayStudents">
                   <h2> Loading... </h2>
                </div>
            )
            
        }
}
}

const mapStateToProps = (state) => {
    return{
        state : state
    }
}

// Exports
export default connect(mapStateToProps)(Display)