import React from 'react';
import {StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons} from "@expo/vector-icons";
import PropTypes from 'prop-types'

// export default class Weather extends React.Component{
//     render() {
//         return (
//             <LinearGradient colors={['#00c6fb','#005bea']} style={styles.container}>
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy"/>
//                     <Text style={styles.temp}>{this.props.data}º</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining like a MF</Text>
//                     <Text style={styles.subTitle}>For more info</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }
const weatherCase={
    Rain:{
        colors:['#00c6fb','#005bea'],
        title:"비 온다",
        subtitle:"너무 싫어ㅡㅡ",
        icon:'ios-rainy'
    },
    Clear:{
        colors:['#fef253','#ff7300'],
        title:"날씨 맑아",
        subtitle:"나가서 놀자~",
        icon:'ios-sunny'
    },
    Thunderstorm:{
        colors:['#00ecbc','#007adf'],
        title:"천둥친다",
        subtitle:"무서워ㅠㅠ",
        icon:'ios-thunderstorm'
    },
    Clouds:{
        colors:['#d7d2cc','#304352'],
        title:"구름 낌",
        subtitle:"우울해ㅠ",
        icon:'ios-cloudy'
    },
    Snow:{
        colors:['#7de2fc','#b9b6e5'],
        title:"눈온다",
        subtitle:"눈사람 만들자",
        icon:'ios-snow'
    },
    Drizzle:{
        colors:['#89f7fe','#66a6ff'],
        title:"이슬비",
        subtitle:"축축축축",
        icon:'ios-rainy-outline'
    }
}
function Weather({temp,name,city}) {
    return(
        <LinearGradient colors={weatherCase[name].colors} style={styles.container}>
                          <View style={styles.upper}>
                              <Text style={styles.temp}>{city}시 날씨</Text>
                               <Ionicons color="white" size={144} name={weatherCase[name].icon}/>
                           <Text style={styles.temp}>{temp}º</Text>

                         </View>
                          <View style={styles.lower}>
                            <Text style={styles.title}>{weatherCase[name].title}</Text>
                               <Text style={styles.subTitle}>{weatherCase[name].subtitle}</Text>
                         </View>
                       </LinearGradient>
    );
}
Weather.propTypes={
    temp:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired
};
export default Weather;

const styles=StyleSheet.create({
container:{
    flex:1
},
    upper:{
    flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    temp:{
        fontSize:38,
        color:'white',
        marginTop:10,
        backgroundColor:'transparent'
    },
    lower:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingLeft:25
    },
    title:{
        fontSize:38,
        color:'white'
        ,marginBottom:10,
        backgroundColor:'transparent',
        fontWeight: '300'
    },
    subTitle:{
        fontSize:24,
        color:'white',
        marginBottom:24,
        backgroundColor:'transparent'
    }
});
