
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Util from '../util';

class search extends Component{
    render(){
        return (
            <View style= {styles.container}>
                <TextInput
                    style = {styles.search_input}
                    placeholder="搜素"
                />
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 20
    },
    search_input: {
        height: 35,
        borderWidth: util.pixel,
        borderColor: '#EEE',
        padding: 5,
        barderRadius: 3,
        fontSize: 14
    }
});
module.exports = search;