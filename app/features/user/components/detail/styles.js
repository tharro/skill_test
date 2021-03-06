import {
    StyleSheet
} from "react-native";
import AppStyles from "../../../../config/styles";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: AppStyles.color.COLOR_WHITE
    },
    footer: {
        flex:1,
        padding:20,
    },
    detail_content:{
        borderWidth:1, 
        borderRadius:10,
        borderColor:'gray',
        paddingHorizontal:10,
        paddingVertical:20,
    },
    detail_name: {
        color: AppStyles.color.COLOR_BLACK,
        fontSize:17
    },
    detail_orther: {
        color: AppStyles.color.COLOR_GREY,
        fontSize:15
    },
    detail_button_container: {
        flexDirection:'row', 
        marginTop:20
    },
});

export default styles;