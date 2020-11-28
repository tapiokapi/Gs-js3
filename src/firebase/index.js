// データベース参照用のインスタンス？の作成
// インスタンス：設計図を元にして実際に作ったもの
// このファイルをimportすれば、どこのファイルからでもデータベースへのアクセスを可能になる。
import firebase from 'firebase';
import { firebaseConfig } from './config.js';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database()