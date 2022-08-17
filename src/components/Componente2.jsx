import { useState } from "react"

export default function Componente2(){

    const [carro,setCarro]=useState({'marca':'','modelo':''})

    function mudar(e){
        let {name,value}= e.target

        if(name == 'marca'){
            setCarro({'marca':value,'modelo':carro.modelo})
        }else if(name == 'modelo'){
            setCarro({'marca':carro.marca,'modelo':value})
        } 
    }

    return(
        <>
            <p>O carro {carro.modelo} é da marca {carro.marca}</p>
            Modelo:<input type="text" name="modelo" onChange={mudar} /><br />
            Marca:<input type="text" name="marca" onChange={mudar} /><br />
        </>
    )
}