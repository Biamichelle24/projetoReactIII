import dados from '../Services/dados'
import '../Styles/Pages/drag.css'

import Sidebar from '../Components/Sidebar'
import Busca from '../Components/Busca'

import Menu from '../Components/Menu'



const ListaInterna = ()=>{

    return(
        <>
        <Menu/>
        <Sidebar/>
            <Busca/>
            <div id= "containerr">            
                
                {dados.map(drags=>{
                    return <div className="card" key={drags.id}>
                        <h3>Nome: {drags.name}</h3>
                        <p>quote: {drags.quote}</p>
                    </div>
                })}             
            </div>
        </>
    )
}

export default ListaInterna