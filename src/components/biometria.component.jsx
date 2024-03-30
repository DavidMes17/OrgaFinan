import { View, Text, Button, Alert } from "react-native";
import * as localAuthentication from 'expo-local-authentication'
import { useEffect, useState } from "react";

export default function Biometria({ navigation }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(()=>{Compatibilidade()},[])
    useEffect(()=>{VerificarBiometria()},[])

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

    async function Biometria(){
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
        <View>
            
            <Text>Testando navegação?</Text>
            <Button title='Navegar' onPress={Biometria} />
        </View>
    </>)
}