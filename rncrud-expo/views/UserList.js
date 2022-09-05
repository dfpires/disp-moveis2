import {View, FlatList, Alert} from 'react-native'
import users from '../data/users'
import {List, Avatar} from 'react-native-paper'
import {Button, Icon} from 'react-native-elements'

export default props => {


  function confirmUserDelete(user){
    console.log('OK')
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
      },
      {
        text: 'Não'
      }
    ])
  }
  
  function getUserItem ({item: user}) {
    return (
      <List.Item
        title={user.name}
        description={user.email}
        left={ () => <Avatar.Image 
                          size={60} 
                          source={user.avatarUrl}
                        />
        }
        onPress={() => props.navigation.navigate('UserForm', user)}
        right={ 
          props => <>
                      <Button {...props}
                        onPress={ () => props.navigation.navigate('UserForm', user)}
                        type="clear"
                        icon={<Icon name="edit" size={25} color="orange"/>}
                      />
                      <Button
                        onPress={ () => confirmUserDelete(user)} 
                        type="clear"
                        icon={<Icon name="delete" size={25} color="red"/>}
                      />
                   </> 
        }
      />
    )
  }
 
  return (

    <View> 
      <FlatList 
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
        
      />
    </View>
    
  )
}