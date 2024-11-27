import { useState } from "react";
import axios from "axios";

function Salud_Editar({ id, petId, name }) {
    const [nombre, setNombre] = useState(name || "");
    const [tipo, setTipo] = useState("");
    const [lugar, setLugar] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");



    
    async function handleEdit(e) {
        e.preventDefault();
        try {
            const response = await axios.patch("http://localhost:3001/salud/update", {
                pet_id: petId,
                health_type_id: tipo, // Corregido para coincidir con el backend
                name: nombre,
                place_id: lugar,
                event_date: fecha,
                event_time: hora,
                health_id: id,
            });
            console.log(response.data);
            window.location.reload(true);
        } catch (error) {
            console.error(error);
            alert("Hubo un error al actualizar el recordatorio de salud.");
        }
    }

    return (
        <div className="flex w-full h-full max-w-4x">
            {/* Sección del Formulario */}
            <div className="w-2/2 p-16 py-16">
                <h2 className="text-xl font-semibold text-red-500 text-center">
                    Editar Recordatorio de
                </h2>
                <h2 className="text-4xl font-semibold text-red-500 text-center">
                    Salud
                </h2>
                <form className="mt-1" onSubmit={handleEdit}>
                    <div className="mb-2 my-12">
                        <label className="block text-gray-700">Tipo</label>
                        <select
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <option value="">Selecciona</option>
                            <option value="1">Vacuna</option>
                            <option value="2">Tratamiento</option>
                            <option value="3">Medicamento</option>
                            <option value="4">Otro</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700">Nombre</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                            placeholder="parvovirus"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>



                    <div className="mb-2">
                        <label className="block text-gray-700">Lugar</label>
                        <select
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                            value={lugar}
                            onChange={(e) => setLugar(e.target.value)}
                        >
                            <option value="">Selecciona</option>
                            <option value="1">Casa</option>
                            <option value="2">Clínica Huellitas</option>
                        </select>
                    </div>




                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700">Fecha</label>
                            <input
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                type="date"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700">Hora</label>
                            <input
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                type="time"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-morado font-medium text-white py-3 rounded-lg text-center hover:bg-blue-700 transition duration-200 my-6"
                    >
                        Editar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Salud_Editar;
