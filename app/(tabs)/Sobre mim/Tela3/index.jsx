import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';

const TelaGosto = () => {
  const coisasQueEuGosto = [
    {
      id: '1',
      titulo: 'Jogar',
      descricao: 'Gosto de jogar.',
      imagem: require('../../../../assets/images/games.png'),
    },
    {
      id: '2',
      titulo: 'Sou Preguiçoso',
      descricao: 'Eu durmo bastante.',
      imagem: require('../../../../assets/images/cama.png'),
    },
    {
      id: '3',
      titulo: 'Animal de Estimação',
      descricao: 'Eu tenho um gato e gosto muito de gatos.',
      imagem: require('../../../../assets/images/gatos.png'),
    },
    {
      id: '4',
      titulo: 'Escutar Música',
      descricao: 'Escuto música o tempo todo.',
      imagem: require('../../../../assets/images/spotfy.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.cartao}>
      <Image style={styles.imagem} source={item.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.textoNavbar}>O que Gosto de fazer:</Text>
      </View>

      <View style={styles.conteudo}>
        <FlatList
          data={coisasQueEuGosto}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2} 
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.lista}
        />
        <View style={styles.footer}>
          <Link href="/Sobre%20mim/Tela2" style={styles.botao}>
            <Text style={styles.textoBotao}>Músicas</Text>
          </Link>
          <Link href="/Sobre%20mim" style={styles.botao}>
            <Text style={styles.textoBotao}>Sobre Mim</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },

  navbar: {
    backgroundColor: '#A52A2A',
    padding: 20,
    alignItems: 'center',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
  },

  textoNavbar: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  conteudo: {
    flex: 1,
    alignItems: 'center',
  },

  cartao: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    margin: 10, 
    alignItems: 'center',
    flex: 1,
    elevation: 4,
    shadowColor: '#000',

  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center', 
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#A52A2A',
    padding: 15,
    borderRadius: 5,
    width: '8%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default TelaGosto;
