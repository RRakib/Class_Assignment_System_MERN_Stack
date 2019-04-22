// Imports
import axios from "axios"
import {GET_STUDENTS} from "./types"

export const studentAction = (student) => (dispatch) => {
    console.log(student)
    axios.post("/students" , student)
        .then((res) => {
            axios.get("/students")
                .then(resData => {
                    dispatch({
                        type: GET_STUDENTS,
                        payload:{
                            students : resData
                        }
                    })
                    console.log(resData)
                })
        })
        .catch(err => {console.log("Errors!!! " + err)})
} 