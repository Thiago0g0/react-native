import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = () => {
  const aluno = {
    nome: 'Thiago Domingos',
    idade: 19,
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Sobre mim</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.info}>Nome: <Text style={styles.boldText}>{aluno.nome}</Text></Text>
        <Text style={styles.info}>Idade: <Text style={styles.boldText}>{aluno.idade}</Text></Text>
        <Image
          style={styles.image}
          source={require('../../../assets/images/file.png')}
        />

        <Link href="/Sobre%20mim/Tela2" style={styles.button}>
          <Text style={styles.buttonText}>Músicas</Text>
        </Link>

        <Link href="/Sobre%20mim/Tela3" style={styles.button}>
          <Text style={styles.buttonText}>O que gosto</Text>
        </Link>
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
  navbarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 20,
    borderRadius: 150,
  },
  button: {
    backgroundColor: '#A52A2A',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footer: {
    backgroundColor: '#A52A2A', 
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
