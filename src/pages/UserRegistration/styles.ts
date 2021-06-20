import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#ff66c4',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appButtonContainer: {
        width: 120,
        backgroundColor: '#ff66c4',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    appButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});
