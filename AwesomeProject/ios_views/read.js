import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    NavigatorIOS
} from 'react-native';

import Category from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';
import Util from './util';

class Hr extends Component {
    render(){
        return (
            <View>
                <View style={styles.hr}></View>
            </View>
        )
    }
}
class ReadView extends Component{
    constructor(){
        super();
        this.state ={
            isShow: false
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Search/>
                <Hr/>
                {
                    this.state.isShow?
                    <ScrollView style={styles.container}>
                        <Topic/>
                        <Hr/>
                        <Recommend/>
                        <Hr/>
                        <Category/>
                        <Hr/>
                        <Recommend/>
                    </ScrollView>
                    : null
                }

            </View>
        )
    }
    // todo: fecth data
    componentDidMount(){
        this.setState({
            isShow: true
        })
    }
}

class read extends Component{
    render(){
        return (
            <NavigatorIOS
                initialRoute={{
                    component: ReadView,
                    title: '阅读',
                    navigationBarHidden: true
                }}
                style={{flex: 1}}
            />
        );
    }
}

var styles = StyleSheet.create({
    container: {
      flex: 1
    },
    hr: {
        borderColor: "#f0f0f0",
        borderWidth: Util.pixel,
        marginTop: 10
    }
});
module.exports = Read;