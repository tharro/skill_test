import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import styles from "./styles";

export default class ButtonComponent extends Component{
    render(){
        return(
            <TouchableOpacity 
                onPress={this.props.touch}
                style={styles.detail_button}>
                <Text style={{color:'white', fontSize: 17}}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
