import * as React from 'react';
import { DataTable } from 'react-native-paper';
import firebase from "firebase";
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default async function Agendamentos() {

    const idUser = firebase.auth().currentUser.uid;
    const [service, setService] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [price, setPrice] = useState('');

    let query = await firebase.firestore().
        collection('schedules').
        where('userID', '==', idUser).
        where('status', '==', 'Em Aberto').
        get();

    let schedules = query.docs.map(doc => doc.data())

    console.log(schedules)
    const numberOfItemsPerPageList = [2, 3, 4];
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
    const from = page * numberOfItemsPerPage;
    const to = Math.min((page + 1) * numberOfItemsPerPage, schedules.length);

    React.useEffect(() => {
        setPage(0);
    }, [numberOfItemsPerPage]);

    React.useEffect(() => {
        setPage(0);
    }, [numberOfItemsPerPage]);



    return (
        <ScrollView>

            <DataTable>
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(schedules.length / numberOfItemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${schedules.length}`}
                    showFastPaginationControls
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={numberOfItemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>



        </ScrollView>

    )

}