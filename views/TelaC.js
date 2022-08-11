import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'

export default props => {
  return (
    <PassoStack {...props} voltar avancar="TelaC">
      <TextoCentral corFundo='#9932cd' corTexto='#FFF'>
          Tela C
      </TextoCentral>
    </PassoStack>  
  )
}