import {useState, useEffect} from 'react'



export const GetData = () => {
    

    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://swapi.dev/api/')
        .then(resp => resp.json())
        .then(dat => setData(dat))
    }, [])

function MostrarData() {
    
    console.log(data);
}


    return(
        <button onClick={ MostrarData }>data</button>
    )
}



