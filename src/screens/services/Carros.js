import React, { useState } from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../../firebase/config';

export default function Carros({ navigation }) {

    function scheduleService() {
        navigation.navigate('schedules')
    }

    return (
        <View>
            <TouchableOpacity>
                <Card.Title
                    title="Lavagem Simples"
                    subtitle="Preço R$50,00"
                    left={(props) => <Avatar.Icon {...props} icon="car-wash" />}
                    onPress={() => { }} />
            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({

});