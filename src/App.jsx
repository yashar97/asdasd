import React, { useEffect, useState } from 'react'
import ModalNuevoCliente from './components/ModalNuevoCliente'
import axios from 'axios';
import ModalActualizarCliente from './components/ModalActualizarCliente';

const App = () => {

  const [clientes, setClientes] = useState([]);
  const [modalNuevo, setModalNuevo] = useState(false);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [cambioCliente, setcambioCliente] = useState(false);
  const [clienteActualizar, setClienteActualizar] = useState({});


  useEffect(() => {

    const obtenerClientes = async () => {
      const url = 'http://localhost:8080/clientes';

      try {

        const { data } = await axios(url);

        setClientes(data);

      } catch (error) {
        setClientes([]);
      }
    }

    obtenerClientes();

  }, [cambioCliente]);


  const eliminarCliente = async id => {
    try {

      const url = `http://localhost:8080/clientes/${id}`;

      const { data } = await axios.delete(url);

      setcambioCliente(!cambioCliente);

    } catch (error) {
      console.log(error);
    }
  }

  const actualizarCliente = async id => {
    try {
      const url = `http://localhost:8080/clientes/${id}`;
      const { data } = await axios(url);
      setClienteActualizar(data);
    } catch (error) {
      console.log(error);

    }
    setModalActualizar(true);

  }

  return (
    <div>
      <h1 className='text-3xl font-semibold text-center mt-5'>Gestion Clientes</h1>

      <div className='mt-5 w-4/5 flex mx-auto'>

        <button onClick={() => setModalNuevo(true)} className='py-2 px-4 bg-blue-600 text-white rounded-md'>Nuevo</button>
      </div>

      <table className='mt-5 w-4/5 mx-auto'>
        <thead>
          <tr className='border-gray-900'>
            <th className='py-2 border text-center'>Id</th>
            <th className='py-2 border text-center'>Nombre</th>
            <th className='py-2 border text-center'>Apellido Paterno</th>
            <th className='py-2 border text-center'>Apellido Materno</th>
            <th className='py-2 border text-center'>DNI</th>
            <th className='py-2 border text-center'>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {
            clientes.map(cliente => (
              <tr key={cliente.id}>
                <td className='text-center border p-3'>{cliente.id}</td>
                <td className='text-center border p-3'>{cliente.nombre}</td>
                <td className='text-center border p-3'>{cliente.apellido_paterno}</td>
                <td className='text-center border p-3'>{cliente.apellido_materno}</td>
                <td className='text-center border p-3'>{cliente.dni}</td>
                <td className='text-center border p-3'>
                  <div className='flex gap-2 justify-center'>
                    <button onClick={() => actualizarCliente(cliente.id)} className='px-2 rounded-md bg-yellow-500'>Editar</button>
                    <button onClick={() => eliminarCliente(cliente.id)} className='px-2 rounded-md bg-red-500'>Eliminar</button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {
        modalActualizar && <ModalActualizarCliente
          modalActualizar={modalActualizar}
          setModalActualizar={setModalActualizar}
          clienteActualizar={clienteActualizar}
          cambioCliente={cambioCliente}
          setcambioCliente={setcambioCliente}
        />
      }

      {
        modalNuevo && <ModalNuevoCliente
          setModalNuevo={setModalNuevo}
          cambioCliente={cambioCliente}
          setcambioCliente={setcambioCliente} />
      }

    </div>
  )
}

export default App