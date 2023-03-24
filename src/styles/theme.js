import Colors from "../theme/colors"
import fonts from "../theme/fonts"

const container={
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:10
    }

const cards={
    cardContainer:{
        flex:1,
        elevation:4,
        backgroundColor:Colors.lightColor,
        shadowOffset:{
            width:0,
            height:3
        },
        borderRadius:10,
        overflow:'hidden',
        shadowOpacity:0.3,
        shadowColor:Colors.shadowColor,
        marginVertical:10
    },
    imageContainer:{},
    infoContainer:{
        flex:1,
        alignItems:"center"
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    descriptionContainer:{
        marginTop:15
    },
    titleText:{
        fontSize:15,
        fontFamily:fonts.types.robotoRegular.name
    },
    priceText:{
        marginTop:10,
        fontSize:20,
        fontWeight:700,
        fontFamily:fonts.types.robotoRegular.name
    },
    descriptionText:{
        fontSize:15,
        textAlign:'justify',
        fontFamily:fonts.types.robotoRegular.name
    }
}

export default {
    container,
    cards
}