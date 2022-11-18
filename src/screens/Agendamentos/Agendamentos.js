import * as React from 'react';
import firebase from "firebase";
import { useState } from 'react';
import { StyleSheet, Alert } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { List, FAB } from 'react-native-paper';

export default function Agendamentos({ navigation }) {

    const [priceCar, setPriceCar] = useState('');
    const [serviceCar, setServiceCar] = useState('');
    const [dateCar, setDateCar] = useState('');
    const [docIdCar, setdocIdCar] = useState('');

    async function getSchedulesCars() {

        const idUser = firebase.auth().currentUser.uid;
        const query = await firebase.firestore().
            collection('schedules').
            where('userID', '==', idUser).
            where('status', '==', 'Em Aberto').
            where('vehicle', '==', 'car').
            get();

        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            setPriceCar('Valor R$:' + doc.data().price)
            setServiceCar('Serviço: ' + doc.data().service)
            setDateCar('Data/Hora: ' + doc.data().startServiceTime)
            setdocIdCar(doc.id)
        });
    }

    async function deleteScheduleCar() {

        return (
            await firebase.firestore().
                collection('schedules').
                doc(docIdCar).
                delete(),
            Alert.alert(
                "Agendamento cancelado com sucesso!",
            ),
            navigation.navigate('Dashboard')
        )
    }

    getSchedulesCars()


    return (
        <ScrollView>
            <List.AccordionGroup>
                <List.Accordion
                    title="Carro"
                    id="1"
                    left={props => <List.Icon {...props} icon="car" />}>
                    <List.Item title={priceCar} />
                    <List.Item title={serviceCar} />
                    <List.Item title={dateCar} />
                    <FAB
                        label="Cancelar Agendamento"
                        icon="calendar-arrow-left"
                        style={styles.fab}
                        onPress={deleteScheduleCar}
                    />
                </List.Accordion>



                <List.Accordion title="Moto" id="2">
                    <List.Item title="Item 2" />
                </List.Accordion>
                <List.Accordion title="Caminhão" id="3">
                    <List.Item title="Item 2" />
                </List.Accordion>
                <List.Accordion title="Bicicleta" id="4">
                    <List.Item title="Item 2" />
                </List.Accordion>
            </List.AccordionGroup>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fab: {
        margin: 15,
        backgroundColor: 'red'
    }
});