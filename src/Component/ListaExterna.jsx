import Titulo from './Titulo'
import { useState, useEffect } from 'react'


const ListaExterna = ()=>{

    const [repositories, setRepositories] = useState ([])
    const [filtro, setFiltro] = useState([])
    const [busca, setBusca] = useState ('')

    useEffect(() => {
        async function getData(){
        const response = await fetch ('http://www.nokeynoshade.party/api/queens/')
        const data = await response.json()
            
        setRepositories(data)
            
        } 
        getData ()

    },[])

    useEffect(() => {
        setFiltro(
            repositories.filter(repo=>{
                return repo.name.includes(busca)
            })
        )
        
    }, [busca, repositories])


        return(
            <>
                <Titulo title="RuPaul Drag Race" subtitle="Escolha a sua Drag preferida"/>

                <input type="text" placeholder="Digite um nome" onChange={e=>{setBusca(e.target.value)}}/>

                <ul>{filtro.map(repo=>{
                    return <li key={repo.id}>{repo.name}</li>
            })}</ul>
            </>
        )
}

export default ListaExterna