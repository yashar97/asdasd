import React, { useState } from 'react'
import ModalNuevoCliente from './components/ModalNuevoCliente'

const App = () => {

  const [modalNuevo, setModalNuevo] = useState(false);

  return (
    <div>
      <h1 className='text-3xl font-semibold text-center mt-5'>Gestion Clientes</h1>

      <div className='mt-5 w-4/5 flex mx-auto'>
        <form className='w-3/4 flex justify-around'>
          <div className='flex gap-2 items-center'>
            <label htmlFor="">Nro. DNI:</label>
            <input type="text" className='rounded-md p-2' />
          </div>
          <div className='flex gap-2 items-center'>
            <label htmlFor="">Apellido Paterno:</label>
            <input type="text" className='rounded-md p-2' />
          </div>
          <button className='py-2 px-4 bg-blue-600 text-white rounded-md'>Buscar</button>
        </form>

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
          <tr>
            <td className='text-center border'>1</td>
            <td className='text-center border'>asd</td>
            <td className='text-center border'>asdasd</td>
            <td className='text-center border'>1212</td>
            <td className='text-center border'>1212</td>
            <td className='text-center border'>
              <div className='flex gap-2 justify-center'>
                <button className='px-2 rounded-md bg-yellow-500'>Editar</button>
                <button className='px-2 rounded-md bg-red-500'>Eliminar</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {
        modalNuevo && <ModalNuevoCliente setModalNuevo={setModalNuevo} />
      }

    </div>
  )
}

export default App