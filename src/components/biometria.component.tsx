import { View, Text, Button, Alert, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import * as localAuthentication from 'expo-local-authentication'
import { useEffect, useState } from "react";

export default function Biometria({ navigation }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => { Compatibilidade() }, [])
    useEffect(() => { VerificarBiometria() }, [])
    useEffect(() => { Biometria() }, [])

    async function Compatibilidade() {
        const compativel = await localAuthentication.hasHardwareAsync()
        const tiposAutenticacao = await localAuthentication.supportedAuthenticationTypesAsync()
        if (!compativel || tiposAutenticacao == [0]) {
            Alert.alert('Erro', 'Seu celular não tem compatibilidade com biometria')
            navigation.replace('index')
        }
    }

    async function VerificarBiometria() {
        const temBiometria = await localAuthentication.isEnrolledAsync()
        if (!temBiometria) {
            Alert.alert('Erro', 'não há biometria cadastrada, aperte Ok para acessar o OrgaFinan')
            navigation.replace('index')
        }
    }

    async function Biometria() {
        const auth = await localAuthentication.authenticateAsync({
            promptMessage: 'Biometria',
            fallbackLabel: 'Um erro ocorreu'
        })
        if (auth.success) {
            setIsAuthenticated(true)
            navigation.replace('index')
        }
    }

    return (<>
        <ImageBackground source={require('../assets/backgroundImage.jpeg')} style={styles.biometriaCtn}>
            <Text style={styles.biometriaTxt}>Acesse o melhor App de organização financeira com segurança</Text>
        </ImageBackground>

        <View style={styles.container}>
            <TouchableOpacity style={styles.biometriaBtn} onPress={Biometria}>
                <Text style={{ fontSize: 35, color: '#fff', fontWeight: 'bold' }}>
                    Acessar com Biometria
                </Text>
            </TouchableOpacity>
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    biometriaCtn: {
        flex: 9,
        paddingTop: 25,
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    biometriaBtn: {
        backgroundColor: '#674FFF',
        marginBottom: 16,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginHorizontal: 16,
    },
    biometriaTxt: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
})