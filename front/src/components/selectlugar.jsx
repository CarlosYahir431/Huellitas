import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LugaresSelect = ({ 
  onPlaceChange, 
  value, 
  className = "", 
  placeholder = "Selecciona un lugar" 
}) => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    
    if (token) {
      axios
        .get(`http://localhost:3001/places`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          setPlaces(response.data);
        })
        .catch((error) => {
          console.error("Error al cargar lugares:", error);
          setError("No se pudieron cargar los lugares");
        });
    } else {
      setError("No se encontró token de autenticación");
    }
  }, []);

  const handleChange = (e) => {
    onPlaceChange(e.target.value);
  };

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        {error}
      </div>
    );
  }

  return (
    <select
      className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF] ${className}`}
      onChange={handleChange}
      value={value}
    >
      <option value="">{placeholder}</option>
      {places.map((place) => (
        <option key={place.id} value={place.id}>
          {place.name}
        </option>
      ))}
    </select>
  );
};

export default LugaresSelect;