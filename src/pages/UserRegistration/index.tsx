import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import Input from '../../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UserRegistration({ navigation }: any) {
    const [name, setName] = useState('Rogério Limas Moreira');
    const [age, setAge] = useState('44');
    const [address, setAddress] = useState('Rua Tal, 123');
    const [email, setEmail] = useState('rogeriolimas@gmail.com');
    const [password, setPassword] = useState('xurastay||xurago');

    function goHome() : void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    return (
        <View style={styles.container}>
            <Input label="Nome Completo" value={name} onChange={setName} />
            <Input
                label="Idade"
                value={age}
                onChange={setAge}
                keyboardType="number-pad"
            />
            <Input label="Endereço" value={address} onChange={setAddress} />
            <Input
                label="E-mail"
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

            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => alert(2)}
            >
                <Text style={styles.appButtonText}>Cadastrar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={goHome}
            >
                <Text style={styles.appButtonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}
