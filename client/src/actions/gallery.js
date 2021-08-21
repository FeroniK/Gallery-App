import * as api from '../api';


export const getGallery = () => async dispatch => {
    try {
        const { data } = await api.fetchGallery();
        

        
        
        dispatch({ type: 'FETCH_ALL', payload: data });
    
    }catch (err) {
        console.log(err)
    }
}


export const postGallery = b64Data => async dispatch => {
    try {
        const { data } = await api.postGallery({ image: b64Data });
        
        console.log(data);
        dispatch({ type: 'POST_ONE', payload: data });
        

    }catch (err) {
        console.log(err)
    }
}