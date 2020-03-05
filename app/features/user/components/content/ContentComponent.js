import React, {Component} from "react";
import {
    View,
    Text,
} from "react-native";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Color from "../../../../config/styles";

export default class ContentComponent extends Component{
    render(){
        return(
            <View style={[styles.detail_view_content,{
                marginTop: this.props.marginTop
            }]}>
                <MaterialIcons 
                    name={this.props.icon_name}
                    color={Color.color.COLOR_NAVIGATE}
                    size={25}
                />
                <View style={styles.detail_info}>
                    <Text style={styles.detail_orther}>{this.props.title}: </Text>
                    <Text style={styles.detail_orther}>{this.props.value}</Text>
                </View>
            </View>
        )
    }
}
