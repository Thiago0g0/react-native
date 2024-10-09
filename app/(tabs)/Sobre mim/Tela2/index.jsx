import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, Linking } from 'react-native';
import { Link } from 'expo-router';

const TelaMusicas = () => {
  const musicas = [
    {
      id: '1',
      titulo: 'What I ve Done',
      artista: 'Linkin Park',
      ano: 2007,
      imagem: require('../../../../assets/images/linkinPark.png'),
    },
    {
      id: '2',
      titulo: 'You re Gonna Go far, kid',
      artista: 'The Offspring',
      ano: 2008,
      imagem: require('../../../../assets/images/youre.png'),
    },
    {
      id: '3',
      titulo: 'One last breath',
      artista: 'Creed',
      ano: 2001,
      imagem: require('../../../../assets/images/creed.png'),
      
    },
    {
      id: '4',
      titulo: 'Fading Star',
      artista: 'Weaving The Fate',
      ano: 2012,
      imagem: require('../../../../assets/images/fading.png'),
    },
    {
      id: '5',
      titulo: 'Boulevard of Broken Dreams',
      artista: 'Green Day',
      ano: 2004,
      imagem: require('../../../../assets/images/greenday.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cartaoMusica}>
      <Pressable onPress={() => Linking.openURL(item.youtubeUrl)}>
        <Image style={styles.imagemMusica} source={item.imagem} />
      </Pressable>
      <Text style={styles.tituloMusica}>{item.titulo}</Text>
      <Text style={styles.artistaMusica}>{item.artista}</Text>
      <Text style={styles.anoMusica}>{item.ano}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.textoNavbar}>Músicas</Text>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Lista de Músicas</Text>
        <FlatList
          data={musicas}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.lista}
        />
        <View style={styles.footer}>
          <Link href="/Sobre%20mim" style={styles.botao}>
            <Text style={styles.textoBotao}>Sobre mim</Text>
          </Link>
          <Link href="/Sobre%20mim/Tela3" style={styles.botao}>
            <Text style={styles.textoBotao}>O que gosto</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#A52A2A',
    padding: 15,
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textoNavbar: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lista: {
    width: '100%',
  },
  cartaoMusica: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 3,
  },
  imagemMusica: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  tituloMusica: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  artistaMusica: {
    fontSize: 16,
    color: '#555',
  },
  anoMusica: {
    fontSize: 14,
    color: '#999',
  },
  botao: {
    backgroundColor: '#A52A2A',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '8%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default TelaMusicas;
