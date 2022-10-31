import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';
import { firebase } from '../../firebase/config'

export default function Dashboard({ navigation }) {
    const carServices = () => {
        navigation.navigate('Carros')
    }

    const bikeServices = () => {
        navigation.navigate('Motos')
    }

    const truckServices = () => {
        navigation.navigate('Caminhões')
    }

    const bicycleServices = () => {
        navigation.navigate('Bicicletas')
    }

    return (
        <ScrollView>

            <Appbar.Header>
                <Appbar.Content title="Veículos" />
            </Appbar.Header>

            <Card onPress={carServices}>
                <Card.Cover style={styles.servicesImage} source={require('../../../assets/car.jpg')} />
            </Card>
            <Card onPress={bikeServices}>
                <Card.Cover style={styles.servicesImage} source={require('../../../assets/bike.jpg')} />
            </Card>
            <Card onPress={truckServices}>
                <Card.Cover style={styles.servicesImage} source={require('../../../assets/truck.jpg')} />
            </Card>
            <Card onPress={bicycleServices}>
                <Card.Cover style={styles.servicesImage} source={require('../../../assets/bicycle.jpg')} />
            </Card>

            <Appbar.Header>
                <Appbar.Content title="Meus Agendamentos" />
            </Appbar.Header>

            <Appbar.Header>
                <Appbar.Content title="Avaliações" />
            </Appbar.Header>

            <Card>
                <Card.Content>
                    <Title>ok</Title>
                    <Paragraph> Elogios aqui </Paragraph>
                </Card.Content>
            </Card>

            <Appbar.Header>
                <Appbar.Content title="Mapa" />
            </Appbar.Header>



        </ScrollView>
    );
}

const styles = StyleSheet.create({
    servicesImage: {
        borderRadius: 50,
        width: 395,
        height: 120,
        margin: 10,
        justifyContent: "center",
        alignItems: 'stretch',
    },
});