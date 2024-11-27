import React, { useEffect, useRef, useState } from "react";
const MapaInteractivo = ({ onLugarSeleccionado, origen, destino }) => {
  const mapaRef = useRef(null);
  const [map, setMap] = useState(null);
  const [service, setService] = useState(null); 
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  useEffect(() => {
    const inicializarMapa = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          const mapa = new window.google.maps.Map(mapaRef.current, {
            center: currentLocation,
            zoom: 14,
          });
          new window.google.maps.Marker({
            position: currentLocation,
            map: mapa,
            title: "Tu ubicación actual",
          });
          setMap(mapa);
          setService(new window.google.maps.places.PlacesService(mapa));
          setDirectionsRenderer(new window.google.maps.DirectionsRenderer());
        },
        () => console.error("No se pudo obtener la ubicación actual.")
      );
    };
    if (!map && window.google) {
      inicializarMapa();
    }
  }, [map]);
  useEffect(() => {
    if (map && directionsRenderer && origen && destino) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsRenderer.setMap(map);
      directionsService.route(
        {
          origin: origen,
          destination: destino,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(result);
          } else {
            console.error("No se pudo calcular la ruta:", status);
          }
        }
      );
    }
  }, [map, directionsRenderer, origen, destino]);
  const obtenerDetallesLugar = (placeId) => {
    service.getDetails({ placeId }, (details, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const lugarSeleccionado = {
          name: details.name,
          address: details.formatted_address || null,
          phone: details.formatted_phone_number || null,
          website: details.website || null,
          horario: details.opening_hours
            ? details.opening_hours.weekday_text.join(", ")
            : null,
          lat: details.geometry.location.lat(),
          lng: details.geometry.location.lng(),
          image: details.photos
            ? details.photos[0].getUrl({ maxWidth: 400 })
            : null,
        };
        onLugarSeleccionado(lugarSeleccionado);
      } else {
        console.error("No se pudo obtener detalles del lugar:", status);
      }
    });
  };
  const handleLugarSeleccionado = (place) => {
    obtenerDetallesLugar(place.place_id);
  };
  const handleBuscarVeterinarias = () => {
    if (!service) return;
    const request = {
      location: map.getCenter(),
      radius: 5000,
      keyword: searchQuery || "veterinarias", 
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setSearchResults(results);
        const bounds = new window.google.maps.LatLngBounds();
        results.forEach((place) => {
          const placeMarker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
          });
          placeMarker.addListener("click", () => handleLugarSeleccionado(place));
          bounds.extend(place.geometry.location);
        });
        map.fitBounds(bounds);
      } else {
        console.error("No se encontraron resultados.");
      }
    });
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Buscar Veterinarias</h2>
        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Escribe el nombre o categoría"
   
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
             />
          <button
            onClick={handleBuscarVeterinarias}
            className="bg-morado text-white px-4 py-2 rounded-md"
          >
            Buscar
          </button>
        </div>
        <div ref={mapaRef} className="w-full h-96 rounded-md shadow-md mb-4"></div>
        {searchResults.length > 0 && (
          <ul className="w-full max-h-64 overflow-y-auto border border-gray-300 rounded-md p-4 bg-white">
            {searchResults.map((place, index) => (
              <li
                key={index}
                className="flex items-center gap-4 border-b py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLugarSeleccionado(place)}
              >
                {place.photos ? (
                  <img
                    src={place.photos[0].getUrl()}
                    alt={place.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                    Sin foto
                  </div>
                )}
                <div>
                  <p className="font-bold">{place.name}</p>
                  <p className="text-sm text-gray-600">{place.vicinity}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default MapaInteractivo;