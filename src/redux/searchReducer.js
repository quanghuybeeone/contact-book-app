const initialState = {
    searchQuery: '',
};

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const setSearchQuery = (name) => {
    return {
        type: SET_SEARCH_QUERY,
        payload: name,
    };
}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;