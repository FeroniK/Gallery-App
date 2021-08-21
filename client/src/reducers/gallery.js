

const initalState = {
    images: [],
    fetchingGallery: true,
    postingToGallery: false
}

const reducer = (state = initalState, action) => {
    
    const { payload } = action;
    
    switch (action.type) {

        case 'FETCH_ALL':
            return {
                ...state,
                images: payload,
                fetchingGallery: false
            };

        case 'POST_ONE':
            return {
                ...state,
                images: [payload, ...state.images],
                postingToGallery: false
            };
        
        
        case 'UPLOADING':
            
            return {
                ...state,
                postingToGallery: true
            }


        default: 
          return state;

    }
}

export default reducer;