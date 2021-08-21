import axios from 'axios';


export const fetchGallery = () => axios.get(`${process.env.REACT_APP_API_URL}/gallery`);

export const postGallery = data => axios.post(`${process.env.REACT_APP_API_URL}/gallery`, data)