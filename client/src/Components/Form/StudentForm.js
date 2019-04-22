// Imports
import "./StudentForm.css"
import React , { Component } from "react"

// Statefull Component
class StudentForm extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div className="studentForm">
                <form>
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

                    <select value={this.state.semester} onChange={this.handleChange}>
                        <option value="1st semester">1st Semester</option>
                        <option value="2st semester">2st Semester</option>
                        <option value="3st semester">3st Semester</option>
                        <option value="4st semester">4st Semester</option>
                        <option value="5st semester">5st Semester</option>
                        <option value="6st semester">6st Semester</option>
                        <option value="7st semester">7st Semester</option>
                        <option value="8st semester">8st Semester</option>
                        <option value="9st semester">9st Semester</option>
                        <option value="10st semester">10st Semester</option>
                        <option value="11st semester">11st Semester</option>
                    </select>

                    <select value={this.state.semester} onChange={this.handleChange}>
                        <option value="Software">Software</option>
                        <option value="System Analysis">System Analysis</option>
                        <option value="Programming in C">Programming in C</option>
                        <option value="Programming in C++">Programming in C++</option>
                        <option value="Datastructure and Algorithm">Datastructure and Algorithm</option>
                        <option value="Programming Language and Structure">Programming Language and Structure</option>
                    </select>

                    <select value={this.state.semester} onChange={this.handleChange}>
                        <option value="A">Sec - A</option>
                        <option value="B">Sec - B</option>
                        <option value="C">Sec - C</option>
                        <option value="D">Sec - D</option>
                        <option value="E">Sec - E</option>
                        <option value="F">Sec - F</option>
                    </select>
                </form>
            </div>
        )
    }
}

// Exports
export default StudentForm;