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
    const [docIdCar, setDocIdCar] = useState('');

    async function getSchedulesCars() {

        const idUser = firebase.auth().currentUser.uid;
        const query = await firebase.firestore().
            collection('schedules').
            where('userID', '==', idUser).
            where('status', '==', 'Em Aberto').
            where('vehicle', '==', 'car').
            limit(1).
            get();

        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            setPriceCar('Valor R$:' + doc.data().price)
            setServiceCar('Serviço: ' + doc.data().service)
            setDateCar('Data/Hora: ' + doc.data().startServiceTime)
            setDocIdCar(doc.id)
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

    const [priceBike, setPriceBike] = useState('');
    const [serviceBike, setServiceBike] = useState('');
    const [dateBike, setDateBike] = useState('');
    const [docIdBike, setDocIdBike] = useState('');

    async function getSchedulesBikes() {

        const idUser = firebase.auth().currentUser.uid;
        const query = await firebase.firestore().
            collection('schedules').
            where('userID', '==', idUser).
            where('status', '==', 'Em Aberto').
            where('vehicle', '==', 'bike').
            limit(1).
            get();

        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            setPriceBike('Valor R$:' + doc.data().price)
            setServiceBike('Serviço: ' + doc.data().service)
            setDateBike('Data/Hora: ' + doc.data().startServiceTime)
            setDocIdBike(doc.id)
        });
    }

    getSchedulesBikes()

    async function deleteScheduleBike() {

        return (
            await firebase.firestore().
                collection('schedules').
                doc(docIdBike).
                delete(),
            Alert.alert(
                "Agendamento cancelado com sucesso!",
            ),
            navigation.navigate('Dashboard')
        )
    }

    const [priceTruck, setPriceTruck] = useState('');
    const [serviceTruck, setServiceTruck] = useState('');
    const [dateTruck, setDateTruck] = useState('');
    const [docIdTruck, setDocIdTruck] = useState('');

    async function getSchedulesTrucks() {

        const idUser = firebase.auth().currentUser.uid;
        const query = await firebase.firestore().
            collection('schedules').
            where('userID', '==', idUser).
            where('status', '==', 'Em Aberto').
            where('vehicle', '==', 'truck').
            limit(1).
            get();

        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            setPriceTruck('Valor R$:' + doc.data().price)
            setServiceTruck('Serviço: ' + doc.data().service)
            setDateTruck('Data/Hora: ' + doc.data().startServiceTime)
            setDocIdTruck(doc.id)
        });
    }

    getSchedulesTrucks()

    async function deleteScheduleTruck() {

        return (
            await firebase.firestore().
                collection('schedules').
                doc(docIdTruck).
                delete(),
            Alert.alert(
                "Agendamento cancelado com sucesso!",
            ),
            navigation.navigate('Dashboard')
        )
    }

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

                <List.Accordion
                    title="Moto"
                    id="2"
                    left={props => <List.Icon {...props} icon="motorbike" />}>
                    <List.Item title={priceBike} />
                    <List.Item title={serviceBike} />
                    <List.Item title={dateBike} />
                    <FAB
                        label="Cancelar Agendamento"
                        icon="calendar-arrow-left"
                        style={styles.fab}
                        onPress={deleteScheduleBike}
                    />
                </List.Accordion>

                <List.Accordion
                    title="Caminhão"
                    id="3"
                    left={props => <List.Icon {...props} icon="truck" />}>
                    <List.Item title={priceTruck} />
                    <List.Item title={serviceTruck} />
                    <List.Item title={dateTruck} />
                    <FAB
                        label="Cancelar Agendamento"
                        icon="calendar-arrow-left"
                        style={styles.fab}
                        onPress={deleteScheduleTruck}
                    />
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