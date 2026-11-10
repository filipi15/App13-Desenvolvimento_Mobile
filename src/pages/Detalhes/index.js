import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Detalhes({ route }) {
  const navigation = useNavigation();

  navigation.setOptions({
    title: route.params?.titulo
  })

  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={{ uri: route.params?.foto }} />
      <Text style={styles.titulo}>{route.params?.titulo}</Text>
      <Text style={styles.preco}>Preço: R$ {route.params?.preco.toFixed(2)}</Text>
      <Text style={styles.descricao}>{route.params?.descricao}</Text>

      <Button
        title="Voltar"
        color="maroon"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
