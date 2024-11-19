function Comida_Editar() {
    return (
        <div className="modal-content flex w-full h-full max-w-4x">
          {/* Sección del Formulario */}
          <div className="w-2/2 p-16 py-16">
            <h2 className="text-xl font-semibold text-orange-500 text-center ">
              Editar Recordatorio de
            </h2>
            <h2 className="text-4xl font-semibold text-orange-500 text-center ">
              Alimento
            </h2>
            <form className="mt-1">
              <div className="mb-2 my-12">
                <label className="block text-gray-700">Alimento</label>
                <input
                  type="name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                  placeholder="croquetas"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Lugar</label>
                <select className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]">
                  <option value="">Selecciona</option>
                  <option value="macho">Casa</option>
                  <option value="hembra">Clinica Huellitas</option>
                  <option value="hembra">Parque Huellitas</option>
                  <option value="hembra">Guarderia Huellitas</option>
                </select>
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Fecha</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    placeholder="Edad en años"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Hora</label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#374BFF]"
                    placeholder="Edad en años"
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

export default Comida_Editar;
