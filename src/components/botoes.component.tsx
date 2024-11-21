import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Botoes({ navigation }) {
    return (<>
        <View style={styles.botao}>
            <View style={styles.botaoChildren}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('COBRANÇA')
                }} style={styles.inputBtn}>
                    <Ionicons style={styles.icon} name="newspaper-outline"></Ionicons>
                </TouchableOpacity>
                <Text>COBRANÇA</Text>
            </View>

            <View style={styles.botaoChildren}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('IMPREVISTO')
                    }} style={styles.inputBtn}>
                    <Ionicons style={styles.icon} name="document-text-outline"></Ionicons>
                </TouchableOpacity>
                <Text>IMPREVISTO</Text>
            </View>

            <View style={styles.botaoChildren}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SALÁRIO')
                    }} style={styles.inputBtn}>
                    <Ionicons style={styles.icon} name="wallet-outline"></Ionicons>
                </TouchableOpacity>
                <Text>SALÁRIO</Text>
            </View>

            <View style={styles.botaoChildren}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('OUTRO')
                    }} style={styles.inputBtn}>
                    <Ionicons style={styles.icon} name="ellipsis-horizontal-circle-outline"></Ionicons>
                </TouchableOpacity>
                <Text>OUTRO</Text>
            </View>

        </View>
    </>)
}

const styles = StyleSheet.create({
    botao: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 16,
    },
    botaoChildren: {
        alignItems: 'center',
    },
    inputBtn: {
        width: 80,
        height: 80,
        backgroundColor: '#766BBF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#fff',
        fontSize: 40,
        margin: 16,
    },
})