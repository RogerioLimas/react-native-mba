import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    producttitle: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },
    card: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        marginBottom: 20,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    priceSection: {
        flexDirection: 'row',
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
    },
});
