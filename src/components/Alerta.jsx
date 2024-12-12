import React from 'react'

const Alerta = ({ alerta }) => {
    return (
        <div className={`${alerta.error ? 'bg-red-600' : 'bg-green-500'} p-2 text-white w-3/4 mx-auto rounded-md mb-3`}>
            {alerta.mensaje}
        </div>
    )
}

export default Alerta