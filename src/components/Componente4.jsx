import { useState } from "react"

export default function Componente4(){

    const [professor,setProfessor]=useState({'nome':'','disciplina':''})

    function preencher(e){
        const {name,value} = e.target

        if(name == 'nome'){
            setProfessor({'nome':value,'disciplina':professor.disciplina})
        }else if(name == 'disciplina'){
            setProfessor({'nome':professor.nome,'disciplina':value})
        }
    }


    return(
        <>
            <p>O professor {professor.nome} leciona {professor.disciplina}</p>
            <input type="text" name='nome' onChange={preencher} /><br />
            <input type="text" name='disciplina' onChange={preencher} /><br />
        </>
    )
}