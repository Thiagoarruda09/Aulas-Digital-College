import {Button} from '@mui/material'
import {
  Favorite as FavoriteIcon, 
  Block as BlockIcon

} from '@mui/icons-material'
import Li from './components/Li.jsx'


export default function App(){

  const teste = () => {
    alert('teste')
  }
  
  let items = [
    'cadastrar',
    'Listar',
    'relatorios',
    'logout'
  ]

  return(
    <>
    <Button onClick={teste} startIcon={<FavoriteIcon/>}>teste</Button>
    <Button endIcon={<BlockIcon/>} variant="outlined">teste 2</Button>
    <Button variant="contained">teste 3</Button>

    <ul>
 {items.map(cadaItem =>{
  return(<Li>{cadaItem}</Li>)
 })}
    </ul>
    </>
  )
}


