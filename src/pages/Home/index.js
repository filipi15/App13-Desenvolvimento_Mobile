import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();

  let produtos = [
    { id: 1, titulo: 'Zara Larsson - Poster Girl (Vinil)', preco: 200.00, descricao: 'Disco de vinil do álbum Poster Girl da cantora sueca Zara Larsson. Produto novo e lacrado.', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbSeB1-bHyQHc8OjY04573NXgKhzjh4szzCILDzV6bA&s=10' },
    { id: 2, titulo: 'Ariana Grande - Petal (Vinil)', preco: 400.00, descricao: 'Disco de vinil do álbum Petal da cantora Ariana Grande. Edição de colecionador.', foto: 'https://acdn-us.mitiendanube.com/stores/003/152/347/products/texto-do-seu-paragrafo-2026-06-18t110703-411-64625fd77d509190da17817953833886-480-0.webp' },
    { id: 3, titulo: 'Lady Gaga - MAYHEM (Vinil)', preco: 300.00, descricao: 'Disco de vinil azul do álbum MAYHEM da cantora Lady Gaga, acompanha pôster.', foto: 'https://acdn-us.mitiendanube.com/stores/003/152/347/products/lady-gaga-mayhem-walmart-exclusive-opaque-blue-vinyl-alt-cover-poster_9850bbc3-c0f9-4c96-a580-948afc5da714-47149e650ad6de7a29186e735c7fc082-jpeg-aecb5a2af0c09909c117381668436611-640-0.webp' },
    { id: 4, titulo: 'Dua Lipa - Radical Optimism (Vinil)', preco: 150.00, descricao: 'Disco de vinil do álbum Radical Optimism da cantora Dua Lipa. Produto novo.', foto: 'https://imusic.b-cdn.net/images/item/original/386/5054197943386.jpg?dua-lipa-2024-radical-optimism-lp&class=scaled&v=1710405185' },
  ]

  function verDetalhes(produto) {
    navigation.navigate('Detalhes', produto);
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {produtos.map((produto) => {
          return (
            <View key={produto.id} style={styles.box}>
              <Image style={styles.imagem} source={{ uri: produto.foto }} />
              <Text style={styles.titulo}>{produto.titulo}</Text>
              <Button
                title="Ver detalhes"
                color="maroon"
                onPress={() => verDetalhes(produto)}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
