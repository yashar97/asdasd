import React from 'react'

const ModalNuevoCliente = ({ setModalNuevo }) => {
    return (
        <div className='bg-gray-500 h-screen text-center flex items-center fixed top-0 right-0 left-0 bg-opacity-70'>
            <div className='bg-white h-3/4 w-2/4 mx-auto rounded-lg relative'>
                <div onClick={() => setModalNuevo(false)} className='cursor-pointer bg-gray-200 h-12 w-12 flex items-center justify-center rounded-full absolute -right-4 -top-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" style={{ fill: 'rgba(255, 0, 0, 0.5)', transform: '', msfilter: '' }}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" /></svg>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Nuevo Cliente</h2>
            </div>
        </div>
    )
}

export default ModalNuevoCliente