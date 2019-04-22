// Imports
import "./StudentForm.css";
import {connect} from "react-redux"
import Display from "../Display/Display"
import React , { Component } from "react";
import axios from "axios"
import {studentAction} from "../../Store/Action/studentAction"
import {getStudents} from "../../Store/Action/studentAction"

// Statefull Component
class StudentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : "",
            name : "",
            section : "",
            subject : "",
            semester : "",
            bool : false
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {id, name , section, subject , semester} = this.state
        this.props.studentAction({
            id,
            name,
            section,
            subject,
            semester
        })
        axios.get("/students")
        .then(resData => {
            console.log(resData)
            this.props.getStudents(resData.data)    
        })
        .catch(err => {
            console.log(err)
        })
        this.setState({
            id : "",
            name : "",
            section : "",
            subject : "",
            semester : "",
        })
    }
    render(){
        return(
            <div className="studentForm">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="id"
                        type="text"
                        value={this.state.id}
                        onChange={this.handleChange}
                        placeholder="Enter the student id"
                    />

                    <input 
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Enter the student name"
                    />

                    <select value={this.state.semester} onChange={this.handleChange} name="semester">
                        <option>Select Semester</option>
                        <option value="1st semester">1st Semester</option>
                        <option value="2nd semester">2st Semester</option>
                        <option value="3rd semester">3st Semester</option>
                        <option value="4th semester">4st Semester</option>
                        <option value="5th semester">5st Semester</option>
                        <option value="6th semester">6st Semester</option>
                        <option value="7th semester">7st Semester</option>
                        <option value="8th semester">8st Semester</option>
                        <option value="9th semester">9st Semester</option>
                        <option value="10th semester">10st Semester</option>
                        <option value="11th semester">11st Semester</option>
                    </select>

                    <select value={this.state.subject} onChange={this.handleChange} name="subject">
                        <option>Select Subject</option>
                        <option value="Software">Software</option>
                        <option value="System Analysis">System Analysis</option>
                        <option value="Programming in C">Programming in C</option>
                        <option value="Programming in C++">Programming in C++</option>
                        <option value="Datastructure and Algorithm">Datastructure and Algorithm</option>
                        <option value="Programming Language and Structure">Programming Language and Structure</option>
                    </select>

                    <select value={this.state.section} onChange={this.handleChange} name="section">
                        <option>Select Section</option>
                        <option value="A">Sec - A</option>
                        <option value="B">Sec - B</option>
                        <option value="C">Sec - C</option>
                        <option value="D">Sec - D</option>
                        <option value="E">Sec - E</option>
                        <option value="F">Sec - F</option>
                    </select>
                    <button>Submit</button>
                </form>


                <Display bool = {this.state.bool}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        studentAction : (student) => dispatch(studentAction(student)),
        getStudents : (student) => dispatch(getStudents(student))
    }
} 
// Exports
export default connect(null , mapDispatchToProps)(StudentForm);