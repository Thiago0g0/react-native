import React, { useState, createContext, useContext } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Image, Alert } from 'react-native';

const CarrinhoContext = createContext();

const AppProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (lanche) => {
    setCarrinho((prev) => [...prev, lanche]);
  };

  const finalizarCompra = () => {
    Alert.alert('Compra finalizada!');
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, finalizarCompra }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

const SelecionarLanches = ({ navegarParaCarrinho }) => {
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  const lanches = [
    { id: '1', 
    nome: 'Hambúrguer', 
    preco: 15.00, 
    imagem: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$k6XkEN44/200/200/original?country=br'},

    { id: '2',
    nome: 'Pizza',
    preco: 70.90,
    imagem: 'https://www.diromapizza.com.br/imagens/card/card_50.jpg' },

    { id: '3',
    nome: 'Fanta garrafa 500ml',
    preco: 7.00,
    imagem: 'https://m.media-amazon.com/images/I/51sU7ixRoQL._SX569_.jpg' },

    { id: '4',
    nome: 'Espaguete com molho de tomate 400g',
    preco: 25.00,
    imagem: 'https://img.cybercook.com.br/receitas/610/espaguete-com-molho-a-bolonhesa-ou-ragu-bolognese-1-840x480.jpeg?q=75' },

    { id: '5',
    nome: 'Carne',
    preco: 150.00,
    imagem: 'https://swiftbr.vteximg.com.br/arquivos/subcategoria-bovinos-churrasco.png?v=637837412291200000' },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione seu pedido</Text>
      <FlatList
        data={lanches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.lancheContainer}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text style={styles.lancheNome}>{item.nome}</Text>
            <Text>{item.descricao}</Text>
            <Text>Preço: R$ {item.preco.toFixed(2)}</Text>
            <Pressable style={styles.button} onPress={() => adicionarAoCarrinho(item)}>
              <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
            </Pressable>
          </View> 
          )}

      />
      <Pressable style={styles.button} onPress={navegarParaCarrinho}>
        <Text style={styles.buttonText}>Ver Carrinho</Text>
      </Pressable>
    </View>
  );
};


const Carrinho = ({ navegarParaLanches }) => {
  const { carrinho, finalizarCompra } = useContext(CarrinhoContext);

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>
      {carrinho.length === 0 ? (
        <Text>Carrinho vazio!</Text>
      ) : (
        <>

          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text>{item.nome} - R$ {item.preco.toFixed(2)}</Text>
              </View>
            )}

          />
          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
          <Pressable style={styles.button} onPress={finalizarCompra}>
            <Text style={styles.buttonText}>Finalizar Compra</Text>
          </Pressable>
        </>

      )}
      <Pressable style={styles.button} onPress={navegarParaLanches}>
        <Text style={styles.buttonText}>Continuar Comprando</Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  const [telaAtual, setTelaAtual] = useState('selecionar');

  const navegarParaCarrinho = () => {
    setTelaAtual('carrinho');
  };

  const navegarParaLanches = () => {
    setTelaAtual('selecionar');
  };

  return (
    <AppProvider>
      {telaAtual === 'selecionar' ? (
        <SelecionarLanches navegarParaCarrinho={navegarParaCarrinho} />
      ) : (
        <Carrinho navegarParaLanches={navegarParaLanches} />
      )}
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  lancheContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  lancheNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#A52A2A',
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default App;
