import React, {Component} from "react";
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Linking,
    TouchableOpacity
} from "react-native";
import styles from "../container/styles";
import Color from "../../../config/styles";
import HeaderView from "./HeaderView";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import moment from "moment";

export default class DetailView extends Component {
    constructor(props){
        super(props);
        this.state={
            detail_data: this.props.navigation.state.params.item,
            loading: false
        }
    }

    renderAvatar(value){
        if(value!==null && value!==undefined && value!==""){
            return(
                <ImageBackground 
                    source={{uri: value}}
                    style={{
                        width:100,
                        height:100,
                    }}
                    imageStyle={{ borderRadius: 50 }}
                    onLoadStart={() => { this.setState({ loading: true })} }
                    onLoad={() => { this.setState({ loading: false })} }
                >
                    {this.state.loading ?
                        <View style={{
                            height:100,
                            width:100,
                            borderRadius:50,
                            backgroundColor:'#f2f2f2',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Text style={{color:'gray', }}>AVATAR</Text>
                        </View>
                    :null}
                </ImageBackground>
            )
        }
    }

    _call(value){
        if(value==""){
            Alert.alert("Messages","No phone number!");
        }
        else{
            Linking.openURL(`tel:${value}`);
        }
    }

    _mail(value){
        if(value==""){
            Alert.alert("Messages","No email!");
        }
        else{
            Linking.openURL(`mailto:${value}`)
        }
    }

    formatTime(value){
        return moment(value, "YYYYMMDD").fromNow();
    }

    render(){
        return(
            <View style={styles.container}>
                 <HeaderView 
                    title = "Detail View"
                    children = {true}
                />
                <ScrollView style={styles.footer}>
                    <View style={[styles.detail_content,{
                        flexDirection:'row',
                    }]}>
                        {this.renderAvatar(this.state.detail_data.avatar)}
                        <View style={{flex:1, paddingHorizontal:20, justifyContent:'center'}}>
                            <Text style={styles.detail_name}>{this.state.detail_data.name}</Text>
                            <Text style={[styles.detail_orther,{
                                marginTop:5
                            }]}>{this.state.detail_data.job}</Text>
                            <Text style={[styles.detail_orther,{
                                marginTop:5
                            }]}>Joined {this.formatTime(this.state.detail_data.join_date)}</Text>
                        </View>
                    </View>

                    <View style={[styles.detail_content,{
                        marginTop:20
                    }]}>
                        <View style={styles.detail_view_content}>
                            <MaterialIcons 
                                name="email"
                                color={Color.color.COLOR_NAVIGATE}
                                size={25}
                            />
                            <View style={styles.detail_info}>
                                <Text style={styles.detail_orther}>Email: </Text>
                                <Text style={styles.detail_orther}>{this.state.detail_data.email}</Text>
                            </View>
                        </View>

                        <View style={[styles.detail_view_content,{
                            marginTop:5
                        }]}>
                            <MaterialIcons 
                                name="phone"
                                color={Color.color.COLOR_NAVIGATE}
                                size={25}
                            />
                            <View
                            style={styles.detail_info}>
                                    <Text style={styles.detail_orther}>Phone: </Text>
                                    <Text style={styles.detail_orther}>{this.state.detail_data.phone}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detail_button_container}>
                        <TouchableOpacity 
                            onPress={()=>this._mail(this.state.detail_data.email)}
                            style={styles.detail_button}>
                            <Text style={{color:'white', fontSize: 17}}>SEND A MAIL</Text>
                        </TouchableOpacity>
                        <View style={{width:30}}/>
                        <TouchableOpacity 
                            onPress={()=>this._call(this.state.detail_data.phone)}
                            style={styles.detail_button}>
                            <Text style={{color:'white', fontSize: 17}}>MAKE A CALL</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}