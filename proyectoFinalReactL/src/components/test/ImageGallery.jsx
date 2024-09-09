import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ImageGallery() {
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

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Galería de Imágenes</h1>
      {loading && <p className="text-center">Cargando imágenes...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      <div className="row">
        {images.length > 0 ? (
          images.map((image) => (
            <div className="col-md-4 mb-3" key={image.id}>
              <div className="card">
                <img
                  src={`http://localhost:5000/uploads/${image.filename}`}
                  alt={image.alt_text || 'Imagen de la galería'}
                  className="card-img-top"
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
