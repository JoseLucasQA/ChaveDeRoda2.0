import * as React from 'react';
import { StyleSheet, ScrollView, Linking } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper';

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

    const schedules = () => {
        navigation.navigate('Agendamentos')
    }

    const reports = () => {
        navigation.navigate('Avaliações')
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

            <Card onPress={schedules}>
                <Card.Cover style={styles.servicesImage} source={require('../../../assets/schedules.jpg')} />
            </Card>

            <Appbar.Header>
                <Appbar.Content title="Avaliações" />
            </Appbar.Header>

            <Card onPress={reports}>
                <Card.Cover style={styles.servicesImage} source={require('../../../assets/reports.png')} />
            </Card>

            <Appbar.Header>
                <Appbar.Content title="Traçar Rota" />
            </Appbar.Header>

            <Card onPress={() => {
                if (Platform.OS === 'ios') {
                    Linking.openURL(
                        'https://maps.apple.com/place?address=Estrada%20S%C3%A3o%20Gregorio,%20839,%20Sao%20Jose,%20Pacatuba%20-%20CE,%2061801-790,%20Brasil&ll=-3.975500,-38.605205&q=Minha%20Localiza%C3%A7%C3%A3o&_ext=EiYpbDcivhrXD8AxewyGEAhOQ8A5jt/E+7TED8BBN6ac/uBMQ8BQBA%3D%3D&t=m'
                    );
                } else {
                    Linking.openURL(
                        'https://www.google.com.br/maps/dir//Estr.+S%C3%A3o+Greg%C3%B3rio,+720+-+S%C3%A3o+Jos%C3%A9,+Pacatuba+-+CE,+61800-000,+Brasil/@-3.9752806,-38.6071323,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x7b8aa5ddf79d00f:0x7dcea1a6e2c70820!2m2!1d-38.6049436!2d-3.9752806!3e0'
                    );
                }
            }}>
                <Card.Cover style={styles.servicesImage} source={require('../../../assets/maps.jpg')} />
            </Card>

            <Text style={styles.info}>GitHub : https://github.com/JoseLucasQA</Text>

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
    info: {
        textAlign: 'center',
        margin: 10,
        fontStyle: 'italic',
    },
});