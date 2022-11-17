import * as React from 'react';
import { Avatar, Card, TextInput, FAB, Text } from 'react-native-paper';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from "firebase";
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from "moment";
import { AirbnbRating } from 'react-native-ratings';

export default function Motos({ navigation }) {

    // serviços 
    const Troca_De_Amortecedor = () => {
        navigation.navigate('Troca_De_Amortecedor')
    }

    function Troca_De_Escapamento() {
        navigation.navigate('Troca_De_Escapamento')
    }

    function Troca_De_Pneus() {
        navigation.navigate('Troca_De_Pneus')
    }

    function Troca_Disco_De_Freio() {
        navigation.navigate('Troca_Disco_De_Freio')
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
                    vehicle: 'bikes',
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

                <TouchableOpacity onPress={Troca_De_Amortecedor}>
                    <Card.Title
                        title="Troca de Amortecedores"
                        subtitle="Preço R$700,00"
                        left={(props) => <Avatar.Icon {...props} icon="motorbike-electric" />}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={Troca_De_Escapamento}>
                    <Card.Title
                        title="Troca de Escapamento"
                        subtitle="Preço R$320,00"
                        left={(props) => <Avatar.Icon {...props} icon="motorbike" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Troca_De_Pneus}>
                    <Card.Title
                        title="Troca de Pneus"
                        subtitle="Preço R$200,00"
                        left={(props) => <Avatar.Icon {...props} icon="tire" />}
                        onPress={() => { }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Troca_Disco_De_Freio}>
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