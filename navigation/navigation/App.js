import 'react-native-reanimated'
import { SafeAreaView } from 'react-native';
//import Stack from './navegacao/Stack'
import Tab from './navegacao/Tab'
// import Drawer from './navegacao/Drawer'
import {NavigationContainer} from '@react-navigation/native'

global.__reanimatedWorkletInit = () => {};

export default props => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            {/* <Stack/>*/}
             <Tab /> 
            {/* <Drawer /> */}
        </NavigationContainer>
    </SafeAreaView>
  );
}