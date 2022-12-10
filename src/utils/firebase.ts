import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const firebaseInit = () => {
  const apiKey = import.meta.env.PUBLIC_FIREBASE_API_KEY;
  const messagingSenderId = import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
  const appId = import.meta.env.PUBLIC_FIREBASE_APP_ID;
  const measurementId = import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID;

  const firebaseConfig = {
    apiKey,
    authDomain: 'mattdunbar-io.firebaseapp.com',
    projectId: 'mattdunbar-io',
    storageBucket: 'mattdunbar-io.appspot.com',
    messagingSenderId,
    appId,
    measurementId,
  };

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
};
