import { Image, StyleSheet, Text, View } from "react-native";


export default function Renda(){
    const despesas = [500, 500, 80, 0.5, 25]
    const dinheiro = 1350.63
    const despesasSoma = despesas.reduce((total, valor) => total + valor, 0)
    const lucroSoma = dinheiro - despesasSoma

    let data = [despesas.reduce((total, valor) => total + valor, 0), lucroSoma]
    corLucro = ''
    if (data[1] > 0) {
        corLucro = '#2DED5C'
    }
    else {
        data[1] = data[1] * (-1)
        corLucro = '#D94A3B'
    }
    const cores = ['#FFE84F', corLucro]
    const pieData = data.map((value, index) => ({
        value,
        svg: {
            fill: cores[index]
        },
        key: `pie-${index}`,
    }));

    const lucroStr = data[1].toFixed(2).toString().replace(/\./g, ',')
    const despesaStr = data[0].toFixed(2).toString().replace(/\./g, ',')

return(<>
            <View style={styles.titleBack}>
                <Text style={styles.title}>Relatório de renda</Text>
            </View>

            <View style={styles.relatorio}>
            <View style={styles.grafico}>
                    <Image source={require('../assets/grafico.png')} style={{height: 217, width: 217}} />
                </View>
                <View style={styles.relatorioRetorno}>
                    <Text style={styles.relatorioTitleRetorno}>retorno do capital</Text>
                    <Text style={[styles.relatorioTxt, { color: corLucro }]}>R$ {lucroStr}</Text>
                    <Text style={styles.relatorioTitleRetorno}>retorno dos pagamentos</Text>
                    <Text style={[styles.relatorioTxt, styles.pagamento]}>R$ {despesaStr}</Text>
                    <Text style={styles.relatorioTitleRetorno}>retorno das despesas</Text>
                    <Text style={[styles.relatorioTxt, styles.despesa]}>{despesas.length}</Text>
                </View>
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
    relatorio: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
    },
    grafico: {
        flex: 1,
        height: 225,
        marginTop: 16,
        marginRight: 16,
        padding: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#766BBF',
    },
    relatorioRetorno: {
        backgroundColor: '#B0A4FF',
        flex: .8,
        marginTop: 16,
        borderRadius: 10,
        height: 225,
        alignItems: 'center',
        paddingVertical: 8,
    },
    relatorioTitleRetorno: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 15,
    },
    relatorioTxt: {
        fontSize: 35,
        fontWeight: 700,
    },
    pagamento: {
        color: '#FFE84F'
    },
    despesa: {
        color: '#EDC12D'
    },
})