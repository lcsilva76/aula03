import { useState } from "react"

export default function Componente3(){

    const [pessoa, setPessoa]= useState({'nome':'','sobrenome':''})

    function completo(e){
        const {name,value}= e.target

        if(name == 'nome'){
            setPessoa({'nome':value,'sobrenome':pessoa.sobrenome})
        }else if(name == 'sobrenome'){
            setPessoa({'nome':pessoa.nome,'sobrenome':value})
        }
    }

    return(
        <>
            <p>Meu nome é: {pessoa.nome} {pessoa.sobrenome}.</p>
            <input type="text" name='nome' onChange={completo}/><br />
            <input type="text" name='sobrenome' onChange={completo}/><br />
        
        </>
    )
}