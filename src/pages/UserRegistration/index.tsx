import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import { styles } from './styles';
import Input from '../../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addUser } from '../../services/api';
import User from '../../models/User';
import { isEmailValid, validateField } from '../../util/validation';

export default function UserRegistration({ navigation }: any) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function goHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    function onSubmit(): void {
        let user: User = {
            name: '',
            age: 0,
            address: '',
            email: '',
            userPassword: '',
        };

        if (!validateField(name, 'Informe seu nome')) {
            return;
        }
        if (!validateField(age, 'Informe sua idade')) {
            return;
        }
        if (!validateField(address, 'Informe seu endereço')) {
            return;
        }
        if (!validateField(email, 'Informe seu e-mail')) {
            return;
        }
        if (!isEmailValid(email)) {
            Alert.alert(
                'E-mail inválido',
                'O endereço de e-mail informado não é válido'
            );
            return;
        }
        if (!validateField(password, 'Escolha uma senha')) {
            return;
        }

        

        user.name = name;

        try {
            user.age = parseInt(age);

            if (isNaN(user.age)) {
                Alert.alert(
                    'Idade inválida',
                    'Informe somente números no campo "Idade"'
                );
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

        addUser(user)
            .then((result) => {
                console.log('Resultado:');
                console.log(result);
                if (!result) {
                    Alert.alert(
                        'Erro ao Cadastrar',
                        'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                    );
                    return;
                }

                Alert.alert(
                    'Cadastro Concluído',
                    'Cadastro concluído com êxito'
                );

                goHome();
            })
            .catch((error) => {
                console.error('UserRegistration.onSubmit');
                console.error(error);
                Alert.alert(
                    'Erro ao Cadastrar',
                    'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                );
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
