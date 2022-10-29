import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Card, Button } from 'react-native-paper';
import { firebase } from '../../firebase/config'

export default function Dashboard({navigation}) {
    const carServices = () => {
        navigation.navigate('carServices')
    }

    const bikeServices = () => {
        navigation.navigate('bikeServices')
    }

    const truckServices = () => {
        navigation.navigate('truckServices')
    }

    const bicycleServices = () => {
        navigation.navigate('bicycleServices')
    }

    const logout = () => {
        firebase.auth().signOut();
        navigation.navigate('Login');
    }

    return (
        <View>
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
            <Button buttonColor="#788eec" icon="logout" mode="contained" onPress={logout}>Sair</Button>
        </View>
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