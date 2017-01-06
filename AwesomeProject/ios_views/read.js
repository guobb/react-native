import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Read extends Component{
    render(){
        return (
            <View style={styles.text}>
                阅读
            </View>
        )
    }
}


var styles = StyleSheet.create({
    text: {
        fontSize: 60
    }
});
module.exports = Read;