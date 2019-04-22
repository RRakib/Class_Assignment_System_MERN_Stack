import {GET_STUDENTS} from "../Action/types"
const init = {
    student : [],
    reload : false
}

const studentReducer = (state = init, action) => {
    switch (action.type){
        case GET_STUDENTS:
        console.log(action.payload.students)
            return{
                student : action.payload.students,
                reload : true
            }
        default:
            return state
    }
}

export default studentReducer;