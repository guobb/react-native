import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
import Twebview from './twebview';

class ToiletPage extends Component{
    render(){
        return (
            <View style={ styles.container }>
                <Twebview url="http://localhost:63342/react-native/AwesomeProject/html/nearby.html?_ijt=6ruobtskt6tukh70r9bp94ho4d"/>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
module.exports = ToiletPage;