import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from "firebase";
import React from 'react';
import { List } from 'react-native-paper';

export default function Agendamentos() {

    const [dateCar, setDateCar] = useState('');
    const [ratingCar, setRatingCar] = useState('');
    const [reportCar, setReportCar] = useState('');

    async function getReportsCar() {

        const idUser = firebase.auth().currentUser.uid;
        const query = await firebase.firestore().
            collection('reports').
            where('userID', '!=', idUser).
            where('vehicle', '==', 'car').
            limit(1).
            get();

        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            setDateCar('Data/Hora: ' + doc.data().date)
            setRatingCar('Nota 5/5: ' + doc.data().rating)
            setReportCar('Comentário: ' + doc.data().report)
        });
    }

    getReportsCar()

    const [dateBike, setDateBike] = useState('');
    const [ratingBike, setRatingBike] = useState('');
    const [reportBike, setReportBike] = useState('');

    async function getReportsBike() {

        const idUser = firebase.auth().currentUser.uid;
        const query = await firebase.firestore().
            collection('reports').
            where('userID', '!=', idUser).
            where('vehicle', '==', 'bikes').
            limit(1).
            get();

        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            setDateBike('Data/Hora: ' + doc.data().date)
            setRatingBike('Nota 5/5: ' + doc.data().rating)
            setReportBike('Comentário: ' + doc.data().report)
        });
    }

    getReportsBike()

    const [dateTruck, setDateTruck] = useState('');
    const [ratingTruck, setRatingTruck] = useState('');
    const [reportTruck, setReportTruck] = useState('');

    async function getReportsTruck() {

        const idUser = firebase.auth().currentUser.uid;
        const query = await firebase.firestore().
            collection('reports').
            where('userID', '!=', idUser).
            where('vehicle', '==', 'truck').
            limit(1).
            get();

        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            setDateTruck('Data/Hora: ' + doc.data().date)
            setRatingTruck('Nota 5/5: ' + doc.data().rating)
            setReportTruck('Comentário: ' + doc.data().report)
        });
    }

    getReportsTruck()

    const [dateBicycle, setDateBicycle] = useState('');
    const [ratingBicycle, setRatingBicycle] = useState('');
    const [reportBicycle, setReportBicycle] = useState('');

    async function getReportsBicycle() {

        const idUser = firebase.auth().currentUser.uid;
        const query = await firebase.firestore().
            collection('reports').
            where('userID', '!=', idUser).
            where('vehicle', '==', 'bicycles').
            limit(1).
            get();

        query.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            setDateBicycle('Data/Hora: ' + doc.data().date)
            setRatingBicycle('Nota 5/5: ' + doc.data().rating)
            setReportBicycle('Comentário: ' + doc.data().report)
        });
    }

    getReportsBicycle()


    return (
        <ScrollView>
            <List.AccordionGroup>
                <List.Accordion
                    title="Avaliações Carro"
                    id="1"
                    left={props => <List.Icon {...props} icon="car" />}>
                    <List.Item title={dateCar} />
                    <List.Item title={ratingCar} />
                    <List.Item title={reportCar} />
                </List.Accordion>

                <List.Accordion
                    title="Avaliações Moto"
                    id="2"
                    left={props => <List.Icon {...props} icon="motorbike" />}>
                    <List.Item title={dateBike} />
                    <List.Item title={ratingBike} />
                    <List.Item title={reportBike} />
                </List.Accordion>

                <List.Accordion
                    title="Avaliações Caminhão"
                    id="3"
                    left={props => <List.Icon {...props} icon="truck" />}>
                    <List.Item title={dateTruck} />
                    <List.Item title={ratingTruck} />
                    <List.Item title={reportTruck} />
                </List.Accordion>

                <List.Accordion
                    title="Avaliações Bicicleta"
                    id="4"
                    left={props => <List.Icon {...props} icon="bike" />}>
                    <List.Item title={dateBicycle} />
                    <List.Item title={ratingBicycle} />
                    <List.Item title={reportBicycle} />
                </List.Accordion>

            </List.AccordionGroup>
        </ScrollView>
    )
}