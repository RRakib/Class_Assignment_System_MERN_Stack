// Imports
import axios from "axios"
import {GET_STUDENTS} from "./types"

export const studentAction = (student) => (dispatch) => {
    axios.post("/students" , student)
        .then((res) => {console.log(res)})
        .catch(err => {console.log("Errors!!! " + err)})
} 

export const getStudents = (students) => (dispatch) => {
    dispatch({
        type : GET_STUDENTS,
        students
    })
}