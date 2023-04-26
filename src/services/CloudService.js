import { initializeApp } from 'firebase/app';

export class CloudService {
  constructor() {
    this._firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: 'greenshoop-b8d2e.firebaseapp.com',
      projectId: 'greenshoop-b8d2e',
      storageBucket: 'greenshoop-b8d2e.appspot.com',
      messagingSenderId: '357056156210',
      appId: '1:357056156210:web:a19748ed913484c785622b',
    };
    this.app = initializeApp(this._firebaseConfig);
  }
}
export const cloudService = new CloudService();
