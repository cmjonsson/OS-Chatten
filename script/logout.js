(function() {
    let config = {
        apiKey: "AIzaSyABUth1guGRkzmnthGwkExc9ElQ4r3xTSM",
        authDomain: "os-chatt.firebaseapp.com",
        databaseURL: "https://os-chatt.firebaseio.com",
        projectId: "os-chatt",
        storageBucket: "os-chatt.appspot.com",
        messagingSenderId: "885393355147"
    };
    firebase.initializeApp(config);

const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
});
}());