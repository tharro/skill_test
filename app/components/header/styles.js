import {
    StyleSheet
} from "react-native";
import AppStyles from "../../config/styles";
import { isIphoneX } from '../../lib/isIphoneX';
import color from "../../config/styles";

const styles = StyleSheet.create({
    header: {
        backgroundColor: AppStyles.color.COLOR_NAVIGATE,
        width: '100%',
        height: isIphoneX() ? 90 : 60,
       
    },
    header_right: {
        flex:1,
        justifyContent: isIphoneX() ? 'flex-end' : 'center',
        alignItems:'center',
        paddingBottom: isIphoneX() ? 15 : 0,
    },
    icon: {
        justifyContent: isIphoneX() ? 'flex-end' : 'center',
        paddingBottom: isIphoneX() ? 10 : 0,
        marginLeft:15,
        position:'absolute', 
        left:0, 
        bottom:0, 
        right:0, 
        top:0,
    },  
    title: {
        color: color.color.COLOR_WHITE,
        fontSize: 20,
        fontWeight:'bold'
    },
});

export default styles;