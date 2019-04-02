import * as actionTypes from './action'

const initalState = {
    directory:[]
}

const reducer = (state=initalState,action)=>{
    switch(action.type){
        case actionTypes.ADD_USER :
            const newdirectory = [...state.directory,action.data]
            return{
                ...state,
                directory:newdirectory
                
            }
        case actionTypes.DELETE_USER:
            const updateddirectory = state.directory.filter(
                (detail)=>{
                    return detail.name!==action.data.name || detail.phone!== action.data.phone
                }
            )
            return{
                 ...state,
                 directory:updateddirectory
        }
        default :
            return state;
    }

};

export default reducer;