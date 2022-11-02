import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title } from 'react-native-paper';
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

     const getReports = async () => {
        let query = firebase.firestore().collection('reports').limit(5);
        let snapshop = await query.get();

        let reports = snapshop.docs.map(doc => doc.data())

        return console.log(reports[0].report)
    }
    
    return (
        <ScrollView>

            <Appbar.Header>
                <Appbar.Content title="Veículos" />
            </Appbar.Header>

            <Card onPress={carServices}>
                <Card.Cover style={styles.servicesImage} source={require('../../../assets/car.jpg')} />
            </Card>
            <Card onPress={getReports}>
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
                    <Title></Title>
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