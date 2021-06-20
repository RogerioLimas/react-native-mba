import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { styles } from './styles';

import Input from '../../components/Input';
import { auth } from '../../services/api';

export default function Home({ navigation }: any) {
    const [email, setEmail] = useState('admin');
    const [password, setPassword] = useState('admin');
    const [isLoading, setIsLoading] = useState(false);

    async function login(): Promise<any> {
        setIsLoading(true);

        if (email.length < 1) {
            setIsLoading(false);
            Alert.alert('Campo Necessário.', 'Informe o endereço de e-mail!');
            return;
        }

        if (password.length < 1) {
            setIsLoading(false);
            Alert.alert('Campo Necessário.', 'Informe a senha!');
            return;
        }

        const result = await auth(email, password);

        if (!result) {
            setIsLoading(false);
            Alert.alert(
                'Erro!',
                'E-mail ou Senha Inválidos!\nTente novamente.'
            );
            return;
        }

        setIsLoading(false);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Products' }],
        });
    }

    function openUserRegistration() : void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'UserRegistration' }],
        });
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/GOGO.gif')}
            />

            <Input
                label="E-mail!!"
                value={email}
                onChange={setEmail}
                keyboardType="email-address"
            />

            <Input
                label="Senha"
                value={password}
                onChange={setPassword}
                isPassword
            />

            {!isLoading ? (
                <View>
                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={login}
                    >
                        <Text style={styles.appButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={openUserRegistration}
                    >
                        <Text style={styles.appButtonText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <ActivityIndicator
                        animating={isLoading}
                        size="large"
                        color="#ff66c4"
                    />
                </View>
            )}
        </View>
    );
}
