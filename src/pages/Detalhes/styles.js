import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imagem: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginBottom: 15,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  preco: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export { styles };
