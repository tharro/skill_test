import React, {Component} from "react";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity
} from "react-native";
import styles from "../container/styles";
import Color from "../../../config/styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { navigateToScreen } from "../../../navigation/NavigationHelpers";
import HeaderComponent from "../../../components/header/HeaderComponent";

export default class UserView extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_data: this.props.user_data,
        }
    }

    componentDidMount(){
        this.props.onGetUser();
    }

    _navigate(screen, item){
        navigateToScreen(screen, item);
    }

    renderItem = ({item}) => {
        return(
            <TouchableOpacity 
            onPress={()=>this._navigate("Detail", item)}
            style={styles.itemList}>
                <Text style={styles.color_name}>{item.name}</Text>
                <Text style={styles.color_email}>{item.email}</Text>
            </TouchableOpacity>
        )
    }

    ItemSeparatorComponent = () => {
        return(
            <View 
                style={styles.ItemSeparator}
            />
        )
    }

    renderList(){
        if(this.props.loading){
            return (
                <View style={styles.emptyList}>
                    <ActivityIndicator 
                        size={"large"}
                        color={Color.color.COLOR_NAVIGATE}
                    />
                    <Text style={{
                            color: Color.color.COLOR_GREY,
                            marginTop:10,
                    }}>Loading...</Text>
                </View>
            )
        }
        else{
            if(this.state.user_data.length==0){
                return (
                    <View style={styles.emptyList}>
                        <AntDesign 
                            name="frowno"
                            color={Color.color.COLOR_GREY}
                            size={45}
                        />
                        <Text style={{
                            color: Color.color.COLOR_GREY,
                            marginTop:10,
                        }}>No data</Text>
                    </View>
                )
            }
            else{
                return (
                    <FlatList 
                        data={this.state.user_data}
                        renderItem={this.renderItem}
                        keyExtractor={(item)=>item.id}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                    />
                )
            }
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <HeaderComponent 
                    title = "User List"
                    children = {false}
                />
                <View style={styles.footer}>
                    {this.renderList()}
                </View>
            </View>
        )
    }
}