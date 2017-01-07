import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class list extends Component{
    render(){
        return (
            <View style={styles.text}>
                 列表
            </View>
        )
    }
}


var styles = StyleSheet.create({
    text: {
        fontSize: 60
    }
});
module.exports = list;