import TextoCentral from '../components/TextoCentral'
//import PassoStack from '../components/PassoStack'
import {Pressable, Text} from 'react-native'
export default ({navigation}) => {
  return (

     // <PassoStack {...props} avancar="TelaB">
        <TextoCentral corFundo='#e53935' corTexto='#FFF'>
            Menu A
            <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Text>Open Drawer</Text>
      </Pressable>
        </TextoCentral>
    //  </PassoStack>
  )
}