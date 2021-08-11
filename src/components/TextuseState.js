
import { useState } from 'react'

export const TextuseState = () => {

    const [text, setText] = useState('')
    return (
        <div>
            <button onClick={() => setText('Hola Mundo' )}>Dale Click</button>
            <p>Y hoy decimos { text }</p>
            <button onClick={() => setText('')}>Adios</button>
        </div>
    )
}
