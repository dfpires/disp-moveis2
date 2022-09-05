
import 'react-native-reanimated'
import MenuA from '../views/MenuA'
import MenuB from '../views/MenuB'
import MenuC from '../views/MenuC'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

export default props => {

  return (
    <Drawer.Navigator >
      
      <Drawer.Screen name="MenuA" component={MenuA}/>
      
      <Drawer.Screen name="MenuB" component={MenuB}/>

      <Drawer.Screen name="MenuC" component={MenuC}/>
    
    </Drawer.Navigator>
  
  )

}