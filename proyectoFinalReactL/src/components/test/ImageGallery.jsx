import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageGallery.css'; // Importa el archivo CSS personalizado

export  function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/images');
        setImages(response.data);
      } catch (error) {
        setError('Error al cargar las imágenes');
        console.error('Error al obtener imágenes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Función para manejar el clic en la imagen
  const handleImageClick = (id) => {
    console.log('ID de la imagen seleccionada:', id);
    // Aquí puedes agregar cualquier lógica adicional que desees al hacer clic en la imagen
  };

  return (
    <div className="container mt-5 pb-4">

      {loading && <p className="text-center">Cargando imágenes...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      <div className="row">
        {images.length > 0 ? (
          images.map((image) => (
            <div className="col-md-3 mb-3" key={image.id}>
              <div className="card image-card">
                <img
                  src={`http://localhost:5000/uploads/${image.filename}`}
                  alt={image.alt_text || 'Imagen de la galería'}
                  className="card-img-top image-square"
                  onClick={() => handleImageClick(image.id)} // Evento onClick para capturar el ID
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
