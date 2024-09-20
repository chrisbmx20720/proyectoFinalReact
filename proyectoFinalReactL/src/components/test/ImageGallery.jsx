import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageGallery.css';
import { UploadImage } from './UploadImage';

export function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Función para actualizar la galería
  const updateGallery = async () => {
    try {
      const response = await axios.get('http://localhost:5000/images');
      setImages(response.data);
    } catch (error) {
      setError('Error al cargar las imágenes');
      console.error('Error al obtener imágenes:', error);
    }
  };

  useEffect(() => {
    updateGallery();
  }, []);

  const handleImageClick = (id) => {
    // Aquí podrías manejar el clic en la imagen si es necesario
  };

  return (
    <div className="container mt-5 pb-4">
      <UploadImage updateGallery={updateGallery} />
      {loading && <p className="text-center">Cargando imágenes...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      <div className="row">
        {images.length > 0 ? (
          images.map((image) => (
            <div className="col-md-2 mb-3" key={image.id}>
              <div className="card image-card">
                <img
                  src={`http://localhost:5000/uploads/${image.filename}`}
                  alt={image.alt_text || 'Imagen de la galería'}
                  className="card-img-top image-square"
                  onClick={() => handleImageClick(image.id)} // Llama a handleImageClick con el id de la imagen
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No se encontraron imágenes.</p>
        )}
      </div>
    </div>
  );
}
