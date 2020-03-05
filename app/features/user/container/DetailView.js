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
import HeaderComponent from "../components/header/HeaderComponent";
import ButtonComponent from "../components/button/ButtonComponent";
import ContentComponent from "../components/content/ContentComponent";
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
                 <HeaderComponent 
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
                        <ContentComponent 
                            icon_name = "email"
                            title = "Email"
                            value = {this.state.detail_data.email}
                            marginTop={0}
                        />

                        <ContentComponent 
                            icon_name = "phone"
                            title = "Phone"
                            value = {this.state.detail_data.phone}
                            marginTop={5}
                        />
                    </View>

                    <View style={styles.detail_button_container}>
                        <ButtonComponent 
                            touch={() => this._mail(this.state.detail_data.email)}
                            title = "SEND A MAIL"
                        />
                        
                        <View style={{width:30}}/>

                        <ButtonComponent 
                            touch={() => this._call(this.state.detail_data.phone)}
                            title = "MAKE A CALL"
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}