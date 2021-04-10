import React, { Component } from 'react';
import { StyleSheet, Text ,View } from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import constant from 'expo-constants';

export default class Heading extends Component<{}> {
    render() {
        const mycolor="#212121"
        return(
    <View style={{
        marginTop:constant.statusBarHighet,
        highet:40,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: 0.5,
    }}>
        
        <View style={{
            flexDirection:"row",
            margin:5
    }}>
        <Ionicons style={{
            marginLeft:20
        }}
         name="md-fast-food-outline" size={32} color="black" />
    
        <Text style={{
            fontSize:22,
            marginLeft:5,
            color:mycolor
        }}>اوريجانو</Text>
         </View>
        
        
        <View style={{
              flexDirection:"row",
              justifyContent:"space-around",
              width:150,
              margin:5,
              justifyContent:"space-around",
              width:150,
              margin:5
          }}>
        <Ionicons name="md-search" size={32} color={mycolor}
           />
           <MaterialIcons name="account-circle" size={32} color={mycolor}
           
           />
        </View>
    </View>
    
    ) 
}
}

// export function Heading({ children, style, ...props }) {
//     const { colors } = useTheme();
//     return (
//         <Text {...props} style={[styles.text, style, { color: colors.text }]}>
//             {children}
//         </Text>
//     );
// }

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 32,
//     },
// });