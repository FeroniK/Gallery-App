import axios from 'axios';

const url = 'http://localhost:8800/api/gallery';

export const fetchGallery = () => axios.get(url);

export const postGallery = data => axios.post(url, data)