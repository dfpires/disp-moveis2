import TextoCentral from '../components/TextoCentral'
//import PassoStack from '../components/PassoStack'

export default props => {
  const r = props.route
  const numero = r && r.params && r.params.numero ?
      r.params.numero : 0
  
  return (

  //  <PassoStack {...props} voltar avancar="TelaC">
      <TextoCentral corFundo='#9932cd' corTexto='#FFF'>
          Tela C - {numero}
      </TextoCentral>
 //   </PassoStack>  
  )
}