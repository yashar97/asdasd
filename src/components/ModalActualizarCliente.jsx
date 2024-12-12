import { useState } from "react";
import Alerta from "./Alerta";
import axios from "axios";

const ModalActualizarCliente = ({ setModalActualizar, clienteActualizar, cambioCliente, setcambioCliente }) => {

    const [nombre, setNombre] = useState(clienteActualizar.nombre);
    const [apellidoPaterno, setapellidoPaterno] = useState(clienteActualizar.apellido_paterno);
    const [apellidoMaterno, setapellidoMaterno] = useState(clienteActualizar.apellido_materno);
    const [dni, setdni] = useState(clienteActualizar.dni);
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        if ([nombre.trim(), apellidoMaterno.trim(), apellidoPaterno.trim(), dni.trim()].includes('')) {
            setAlerta({ mensaje: 'Todos los campos son obligatorios', error: true });
            setTimeout(() => {
                setAlerta({});
            }, 1500);
            return;
        }

        try {

            const url = `http://localhost:8080/clientes/${clienteActualizar.id}`;
            const { data } = await axios.put(url, { nombre, apellido_materno: apellidoMaterno, apellido_paterno: apellidoPaterno, dni });
            setAlerta({ mensaje: data, error: false });
            setcambioCliente(!cambioCliente);
            setTimeout(() => {
                setModalActualizar(false);
            }, 1500);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='bg-gray-500 h-screen text-center flex items-center fixed top-0 right-0 left-0 bg-opacity-70'>
            <div className='bg-gray-200 h-3/4 w-2/4 mx-auto rounded-lg relative'>
                <div onClick={() => setModalActualizar(false)} className='cursor-pointer bg-gray-200 h-12 w-12 flex items-center justify-center rounded-full absolute -right-4 -top-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" style={{ fill: 'rgba(255, 0, 0, 0.5)', transform: '', msfilter: '' }}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" /></svg>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Actualizar Cliente</h2>

                <div className="mt-2">

                    {
                        alerta.mensaje && <Alerta alerta={alerta} />
                    }
                    <form onSubmit={handleSubmit} className='w-3/4 mx-auto'>
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <div className="mt-1">
                                <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" name="nombre" id="nombre" className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-700">Apellido Paterno</label>
                            <div className="mt-1">
                                <input value={apellidoPaterno} onChange={e => setapellidoPaterno(e.target.value)} type="text" name="apellidoPaterno" id="apellidoPaterno" className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-700">Apellido Materno</label>
                            <div className="mt-1">
                                <input value={apellidoMaterno} onChange={e => setapellidoMaterno(e.target.value)} type="text" name="apellidoMaterno" id="apellidoMaterno" className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI</label>
                            <div className="mt-1">
                                <input value={dni} onChange={e => setdni(e.target.value)} type="text" name="dni" id="dni" className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default ModalActualizarCliente