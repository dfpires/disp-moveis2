import { StyleSheet, Text, View, FlatList } from 'react-native';

import React, {Component} from 'react'

import api from './services/api'
import Filmes from './Filmes/index'

const initialState = {
    filmes: []
}
export default class App extends Component{

    state = {initialState}

    async componentDidMount(){
        const response = await api.get(`r-api/?api=filmes`)
        this.setState({
            filmes: response.data
        })
        console.log(`mount`)
    }

    render () { 
        return ( 
            <View style = { styles.container } >
                <Text > Lista de Filmes </Text>  
                <FlatList
                    data={this.state.filmes} 
                    keyExtractor={ item => item.id.toString()}
                    renderItem={ ({item}) => <Filmes data={item}/>}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 50
    },
});
