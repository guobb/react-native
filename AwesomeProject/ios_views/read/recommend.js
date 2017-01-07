import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Util from '../util';
class recommend extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text1, styles.title_top]}>热门推荐</Text>
                </View>
                <View style={styles.img_view}>
                    <View style={[styles.img_item, styles.shadow]}>
                         <Image style={styles.img} source/>
                         <Text style={styles.title} numberOfLines={2}>标题</Text>
                    </View>
                    <View style={styles.img_item}>
                        <Image source/>
                        <Text>标题</Text>
                    </View>
                    <View style={styles.img_item}>
                        <Image source/>
                        <Text>标题</Text>
                    </View>
                    <View style={styles.img_item}>
                        <Image source/>
                        <Text>标题</Text>
                    </View>
                </View>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    img_view:{
        flexDirection: 'row'
    },
    img_item:{
        flex:1,
        height: 156,
    },
    shadow: {
        shadowOpacity: 1,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 1*Util.pixel,
            height: Util.pixel
        }
    },
    img: {
        height: 120,
        width: (Util.size.width - 40)/4
    },
    text1: {
        color: '#5e5e5e',
        marginBottom: 8,
        fontSize: 16
    },
    title_top: {
        marginTop: 10
    },
    title: {
        marginTop: 4,
        fontSize: 14,
        color: '#ccc'
    }
});
module.exports = recommend;