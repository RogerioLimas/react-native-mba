import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export default function EasterEgg() {
    const image1 = require('../../../assets/yougo.gif');
    const image2 = require('../../../assets/dancer.gif');
    const image3 = require('../../../assets/superman.gif');

    const images = [
        image1,
        image2,
        image3
    ];

    const randomNumber = Math.floor(Math.random() * 3);
    const randomImage = images[randomNumber];

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={randomImage} />
        </View>
    );
}
