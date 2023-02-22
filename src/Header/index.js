import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Header(props){
    return(
        <View style={styles.header} >
            <TouchableOpacity>
                <Image
                source={require('../img/logo.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={require('../img/Send2.png')}
                style={styles.logo}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles= StyleSheet.create({
header:{
    height: 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2
},
logo:{
    width: 25,
    height: 25
}
})