// Imports
import axios from "axios"
import {GET_STUDENTS} from "./types"

export const studentAction = (studnet) => (dispatch) => {
    axios.post("/students" , studnet)
        .then((res) => {
            dispatch({
                type : GET_STUDENTS,
                payload : {
                    students : res
                }
            })
        })
        .catch(err => {console.log("Errors!!! " + err)})
} 