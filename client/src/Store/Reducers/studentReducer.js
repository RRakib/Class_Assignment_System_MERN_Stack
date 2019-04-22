import {GET_STUDENTS} from "../Action/types"
const init = [{
    id : "null",
    name : "null",
    semester : "null",
    subject : "null",
    section : "null",
}]

const studentReducer = (state = init, action) => {
    switch (action.type){
        case GET_STUDENTS:
        console.log(action.students)
            state = action.students
            return state
        default:
            return state
    }
}

export default studentReducer;