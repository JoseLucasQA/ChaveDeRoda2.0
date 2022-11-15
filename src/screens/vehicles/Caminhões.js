import * as React from 'react';
import { Avatar, Card, TextInput, FAB, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from "firebase";
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from "moment";
import { AirbnbRating } from 'react-native-ratings';

export default function Caminhões({ navigation }) {

    // serviços 
    const Leitura_Modulo_ECU = () => {
        navigation.navigate('Leitura_Modulo_ECU')
    }

    function Lubrificação_Quinta_Roda() {
        navigation.navigate('Lubrificação_Quinta_Roda')
    }

    function Polimentos_Rodas_e_Tanque() {
        navigation.navigate('Polimentos_Rodas_e_Tanque')
    }

    function Troca_Lona_de_Freios() {
        navigation.navigate('Troca_Lona_de_Freios')
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
                    vehicle: 'truck',
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

                <TouchableOpacity onPress={Leitura_Modulo_ECU}>
                    <Card.Title
                        title="Leitura de Módulo ECU"
                        subtitle="Preço R$1100,00"
                        left={(props) => <Avatar.Icon {...props} icon="cellphone-information" />}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={Lubrificação_Quinta_Roda}>
                    <Card.Title
                        title="Lubrificação Quinta Roda"
                        subtitle="Preço R$150,00"
                        left={(props) => <Avatar.Icon {...props} icon="tire" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Polimentos_Rodas_e_Tanque}>
                    <Card.Title
                        title="Polimento Rodas e Tanque"
                        subtitle="Preço R$300,00"
                        left={(props) => <Avatar.Icon {...props} icon="spray-bottle" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Troca_Lona_de_Freios}>
                    <Card.Title
                        title="Troca Lonas de Freio"
                        subtitle="Preço R$800,00"
                        left={(props) => <Avatar.Icon {...props} icon="car-brake-abs" />}
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

                <AirbnbRating
                    count={5}
                    reviews={["Péssimo", "Ruim", "Bom", "Ótimo", "Excelente"]}
                    defaultRating={5}
                    size={20}
                    selectedColor='#6959CD'
                    reviewColor='#483D8B'
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