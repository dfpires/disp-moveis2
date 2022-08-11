import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'
export default props => {
  return (

      <PassoStack {...props} avancar="TelaB">
        <TextoCentral corFundo='#e53935' corTexto='#FFF'>
            Tela A
        </TextoCentral>
      </PassoStack>
  )
}