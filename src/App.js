import ListaExterna from './Component/ListaExterna'

function App() {

  const [texto, setTexto] = useState('estado inicial')

  function handleTexto(){
    setTexto('novo estado')
  }

  return(<>
           <ListaExterna/>
        </>)
}

export default App;
