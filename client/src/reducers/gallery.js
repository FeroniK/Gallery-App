

const initalState = {
    images: [],
    loading: true
}

const reducer = (state = initalState, action) => {
    
    const { payload } = action;
    
    switch (action.type) {

        case 'FETCH_ALL':
            return {
                ...state,
                images: payload,
                loading: false
            };

        case 'POST_ONE':
            return {
                ...state,
                images: [payload, ...state.images],
                loading: false
            };


        default: 
          return state;

    }
}

export default reducer;