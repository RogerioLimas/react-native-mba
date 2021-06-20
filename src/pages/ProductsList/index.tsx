import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { BorderlessButton as Button } from 'react-native-gesture-handler';

import { styles } from './styles';
import { getProductsList } from '../../services/api';

export default function ProductsList({ navigation }: any) {
    const [products, setProducts] = useState(Object);

    function goHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    useEffect(() => {
        getProductsList().then((items) => setProducts(items));
        navigation.setOptions({
            headerRight: () => (
                <Button
                    style={styles.exitButton}
                    onPress={goHome}
                >
                    <Text>Sair</Text>
                </Button>
            ),
        });
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
