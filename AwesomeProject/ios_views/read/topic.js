
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import  Ulil from '../util';

class topic extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text1}>推荐专题</Text>
                </View>
                <View style={styles.img_view}>
                    <View style={styles.img_item}>
                        <Image resizeMode="cover" style={styles.img} source/>
                    </View>
                    <View style={styles.img_item}>
                        <Image resizeMode="cover" style={styles.img} source/>
                    </View>
                </View>
                <View>
                    <Text style={ styles.text2 }>查看更多同期专题 &gt;</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    img:{
        width: (Ulil.size.width - 30)/2,
        height: 75,
        borderRadius: 5
    },
    img_view: {
        flexDirection: 'row'
    },
    img_item: {
        flex: 1
    },
    text1: {
        color: '#5E5E5E',
        marginBottom: 5,
        fontSize: 17
    },
    text2: {
        color: '#ccc',
        marginTop: 6,
        fontSize: 13,
        textWeight: '300'

    }
});
module.exports = topic;