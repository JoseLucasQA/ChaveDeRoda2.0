import * as React from 'react';
import { Avatar, Card, TextInput, FAB, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from "firebase";
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from "moment";
import { AirbnbRating, Rating } from 'react-native-ratings';

export default function Bicicletas({ navigation }) {

    // serviços 
    const BikeFit = () => {
        navigation.navigate('BikeFit')
    }

    function Desempenar_Aros() {
        navigation.navigate('Desempenar_Aros')
    }

    function Lubrificação_Completa() {
        navigation.navigate('Lubrificação_Completa')
    }

    function Troca_de_Corrente() {
        navigation.navigate('Troca_de_Corrente')
    }

    const userID = firebase.auth().currentUser.uid;
    const userEmail = firebase.auth().currentUser.email;

    const [reports, setreports] = useState('')
    const [ratingSelect, setRating] = useState('')

    function ratingCompleted(rating) {
        console.log("Nota: " + rating)
        setRating(rating);
    }

    const saveReports = () => {

        if (!reports && !ratingSelect) {
            return Alert.alert(
                "Favor preencher o campo de Elogios e Reclamções"
            )
        }

        if (reports || ratingSelect) {
            return (
                firebase.firestore().collection('reports').doc().set({
                    userID: userID,
                    email: userEmail,
                    report: reports,
                    vehicle: 'bicycles',
                    date: (moment(new Date).format("DD-MM-YYYY, HH:MM")),
                    rating: ratingSelect
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

                <TouchableOpacity onPress={BikeFit}>
                    <Card.Title
                        title="BikeFit"
                        subtitle="Preço R$450,00"
                        left={(props) => <Avatar.Icon {...props} icon="bike-fast" />}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={Desempenar_Aros}>
                    <Card.Title
                        title="Desempenar Aros"
                        subtitle="Preço R$50,00"
                        left={(props) => <Avatar.Icon {...props} icon="tire" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Lubrificação_Completa}>
                    <Card.Title
                        title="Lubrificação Completa"
                        subtitle="Preço R$100,00"
                        left={(props) => <Avatar.Icon {...props} icon="oil" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Troca_de_Corrente}>
                    <Card.Title
                        title="Troca de Corrente"
                        subtitle="Preço R$40,00"
                        left={(props) => <Avatar.Icon {...props} icon="link-lock" />}
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
                    onFinishRating={ratingCompleted}
                    count={5}
                    reviews={["Péssimo", "Ruim", "Bom", "Ótimo", "Excelente"]}
                    reviewSize='25'
                    selectedColor='#6959CD'
                    reviewColor='#483D8B'
                    defaultRating={0}
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