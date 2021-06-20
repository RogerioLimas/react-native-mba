import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { getProductsList } from '../../services/api';

export default function ProductsList({ navigation } : any) {
    const [products, setProducts] = useState(Object);

    useEffect(() => {
        getProductsList().then((items) => setProducts(items));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(product) => product.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.card}>
                        <Text style={styles.producttitle}>{item.name}</Text>
                        <Text>Fabricante: {item.factory.name}</Text>
                        <View style={styles.priceSection}>
                            <Text>Preço: </Text>
                            <Text style={styles.price}>
                                R$ {item.price.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                        <Text>Quantidade em Estoque: {item.amount}</Text>
                    </View>
                )}
            />
        </View>
    );
}
