import { View, Text, StyleSheet } from "react-native";

export default function Urgencia() {
    return (<>
        <View style={styles.titleBack}>
            <Text style={styles.title}>Relatório de urgências</Text>
        </View>
    </>)
}

const styles = StyleSheet.create({
    titleBack: {
        backgroundColor: '#4FA8FF',
        paddingVertical: 4,
        marginTop: 16,
        marginHorizontal: 8,
        alignItems: 'center',
        borderRadius: 40,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
})