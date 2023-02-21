import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Header from './src/Header'
import List from './src/List';

export default function App() {
const [feed, setFeed]= useState([
  {
    id: '1',
    nome: 'Wilson',
    descricao: 'Pegando um Tubo',
    imgperfil: 'https://i.pravatar.cc/150?img=7',
    imgpublicacao: 'http://1.bp.blogspot.com/-DfBMg4_guIM/Tui9JvD8OcI/AAAAAAAAADk/WkUp0Clrvq0/s1600/surf.jpg',
    comentario: '',
    hashatag: '#natação',
    likeada: true,
    likers: 0,
  },
  {
    id: '2',
    nome: 'Estrambolino',
    descricao: 'Aquele voo de moto',
    imgperfil: 'https://i.pravatar.cc/64',
    imgpublicacao: 'https://th.bing.com/th/id/OIP.-aNZAEvzoTpshvzrG6RdYwAAAA?w=241&h=180&c=7&r=0&o=5&pid=1.7',
    comentario: '',
    hashatag: '#moto #adrenalina',
    likeada: true,
    likers: 0,
  },
  {
    id: '3',
    nome: 'Istrambosio',
    descricao: 'Off-Road',
    imgperfil: 'https://i.pravatar.cc/94',
    imgpublicacao: 'https://www.shiftinglanes.com/wp-content/uploads/2017/02/rsz_ultra4-in-motion-2014-metalcloak-stampede.jpg',
    comentario: 'Hoje é dia de passear no deserto!',
    hashatag: '#off-road',
    likeada: true,
    likers: 0,
  },
])

  return (
    <View style={styles.container}>
      <Header/>

      <FlatList
      keyExtractor={(item) => item.id }
      data={feed}
      renderItem={({item}) => <List data={item}/> }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee8ea',
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 40,
  },
});
