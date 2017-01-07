import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

import Util from '../util';
import TWebView from '../twebview';

class list extends Component{

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            url: props.url,
            dataSource: ds.cloneWithRows([]),
        }

    }
    render(){
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <TouchableOpacity
                        style={style.item}
                        onPress = {this._showWebPage.bind(this, rowData.url, rowData.title)}
                    >
                        <View>
                            <Image style={styles.img} source={{url: rowData.img}}/>
                        </View>
                        <view style={styles.text_wraper}>
                            <Text style={styles.title} numberOfLines = {1}>{rowData.title}</Text>
                            <Text style={styles.time}>{rowdata.time}</Text>
                        </view>
                    </TouchableOpacity>
                }
            />
        )
    }

    componentDidMount(){
        let url = this.state.url;
        let that = this;
        Util.get(url, function (data) {
            if(data.status === 1){
                let data = data.data;
                var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                that.setState({
                    dataSource: ds.cloneWithRows(data),
                })
            }else{
                console.log('调用数据失败');
            }

        }, function (err) {
            alert('服务出现异常')
        })
    }

    _showWebPage(url, title){
        this.props.navigator.push({
            component: TWebView,
            title: title,
            passProps:{
                url: url
            }
        })
    }
}


var styles = StyleSheet.create({
    item: {
        height: 78,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: '#EDEDED',
        borderBottomWidth: Util.pixel,
        flexDirection: 'row'
    },
    img: {
        width: 72,
        height: 72,
        borderRadius: 3,
        marginTop: 5,
    },
    text_wraper: {
        marginLeft: 5,
        flex:1
    },
    title: {
        fontSize: 16,
        marginTop: 10
    },
    time: {
        color: '#ddd',
        fontSize: 13,
        marginTop: 5
    }
});
module.exports = list;