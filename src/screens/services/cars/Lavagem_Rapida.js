import { ScrollView } from "react-native-gesture-handler";
import { Appbar, FAB } from "react-native-paper";
import { StyleSheet, TextInput, Text, Button } from "react-native";
import React, { useState } from 'react';
import firebase from "firebase";

export default function Lavagem_Rapida({ navigation }) {

    const [date, setdate] = useState('')
    const [time, settime] = useState('')

    const data = {
        day: date,
        duration: 60,
        servico: 'lavagem rapida',
        price: 50,
        time: time,
        vehicle: 'carro'
    }

    const scheduleService = () => {

        return (
            firebase.firestore().collection('agendamentos').doc().set(data).then(() => {
                navigation.navigate('Dashboard')
            })
        );
    }

    return (
        <ScrollView>
            <Appbar.Header>
                <Appbar.Content title="R$50,00" />
            </Appbar.Header>

            <Text style={styles.dataLabel}> Inserir data do agendamento </Text>

            <TextInput
                style={styles.input}
                placeholder='dd/mm/YYYY'
                keyboardType='numbers-and-punctuation'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setdate(text)}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <Text style={styles.timeLabel}> Inserir hora do agendamento </Text>

            <TextInput
                style={styles.input}
                keyboardType='numbers-and-punctuation'
                placeholder='00:00'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => settime(text)}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <FAB
                label="Confirmar Agendamento"
                icon="plus"
                style={styles.fab}
                onPress={scheduleService}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    datePicker: {
        width: 400,
        top: 50,
        left: 13
    },
    datePickerTitle: {
        textAlign: "center",
        top: 30,
        fontSize: 20,
        fontStyle: "bold"
    },
    fab: {
        position: '',
        margin: 16,
        right: 0,
        bottom: 0,
        top: 80
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    dataLabel: {
        alignSelf: 'center',
        fontStyle: 'italic',
        padding: 20
    },
    timeLabel: {
        alignSelf: 'center',
        fontStyle: 'italic',
        padding: 20
    },
})