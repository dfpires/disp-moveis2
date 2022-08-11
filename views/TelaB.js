import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'

export default props => {
  return (

    <PassoStack {...props} avancar="TelaC" voltar>
      <TextoCentral corFundo='#3b82c4' corTexto='#FFF'>
          Tela B
      </TextoCentral>
    </PassoStack>  
  )
}