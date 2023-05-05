import { initializeApp } from 'firebase/app';

export class CloudService {
  constructor() {
    this._firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: 'greenshoop-2530d.firebaseapp.com',
      projectId: 'greenshoop-2530d',
      storageBucket: 'greenshoop-2530d.appspot.com',
      messagingSenderId: '632795778560',
      appId: '1:632795778560:web:4be9bd58fecd94d85892e5',
    };
    this.app = initializeApp(this._firebaseConfig);
  }
}
export const cloudService = new CloudService();
