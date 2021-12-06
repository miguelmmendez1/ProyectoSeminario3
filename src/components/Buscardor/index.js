import React, { useState, useRef } from 'react'
import { Contenedor, Input, Button } from './styles'


const Buscador = () => {
    const [buscar, Guardar] = useState('')
    const reference = useRef(null);
    const handleChange = () =>{
        Guardar(reference.current.value)
    }
    const haledClick= () =>{
        console.log(reference.current.value)
        Guardar('')
    }
    return (
        <Contenedor>
            <Input
                type='text'
                name='buscar'
                value={buscar}
                onChange={handleChange}
                ref={reference}
            />
            <Button
                onClick={haledClick}
            >
                UseRef
            </Button>
        </Contenedor>
    )
}

export default Buscador
