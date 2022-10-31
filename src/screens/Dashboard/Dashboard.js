import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, BottomNavigation, Text, Title, Paragraph } from 'react-native-paper';
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

    const Veiculos = () => {
        <Text>Veiculos</Text>;
    }

    const Agendamentos = () => <Text>Agendamentos</Text>;

    const Mapa = () => <Text>Mapa</Text>;

    const Avaliações = () => <Text>Avaliações</Text>;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Veiculos', title: 'Veiculos', focusedIcon: 'car', unfocusedIcon: 'car-outline' },
        { key: 'Agendamentos', title: 'Agendamentos', focusedIcon: 'history' },
        { key: 'Mapa', title: 'Mapa', focusedIcon: 'map' },
        { key: 'Avaliações', title: 'Avaliações', focusedIcon: 'pencil' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        Veiculos: Veiculos,
        Agendamentos: Agendamentos,
        Mapa: Mapa,
        Avaliações: Avaliações,
    });

    return (
        <ScrollView>

            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />

            {/* <Appbar.Header>
                <Appbar.Content title="Veículos" />
            </Appbar.Header> */}

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
                <Appbar.Content title="Avaliações" />
            </Appbar.Header>

            <Card>
                <Card.Content>
                    <Title>ok</Title>
                    <Paragraph> Elogios aqui </Paragraph>
                </Card.Content>
            </Card>

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