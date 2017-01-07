import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TWebView from './twebview';

class Wheather extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TWebView url=""/>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
module.exports = Wheather;