import React, { useState } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";

let likeada = require('../img/likeada.png');
let like = require('../img/like.png')

export default function List(props){
    const [contador, setContador] = useState(0);

    return(
        <View>
          <View style={styles.viewPerfil} >
            <Image
            source={{uri:props.data.imgperfil}}
            style={styles.fotoPerfil}
            />
            <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
          </View>
          <View>
                <Text style={styles.descri}> {props.data.descricao} </Text>
            </View>
          <Image
          resizeMode='contain'
          source={{uri:props.data.imgpublicacao}}
          style={styles.fotoPub}
          />

          <View style={styles.areaBtn}>
            <TouchableOpacity onPress={()=>setContador(contador+1)}>
                <Image
                source={contador <= 0 ? like : likeada} 
                style={styles.like}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                source={require('../img/comment.png')}
                style={styles.like}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                source={require('../img/send.png')}
                style={styles.like}
                />
            </TouchableOpacity>
          </View>
          <View>
                <Text style={styles.textoLike} >{contador} curtidas </Text>
            </View>
            <View>
                <Text style={styles.textoTag} >{props.data.hashatag} </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    viewPerfil:{
        flexDirection: 'row',
        fle: 1,
        alignItems: 'center',
        padding: 10,
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    nomeUsuario:{
        paddingLeft: 10,
        fontSize: 17,
        color: '#000'
    },
    fotoPub:{
        height: 300,
        width: '100%',
        alignItems: "center"
    },
    areaBtn:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 3,
    },
    like:{
        height: 30,
        width: 30,
        marginLeft: 12,
    },
    textoLike:{
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    textoTag:{
        paddingLeft: 10,
        fontSize: 15,
        paddingBottom: 20,
    },
    descri:{
        paddingLeft: 10,
        fontSize: 15,
    },
});