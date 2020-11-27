import { useState, useEffect } from 'react'
import '../Styles/Components/busca.css'
import api from '../Services/api'

const Busca = ()=>{
    const [ busca, setBusca] = useState('')
    const [ repositorios, setRepositorios ] = useState([])
    const [ btnVisible, setBtnVisible ] = useState(false)

    useEffect(()=>{
        
        async function getData(){
            const response = await api.get(`${busca}/repos`)
            const data = await response.data

            if(busca!== ''){
            setRepositorios(data)
           } 
        }
        getData()      
        

    },[busca])

    function handleBusca(e){
        setBusca(e.target.value)
        setBtnVisible(true)
    }

    function handleParams(){
        setRepositorios([])
        setBtnVisible(false)    
    }
    
    return(
        <div id="container">
            <h1>
                Busca Drag
            </h1>
            <p>
                Insira o nome da sua Drag Race!
            </p>
            <input 
                type="text" 
                placeholder="Digite seu user" 
                onChange={handleBusca}
            />                          
            
            <div>
                {repositorios.map(repo =>{
                    return <li key={repo.id}>{repo.name}</li>
                })}
                {btnVisible && <button onClick={handleParams}>Limpar Repos</button>}
            </div>

            
            
        </div>
    )
  
}
export default Busca