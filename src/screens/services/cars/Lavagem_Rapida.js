import { ScrollView } from "react-native-gesture-handler";
import { Appbar, FAB } from "react-native-paper";
import { StyleSheet, TextInput, Text, Alert } from "react-native";
import { useState } from 'react';
import firebase from "firebase";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Lavagem_Rapida({ navigation }) {

    const [date, setdate] = useState('')
    const [time, settime] = useState('')
    const [reports, setreports] = useState('')

    const idUser = firebase.auth().currentUser.uid;

    const showAlert = () =>
        Alert.alert(
            "Agendamento efetuado com sucesso!",
        );

    const saveReports = () => {
        return (
            firebase.firestore().collection('reports').doc(idUser).set({
                userID: idUser,
                report: reports,
                service: 'Lavagem_Rapida',
                vehicle: 'car'
            }),
            Alert.alert(
                "Obrigado por avaliar nossos serviços, estaremos buscando sempre o melhor para você!"
            )
        );
    }

    const scheduleService = () => {
        return (
            firebase.firestore().collection('schedules').doc(idUser).set({
                userID: idUser,
                date: date,
                durationMinutes: 120,
                price: 50,
                time: time,
                vehicle: 'car'
            }),
            navigation.navigate('Dashboard'),
            showAlert()
        );
    }

    return (
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
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

                <Text style={styles.dataLabel}> Elogios e Reclamações </Text>

                <TextInput
                    style={styles.input}
                    placeholder='Registre aqui sua experiência'
                    keyboardType='default'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setreports(text)}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    multiline={true}
                />

                <FAB
                    label="Enviar avaliação"
                    icon="pencil"
                    style={styles.fab}
                    onPress={saveReports}
                />

            </ScrollView >
        </KeyboardAwareScrollView>
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
        margin: 16,
        bottom: 0,
        width: 200,
        alignSelf: 'center'
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
    title: {
        textAlign: 'center',
    },
})