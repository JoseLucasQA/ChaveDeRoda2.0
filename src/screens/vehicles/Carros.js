import * as React from 'react';
import { Avatar, Card, TextInput } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Carros({ navigation }) {

    const Lavagem_Rapida = () => {
        navigation.navigate('Lavagem_Rapida')
    }

    function completeWash() {
        navigation.navigate('schedules')
    }

    function alignmentAndBalance() {
        navigation.navigate('schedules')
    }

    function oilChangeAndFilter() {
        navigation.navigate('schedules')
    }

    return (
        <ScrollView>
            <TouchableOpacity onPress={Lavagem_Rapida}>
                <Card.Title
                    title="Lavagem Simples"
                    subtitle="Preço R$50,00"
                    left={(props) => <Avatar.Icon {...props} icon="car-select" />}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Card.Title
                    title="Lavagem Completa"
                    subtitle="Preço R$100,00"
                    left={(props) => <Avatar.Icon {...props} icon="car-wash" />}
                    onPress={() => { }} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Card.Title
                    title="Alinhamento + Balançeamento"
                    subtitle="Preço R$200,00"
                    left={(props) => <Avatar.Icon {...props} icon="wrench" />}
                    onPress={() => { }} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Card.Title
                    title="Troca de Óleo e Filtros"
                    subtitle="Preço R$350,00"
                    left={(props) => <Avatar.Icon {...props} icon="oil" />}
                    onPress={() => { }} />
            </TouchableOpacity>




        </ScrollView>
    );
}

const styles = StyleSheet.create({

});