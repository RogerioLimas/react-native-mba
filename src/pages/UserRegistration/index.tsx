import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import { styles } from './styles';
import Input from '../../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addUser } from '../../services/api';
import User from '../../models/User';
import { add } from 'react-native-reanimated';

export default function UserRegistration({ navigation }: any) {
    const [name, setName] = useState('Rogério Limas Moreira');
    const [age, setAge] = useState('44');
    const [address, setAddress] = useState('Rua Tal, 123');
    const [email, setEmail] = useState('rogeriolimas@gmail.com');
    const [password, setPassword] = useState('xurastay||xurago');

    function goHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    function validateField(value: string, errorMessage: string): boolean {
        const requiredField: string = 'Campo Requerido';

        if (value.trim().length < 1) {
            Alert.alert(requiredField, errorMessage);
            return false;
        }

        return true;
    }

    function isEmailValid(email: string): boolean {
        const emailRegex =
            /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        return emailRegex.test(email);
    }

    function onSubmit(): void {
        let user: User = {
            name: '',
            age: 0,
            address: '',
            email: '',
            userPassword: '',
        };

        if (
            !validateField(name, 'Informe seu nome') &&
            !validateField(age, 'Informe sua idade') &&
            !validateField(address, 'Informe seu endereço') &&
            !validateField(email, 'Informe seu e-mail') &&
            !validateField(password, 'Escolha uma senha')
        ) {
            return;
        }

        if (!isEmailValid(email)) {
            Alert.alert(
                'E-mail inválido',
                'O endereço de e-mail informado não é válido'
            );
            return;
        }

        user.name = name;

        try {
            user.age = parseInt(age);
            alert(user.age);

            if (isNaN(user.age)) {
                alert('Idade inválida', 'Informe somente números no campo "Idade"');
            }

            if (user.age < 1) {
                Alert.alert('Idade inválida', 'Informe uma idade válida');
                return;
            }
        } catch (error) {
            Alert.alert('Idade inválida', 'Informe um valor numérico');
            return;
        }
        user.address = address;
        user.email = email;
        user.userPassword = password;

        console.log(user);

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
                onPress={onSubmit}
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
