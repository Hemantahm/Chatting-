// Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyD7W2XZ-Xe2gozqGzO5Mp53Z8Ss2RDZ8Ns",
  authDomain:"chating-3d397.firebaseapp.com",
  projectId:"chating-3d397",
  storageBucket:"chating-3d397.firebasestorage.app",
  messagingSenderId:"678858996412",
  appId:"1:678858996412:web:7daf10debe6d286b8c2eb9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Logged in:", userCredential.user);
      window.location.href = "chat.html"; // Redirect to chat page
    })
    .catch((error) => {
      console.error("Error logging in:", error.message);
    });
}
