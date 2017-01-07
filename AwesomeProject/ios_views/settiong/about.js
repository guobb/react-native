import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert
} from 'react-native';

import Util from './../util';
Alert.alert(
    '提示',
    '以下是作者信息',
    [
        {text:'取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text:'确定', onPress: () => consele.log('ok Pressed')}
    ]
)

class About extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.text}>如果问题,请联系: 768081262@qq.com</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text:{
        fontSize:16,
        fontWeight:'300',
        marginBottom:15,
        marginLeft:10,
        marginTop:3
    }
});

module.exports = About;