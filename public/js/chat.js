// {/* <script type="text/javascript"> */}
    var firebaseConfig = {
            apiKey: "AIzaSyCyRDa5x64fRqL0I-nMofQuo5VQFplCo5w",
            authDomain: "mga-ntf.firebaseapp.com",
            databaseURL: "https://mga-ntf-default-rtdb.firebaseio.com",
            projectId: "mga-ntf",
            storageBucket: "mga-ntf.appspot.com",
            messagingSenderId: "629738570772",
            appId: "1:629738570772:web:cd51c6e9f96793cfc4d301",
            measurementId: "G-H4SF2BWWR9"


        
		  
        };
        // Initialize Firebase
        //firebase.initializeApp(firebaseConfig);

        // Initialize Firebase with a "default" Firebase project
        const defaultProject = firebase.initializeApp(firebaseConfig);


        //console.log(defaultProject.name);  // "[DEFAULT]"

        // Option 1: Access Firebase services via the defaultProject variable

        let defaultFirestore = defaultProject.firestore();


        // Option 2: Access Firebase services using shorthand notation

        defaultFirestore = firebase.firestore();
// </script>