// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjCVkj0IIZPTgIZQqjg0pbbhDE3sVuNzE',
  authDomain: 'movies-explorer-1fb59.firebaseapp.com',
  projectId: 'movies-explorer-1fb59',
  storageBucket: 'movies-explorer-1fb59.appspot.com',
  messagingSenderId: '670331929768',
  appId: '1:670331929768:web:7b4c31ca664c582241ee9d',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Export to initialize app
export const initFirebase = () => {
  return app
}
