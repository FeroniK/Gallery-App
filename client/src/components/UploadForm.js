import { useState } from 'react';
import getBase64 from '../utils/getBase64';
import { postGallery } from '../actions/gallery';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

export default function UploadForm() {
    
    const [error, setError] = useState(null);
    const isLoading = useSelector(state => state.gallery.loading);


    const dispatch = useDispatch();

    const handleChange = e => {
        let selected = e.target.files[0];
            

        if(selected && selected.type.startsWith('image/')) {
            setError(null);
            getBase64(selected, (result) => {
                dispatch(postGallery(result));
            });

            
        }
        else {
            setError('Please select an image file')
        }
    
    }
    


    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { isLoading && <CircularProgress /> }
                {/* { file && <ProgressBar file={file} setFile={setFile} /> } */}
            </div>
        </form>
    )
}
