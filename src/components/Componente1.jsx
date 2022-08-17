import { useState } from "react"

export default function Componente1(props){

    const frutas = ["banana","pera", "uva", "laranja"]

    const [frase,setFrase]=useState('')

    return(
        <>
            <h2>Componente 1</h2>
            <p>{frase}</p>
            <input type="text" onChange={(e)=>setFrase(e.target.value)} /><br />
            {frutas.map((f)=><p>{f}</p>)}
            {frutas.map((f,i)=><p>{i+1}ª fruta = {f}</p>)}

            {props.children}
        </>
    )
}