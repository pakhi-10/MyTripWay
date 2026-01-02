import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAkxJTgrJ2WJENzaJmdchQxn673ZcCxA1U",
  authDomain: "mytripway-pakhi.firebaseapp.com",
  projectId: "mytripway-pakhi",
  storageBucket: "mytripway-pakhi.firebasestorage.app",
  messagingSenderId: "918020824258",
  appId: "1:918020824258:web:60d443f0069cafb45aef5b",
  measurementId: "G-ZL6XEJQK82",
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
