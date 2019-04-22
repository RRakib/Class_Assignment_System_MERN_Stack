// Imports
import "./Display.css"
import axios from "axios"
import {connect} from "react-redux"
import React , {Component} from "react";
import {getStudents} from "../../Store/Action/studentAction"

// Stateless Component
class Display extends Component{
    constructor(){
        super();
        this.state = {
            bol : false
        }
    }

    componentDidMount = () => {
        axios.get("/students")
            .then(resData => {
                console.log(resData)
                this.props.getStudents(resData.data)
                this.setState({
                    bol : true
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render(){
        console.log(this.props)
        if(this.props.state.length >= 0){
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
            {this.props.state.map(person => {
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
        state : state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getStudents : (student) => dispatch(getStudents(student))
    }
}


// Exports
export default connect(mapStateToProps , mapDispatchToProps)(Display)