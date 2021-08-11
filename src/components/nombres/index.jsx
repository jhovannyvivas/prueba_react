import React, { useEffect, useState } from 'react'

function Nombres() {

    const url= "https://swapi.dev/api/people/"

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPersonajes(data);
            })
    }, [])

    console.log(personajes);

    return personajes.length === 0 ? <h1 className="loading">Loading...</h1> :  (
        <>
            <section>
                {personajes.results.map( (personaje) => {
                    return(
                        <p>{personaje.name} </p>
                    )
                })}
            </section> 
        </>
    )
}

export default Nombres
