
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
 

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos!'}/>

    </>
  )
}

export default App
