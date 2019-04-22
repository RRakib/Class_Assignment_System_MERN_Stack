// Imports
import "./Display.css"
import React from "react";

// Stateless Component
const Display = (props) => {
    return(
        <div className="displayStudents">
            <table border={1} width="100%" align="center">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Student</th>
                        <th>Semester</th>
                        <th>Subject</th>
                        <th>Section</th>
                    </tr>
                    <tr>
                        <td>16103030</td>
                        <td>Rakib Uddin</td>
                        <td>10th Semester</td>
                        <td>Programming Language and Structure</td>
                        <td>A</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

// Exports
export default Display