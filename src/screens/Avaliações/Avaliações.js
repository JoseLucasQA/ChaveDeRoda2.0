export default async function Agendamentos() {

    let query = await firebase.firestore().
        collection('schedules').
        where('userID', '==', idUser).
        where('status', '==', 'Em Aberto').
        get();

    let schedules = query.docs.map(doc => doc.data())

    console.log(schedules)

    return (
        'ok'
    )
}