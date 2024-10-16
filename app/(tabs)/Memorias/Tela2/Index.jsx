import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [imageUri, setImageUri] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const storedItems = await AsyncStorage.getItem('images');
      if (storedItems) setItems(JSON.parse(storedItems));
    };
    loadImages();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) setImageUri(result.assets[0].uri);
  };

  const addImage = async () => {
    const newItem = { id: Date.now().toString(), imageUri, title, description };
    const updatedItems = [...items, newItem];
    await AsyncStorage.setItem('images', JSON.stringify(updatedItems));
    setItems(updatedItems);
    setImageUri('');
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Memórias</Text>
      
      <Pressable style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Selecionar Imagem</Text>
      </Pressable>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.selectedImage} />}

      <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Descrição" value={description} onChangeText={setDescription} />

      <Pressable style={styles.button} onPress={addImage}>
        <Text style={styles.buttonText}>Adicionar Imagem</Text>
      </Pressable>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.imageUri }} style={styles.image} />
            <Text style={styles.imageTitle}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A52A2A',
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 3,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  imageTitle: {
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default App;
