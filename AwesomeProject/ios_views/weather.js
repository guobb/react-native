import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Wheather extends Component{
    render(){
        return (
            <View style={styles.text}>
                天气
            </View>
        )
    }
}


var styles = StyleSheet.create({
    text: {
        fontSize: 60
    }
});
module.exports = Wheather;