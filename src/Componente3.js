import { useState } from "react";


export const Componente3 = () => {
    const [Count, setCount] = useState(0);
    function suma () {
        setCount(Count + 1);
    }

    function resta () {
        setCount(Count - 1);
    }

    return (
        <section>
            <div><button onClick={suma}>Aumentar</button></div>
            <div>{Count}</div>
            <div><button onClick={resta}>disminuir</button></div>
        </section>
    )
}