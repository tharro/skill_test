import {
    StyleSheet
} from "react-native";
import AppStyles from "../../../../config/styles";

const styles = StyleSheet.create({
    detail_button: {
        flex:1,
        paddingHorizontal:15,
        paddingVertical:20,
        borderRadius:10, 
        backgroundColor: AppStyles.color.COLOR_BUTTON,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default styles;