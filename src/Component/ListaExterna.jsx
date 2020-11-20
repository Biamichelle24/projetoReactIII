
import { useState, useEffect } from 'react'
import Titulo from './Titulo'

const ListaExterna = ()=>{

    const [repositories, setRepositories] = useState ([])
    const [filtroRepos, setFiltroRepos] = useState ([])
    const [busca,setBusca] = useState ('')


    useEffect(()=>{
        async function getData(){
            const response = await fetch ('https://api.github.com/users/biamichelle24/repos')
            const data = await response.json()

            setRepositories(data)

        } 
        getData ()

    },[])


    useEffect(()=> {
        setFiltroRepos(
            repositories.filter(repo =>{
                return repo.name.includes(busca)
            })
        )
    },[busca, repositories])

    return (
        <>
            <Titulo>Meus Pokemons</Titulo>

            <input type="text" 
            placeholder="digite o nome de um pokemon" 
            onChange={e=>{setBusca(e.target.value)}}/>

            <ul>{filtroRepos.map(repo=>{
                return <li key={repo.id}>{repo.name}</li>
            })}</ul>
        </>
    )
}

export default ListaExterna