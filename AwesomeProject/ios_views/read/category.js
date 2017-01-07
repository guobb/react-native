import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Util from '../util';

class category extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.text1}>
                    分类
                </View>
                <View style= {styles.row}>
                    <View style={styles.row_item}>
                        <View style= {styles.item}>
                            <Text style={styles.title}>互联网</Text>
                        </View>
                    </View>
                    <View style={styles.row_item}>
                        <View style= {styles.item}>
                            <Text style={styles.title}>散文</Text>
                        </View>
                    </View>
                    <View style={styles.row_item}>
                        <View style= {styles.item}>
                            <Text style={styles.title}>笑话</Text>
                        </View>
                    </View>
                    <View style={styles.row_item}>
                        <View style= {styles.item}>
                            <Text style={styles.title}>管理</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 10
    },
    text1: {
        color: '#5E5E5E',
        marginBottom: 5,
        fontSize: 17
    },
    row: {
        flexDirection: 'row',
        marginTop: 5
    },
    item: {
        height: 53,
        width: (Util.size.width - 10) /2,
        borderColor: '#f1F1F1',
        borderWidth: 1,//Util.size.pixel
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    row_item: {
        flex: 1,

    },
    title: {
        color: '#07070',
        fontSize: 17,
        fontWeight: '400'
    }
});
module.exports = category;