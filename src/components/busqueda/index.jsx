import React, { useEffect, useState } from 'react'

function Busqueda({name}) {

    const api = "https://swapi.dev/api/people/?search="

    const nombre = name

    const url = `${api}${nombre}`

    const [personaje, setPersonaje] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPersonaje(data);
            })
    }, [personaje])

    console.log(personaje);

    return (
        <>
            {personaje ? (
                <>
                    <section>
                        <p>Nombre: {personaje.results[0].name}</p>
                        <p>Altura: {personaje.results[0].height}</p>
                        <p>Masa: {personaje.results[0].mass}</p>
                    </section>
                </>
            ) : <h1>Loading...</h1> }
            
        </>
    )
}

export default Busqueda
