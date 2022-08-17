import { useState } from "react";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import Componente3 from "./components/Componente3";
import Componente4 from "./components/Componente4";

export default function App(){

    const [num, setNum]=useState(0)
    

    return(
        <>
            <h1>Aula 03</h1>
            <Componente4/>
            <Componente3/>
            <Componente2/>
            <Componente1>

                <p>O número {num} é : {num%2 == 0 ? "é par":"é impar"}</p>
                {num % 2 == 0?
                <p>O número é par</p>
                : <p>O número é impar</p>
                }
                <button onClick={()=>setNum(num + 1)}>Num++</button>
                <p>Primeiro Parágrafo</p>
                <p>Segundo Parágrafo</p>
                <p>Terceiro Parágrafo</p>



            </Componente1>
        </>
    )
}