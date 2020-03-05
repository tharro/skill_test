import {
    StyleSheet
} from "react-native";
import AppStyles from "../../../../config/styles";

const styles = StyleSheet.create({
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
});

export default styles;