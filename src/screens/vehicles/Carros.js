import * as React from 'react';
import { Avatar, Card, TextInput, FAB, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from "firebase";
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from "moment";

export default function Carros({ navigation }) {

    // serviços 
    const Revisão_Motor = () => {
        navigation.navigate('Revisão_Motor')
    }

    function Revisão_Sistema_De_Transmissão() {
        navigation.navigate('Revisão_Sistema_De_Transmissão')
    }

    function Alinhamento_e_Balanceamento() {
        navigation.navigate('Alinhamento_e_Balanceamento')
    }

    function Troca_de_Oleo_e_Filtros() {
        navigation.navigate('Troca_de_Oleo_e_Filtros')
    }

    const userID = firebase.auth().currentUser.uid;
    const userEmail = firebase.auth().currentUser.email;

    const [reports, setreports] = useState('')

    const saveReports = () => {

        if (!reports) {
            return Alert.alert(
                "Favor preencher o campo de Elogios e Reclamções"
            )
        }

        if (reports) {
            return (
                firebase.firestore().collection('reports').doc().set({
                    userID: userID,
                    email: userEmail,
                    report: reports,
                    vehicle: 'car',
                    date: (moment(new Date).format("DD-MM-YYYY, HH:MM"))
                }),
                Alert.alert(
                    "Obrigado por avaliar nossos serviços, estaremos buscando sempre o melhor para você!"
                )
            )
        };
    }

    return (
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">

            <ScrollView>

                <TouchableOpacity onPress={Revisão_Motor}>
                    <Card.Title
                        title="Revisão Motor"
                        subtitle="Preço R$500,00"
                        left={(props) => <Avatar.Icon {...props} icon="car-select" />}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={Revisão_Sistema_De_Transmissão}>
                    <Card.Title
                        title="Revisão Sistema de Transmissão"
                        subtitle="Preço R$450,00"
                        left={(props) => <Avatar.Icon {...props} icon="car-wash" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Alinhamento_e_Balanceamento}>
                    <Card.Title
                        title="Alinhamento + Balançeamento"
                        subtitle="Preço R$200,00"
                        left={(props) => <Avatar.Icon {...props} icon="wrench" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Troca_de_Oleo_e_Filtros}>
                    <Card.Title
                        title="Troca de Óleo e Filtros"
                        subtitle="Preço R$350,00"
                        left={(props) => <Avatar.Icon {...props} icon="oil" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <Text style={styles.dataLabel}> Elogios e Reclamações </Text>

                <TextInput
                    style={styles.input}
                    placeholder='Registre aqui sua experiência'
                    keyboardType='default'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setreports(text)}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <FAB
                    label="Enviar avaliação"
                    icon="pencil"
                    style={styles.fab}
                    onPress={saveReports}
                />

            </ScrollView>

        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({

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
        padding: 20,
        top: 10
    },
    fab: {
        margin: 16,
        bottom: 0,
        width: 200,
        alignSelf: 'center'
    },
});