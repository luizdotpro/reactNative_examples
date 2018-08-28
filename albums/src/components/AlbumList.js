import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(
            response => {
                response.json().then(data =>{
                    console.log('data -', data)
                })
            }
        )
    }
    render() {
        return (
            <View>
                <Text> Album List !!! </Text>
            </View>
        );
    }
}

export default AlbumList; 
