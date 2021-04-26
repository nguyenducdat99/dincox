import * as types from "../constants/ActionTypes";

const initialState = [];

let index = -1;

const MyReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.FETCH_ARTICLE:
            state = action.payload;

			return [...state];
        case types.SAVE_ARTICLE:
            index = findIndex(state,action.payload.id_new);
            // console.log(action.payload);
            // console.log(index);
            if (index === -1) {
                state.push(action.payload);
            }else{
                state[index] = {
                    ...state[index],
                    author: action.payload.author,
                    title: action.payload.title,
                    contents: action.payload.contents,
                    reference_links: action.payload.reference_links,
                    status: action.payload.state*1
                };
            }

            return [...state] 
        // case types.UPDATE_STATUS_CATEGORY:
        //     index = findIndex(state,action.payload);
        //     if (index !== -1 ) {
        //         state[index] = {
        //             ...state[index],
        //             status: (state[index].status*1===1)?0:1
        //         }
        //     }

        //     return [...state]
        // case types.DELETE_CATEGORY:
        //     index = findIndex(state, action.payload);
            
        //     state.splice(index,1);

        //     return [...state];
        default:
            return state;
    }
}

function findIndex(state, id) {
    var result= -1;
    state.forEach((item, index) => {

        if (item.id_new*1 === id*1) {
            result = index; 
        };
    });
    return result;
}

export default MyReducer;