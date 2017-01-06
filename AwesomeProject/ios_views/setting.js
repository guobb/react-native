import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Setting extends Component{
    render(){
        return (
            <View style={styles.text}>
                设置
            </View>
        )
    }
}


var styles = StyleSheet.create({
    text: {
        fontSize: 60
    }
});
module.exports = Setting;