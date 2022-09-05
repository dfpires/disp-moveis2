
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

// cria um objeto de navegação em pilha
const Stack = createStackNavigator()

export default props => {

  return (
      <Stack.Navigator initialRouteName={TelaA}>
        <Stack.Screen name="TelaA" options={{title:'Página Principal'}} component={TelaA}>

        </Stack.Screen>
        <Stack.Screen name="TelaB" component={TelaB}>

        </Stack.Screen>
        <Stack.Screen name="TelaC" component={TelaC}>

        </Stack.Screen>

      </Stack.Navigator>

  )
}