import { initializeApp } from 'firebase/app';

export class CloudService {
  constructor() {
    this._firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: 'online-store-c4dca.firebaseapp.com',
      projectId: 'online-store-c4dca',
      storageBucket: 'online-store-c4dca.appspot.com',
      messagingSenderId: '1028866929928',
      appId: '1:1028866929928:web:70d46b06115bba2b8ce8bd',
    };
    this.app = initializeApp(this._firebaseConfig);
  }
}
export const cloudService = new CloudService();
