import {GET_STUDENTS} from "../Action/types"
const init = {
    student : [],
}

const studentReducer = (state = init, action) => {
    switch (action.type){
        case GET_STUDENTS:
            return{
                students : action.payload.students
            }
        default:
            return state
    }
}

export default studentReducer;