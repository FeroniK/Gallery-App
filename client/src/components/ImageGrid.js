import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';


const ImageGrid = ({ setSelectedImg }) => {

  const gallery = useSelector(state => state.gallery.images);

  return (
    <>
      <div className="img-grid">
        {gallery.length > 0 && gallery.map(doc => (
          
          <motion.div className="img-wrap" key={doc._id} 
            layout
            whileHover={{ opacity: 1 }}s
            onClick={() => setSelectedImg(doc.image)}
          >
            <motion.img src={doc.image} alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            
            
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default ImageGrid;