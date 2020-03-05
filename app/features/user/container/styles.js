import {
    StyleSheet
} from "react-native";
import AppStyles from "../../../config/styles";
import color from "../../../config/styles";
import { isIphoneX } from '../../../lib/isIphoneX';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: AppStyles.color.COLOR_WHITE
    },
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
    footer: {
        flex:1,
        padding:20,
    },
    title: {
        color: color.color.COLOR_WHITE,
        fontSize: 20,
        fontWeight:'bold'
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
    detail_view_content: {
        flexDirection:'row', 
        flexWrap:'wrap',
        paddingHorizontal:10,
        alignItems:'center'
    },
    detail_info: {
        flex:1,
        marginLeft:10, 
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    detail_button_container: {
        flexDirection:'row', 
        marginTop:20
    },
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