import Colors from '@/constants/Colors';
import { StyleSheet, Text, Image, Pressable } from 'react-native';
import {Product} from '../types'
import {Link} from "expo-router"
export const defualtPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
}
const ProductListItem = ({ product } : ProductListItemProps) =>  {
    return(
      <Link href={`/(tabs)/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image 
          source={{uri : product.image || defualtPizzaImage}} 
          style = {styles.image}
          resizeMode='contain'
          />
        <Text style = {styles.title}>{product.name}</Text>
        <Text style = {styles.price}>${product.price}</Text>
      </Pressable>
      </Link>
    )
  }

export  default ProductListItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
      maxWidth: "50%",
    },
    title:  {
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 10,
    },
    price: {
      fontWeight: 'bold',
      color: Colors.light.tint,
    },
    image: {
      width: "100%",
      aspectRatio: 1,
    },
  });
  