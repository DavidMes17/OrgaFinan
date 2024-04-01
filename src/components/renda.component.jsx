import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Renda() {
    const despesas = [500, 500, 80, 0.5, 25];
    const dinheiro = 1350.63;
    const despesasSoma = despesas.reduce((total, valor) => total + valor, 0);
    const lucroSoma = dinheiro - despesasSoma;
    let data = [despesasSoma, lucroSoma];

    let corLucro = '';
    if (lucroSoma > 0) {
        corLucro = '#2DED5C';
    } else {
        data[1] = data[1] * -1;
        corLucro = '#D94A3B';
    }
    const lucroStr = data[1].toFixed(2).toString().replace(/\./g, ',');
    const despesaStr = data[0].toFixed(2).toString().replace(/\./g, ',');

    return (
        <>
            <View style={styles.titleBack}>
                <Text style={styles.title}>Relatório de renda</Text>
            </View>

            <View style={styles.relatorio}>
                <View style={styles.relatorioRetorno}>
                    <Text style={styles.relatorioTitleRetorno}>retorno do capital</Text>
                    <Text style={[styles.relatorioTxt, { color: corLucro }]}>R$ {lucroStr}</Text>
                    <Text style={styles.relatorioTitleRetorno}>retorno dos pagamentos</Text>
                    <Text style={[styles.relatorioTxt, styles.pagamento]}>R$ {despesaStr}</Text>
                    <Text style={styles.relatorioTitleRetorno}>retorno das despesas</Text>
                    <Text style={[styles.relatorioTxt, styles.despesa]}>{despesas.length}</Text>
                </View>
            </View>
        </>
    );
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
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    relatorioRetorno: {
        backgroundColor: '#B0A4FF',
        flex: 0.8,
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
        fontWeight: 'bold',
    },
    pagamento: {
        color: '#FFE84F',
    },
    despesa: {
        color: '#EDC12D',
    },
});
