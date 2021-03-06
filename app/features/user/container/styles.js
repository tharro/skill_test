import {
    StyleSheet
} from "react-native";
import AppStyles from "../../../config/styles";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: AppStyles.color.COLOR_WHITE
    },
    footer: {
        flex:1,
        padding:20,
    },
    emptyList: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    itemList: {
        flex:1,
        borderWidth:1,
        borderColor: AppStyles.color.COLOR_GREY,
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:20
    },
    ItemSeparator: {
        height:10
    },
    color_name:{
        color: AppStyles.color.COLOR_BLACK,
        fontSize:17
    },
    color_email:{
        color: AppStyles.color.COLOR_GREY
    },
});

export default styles;