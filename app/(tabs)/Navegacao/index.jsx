import { View, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (

    <View style={styles.container}>
      <View style={styles.linkContainer}>
        <Link href="/Banco" style={styles.linkText}>Banco Santander</Link>
      </View>

      <View style={styles.linkContainer}>
        <Link href="/Logo/Index" style={styles.linkText}>Logo</Link>
      </View>

      <View style={styles.linkContainer}>
        <Link href="/Calculadora" style={styles.linkText}>Calculadora</Link>
      </View>

      <View style={styles.linkContainer}>
        <Link href="/ListaTarefas" style={styles.linkText}>Lista de Tarefas</Link>
      </View>

      <View style={styles.linkContainer}>
        <Link href="/Picker" style={styles.linkText}>Pokemon</Link>
      </View>

      <View style={styles.linkContainer}>
        <Link href="/SignUP" style={styles.linkText}>SignUP</Link>
      </View>

      <View style={styles.linkContainer}>
        <Link href="/Sobre%20mim" style={styles.linkText}>Sobre mim</Link>
      </View>

      <View style={styles.linkContainer}>
        <Link href="/iFome" style={styles.linkText}>iFome</Link>
      </View> 

      <View style={styles.linkContainer}>
        <Link href="/Galeria" style={styles.linkText}>Galeria</Link>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },

  linkContainer: {
    backgroundColor: '#A52A2A',
    padding: 15,
    borderRadius: 70,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },

  linkText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
