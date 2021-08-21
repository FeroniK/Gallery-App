import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import { useDispatch } from 'react-redux';
import { getGallery } from './actions/gallery';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {

  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    dispatch(getGallery());
    
  
  }, [dispatch]);

  return(
    <>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImg={setSelectedImage} />}
    </>
  )
}

export default App;
