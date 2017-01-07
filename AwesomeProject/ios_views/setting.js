import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Util from './util';
import Help from './settiong/help';
import Detail from './settiong/detail';
import About from './settiong/about';
import Tip from './settiong/tip';


class SettingView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ScrollView>
                <View>
                    <TouchableOpacity style={styles.img_view}>
                        <Image style={ styles.icon } source={require('image!logo')} resizeNode="contain"/>
                        <Text style={ styles.version}>
                            v1.0.0
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.text_view}
                        navigator={this.props.navigator}
                        onPress = { this._goPage.bind(this, Detail, '功能介绍' )}
                    >
                        <Text>功能介绍</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.text_view}
                        navigator={this.props.navigator}
                        onPress = { this._goPage.bind(this, Help, '帮助中心' )}

                    >
                        <Text>帮助中心</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.text_view}
                        navigator={this.props.navigator}
                        onPress = { this._goPage.bind(this, Tic, '服务条款' )}

                    >
                        <Text>服务条款</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.text_view, styles.add_buttom]}
                        navigator={this.props.navigator}
                        onPress = { this._goPage.bind(this, About, '关于' )}

                    >
                        <Text>关于</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
     _goPage(component, title){
        this.props.navigator.push({
            component: component,
            title: title
        })
     }
}

class setting extends Component{
    render(){
        return (

            <NavigatorIOS
                initialRoute={{
                    component: SettingView,
                    title: '设置',
                    navigationBarHidden: true
                }}
                style={{flex: 1}}
            />
        )

    }
}

var styles = StyleSheet.create({
    text_view: {
        borderTopWidth: Util.pixel,
        borderTopColor: '#ccc',
        height: 40,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    img_view: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight : '400',
        color: '#7e7f7e',
    },
    icon: {
        width: 88,
        height: 100
    },
    add_buttom: {
        borderBottomWidth: Util.pixel,
        borderBottomColor: '#ccc',
    },
    version: {
        fontSize: 13,
        fontWeight: '300',
        marginBottom: 30
    }

});
module.exports = Setting;