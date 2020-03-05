import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../config/styles";
import {navigateGoBack} from "../../navigation/NavigationHelpers";

export default class HeaderComponent extends Component{
    render(){
        return(
            <View style={styles.header}>
                <TouchableOpacity style={styles.header_right}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </TouchableOpacity>

                {this.props.children ? 
                    <TouchableOpacity 
                    onPress={()=>navigateGoBack()}
                    style={styles.icon}>
                        <Ionicons 
                            name="ios-arrow-round-back"
                            color={Color.color.COLOR_WHITE}
                            size={30}
                        />
                    </TouchableOpacity>
                :null}
            </View>
        )
    }
}
