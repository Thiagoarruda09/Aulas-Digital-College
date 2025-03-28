import './styles/custom.css';
import Button from './components/Button.jsx'
import Paragraph from './components/Paragrafo.jsx'


export default function App() {
  let nome = "thiago"
  

  return (
    <>
    <h1>ola mundos</h1>
    <hr/>
    <h2>ola, me chamo {nome}</h2>
    <Paragraph>teste de paragrafo</Paragraph>
    <Paragraph cor="green">teste de paragrafo 2</Paragraph>
    <Paragraph cor="blue">teste de paragrafo 3</Paragraph>

    <Button>teste</Button>
    <Button>relatorios</Button>
    <Button>menu</Button>

     
    </>
  )
}
