import { ScrollView } from "react-native-gesture-handler";
import { Appbar, FAB } from "react-native-paper";
import { StyleSheet, Text, Alert } from "react-native";
import { useState } from 'react';
import firebase from "firebase";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";


export default function Troca_de_Corrente({ navigation }) {

    const idUser = firebase.auth().currentUser.uid;
    const [date, setDate] = useState(new Date);

    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
    };

    const scheduleService = async () => {

        let requestDate = moment(date).format("DD-MM-YYYY, HH:MM")
        let query = await firebase.firestore().
            collection('schedules').
            where('startServiceTime', '==', requestDate).
            get();

        let schedules = query.docs.map(doc => doc.data())

        if (schedules.length != 0) {
            return Alert.alert(
                'Horário indisponível, por favor inserir horários posteriores'
            )
        }

        return (
            firebase.firestore().collection('schedules').doc().set({
                userID: idUser,
                startServiceTime: moment(date).format("DD-MM-YYYY, HH:MM"),
                endServiceTime: moment(date).add(1, 'hours').format("DD-MM-YYYY, HH:MM"),
                price: 40,
                vehicle: 'bicycle',
                service: "Troca de Corrente",
                status: "Em Aberto"
            }),
            Alert.alert(
                "Agendamento efetuado com sucesso!",
            ),
            navigation.navigate('Dashboard')
        );
    }

    return (
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">

            <ScrollView>

                <Appbar.Header>
                    <Appbar.Content title="R$40,00" />
                </Appbar.Header>

                <Text style={styles.dataLabel}> Inserir data e hora do agendamento </Text>

                <DateTimePicker
                    value={date}
                    mode={'datetime'}
                    is24Hour={true}
                    onChange={onChange}
                    display='compact'
                    style={styles.datePicker}
                    locale='pt-BR'
                    minuteInterval={30}
                    themeVariant="light"
                />

                <Text style={styles.infoEndTimeService} >
                    Previsão de conclusão: {moment(date).add(1, 'hours').format("DD-MM-YYYY, HH:MM")}
                </Text>

                <FAB
                    label="Confirmar Agendamento"
                    icon="calendar-arrow-right"
                    style={styles.fab}
                    onPress={scheduleService}
                />

            </ScrollView >

        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    fab: {
        margin: 16,
        bottom: 0,
        width: 200,
        alignSelf: 'center'
    },
    dataLabel: {
        alignSelf: 'center',
        fontStyle: 'italic',
        padding: 20
    },
    title: {
        textAlign: 'center',
    },
    infoEndTimeService: {
        textAlign: 'center',
        margin: 10
    },
    datePicker: {
        margin: 10,
        alignItems: 'center',
        right: 80
    }
})