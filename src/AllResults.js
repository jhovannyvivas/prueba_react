import { useEffect, useState } from "react"



export const AllResults = () => {
    const api = 'https://swapi.dev/api/';
    const [data, setData] = useState('');
    const [Error, setError] = useState('')
    useEffect(()=>{

        fetch(api).then((response) => response.json()).then((data)=> setData(data)).catch(()=> setError('error'))
    })
    console.log(data);

    return (
        <section>
            {<div>
                <div>films:   {data.flims}  </div>    
                <div>people:   {data.people} </div>    
                <div>planets: {data.planets}  </div>    
                <div>species: {data.species}  </div>    
                <div>starship:{data.starships}  </div>    
                <div>vehicles: {data.vehicles} </div>    
            </div>}
        </section>

    )
}