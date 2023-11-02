import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Firestore, collection, addDoc } from "@angular/fire/firestore";
import { getDatabase, ref, set, onValue, off } from "firebase/database";
import { Observable } from 'rxjs';
import { Userdata } from './userdata';
@Injectable({
  providedIn: 'root'
})
export class FirestoreServService {
  private usersSubject = new BehaviorSubject<any[]>([]);

  constructor(private firestore: Firestore) { }

  getUsers(): Observable<any[]> {
    return this.usersSubject.asObservable();
  }

  async addUser(data: any): Promise<void> {
    try {
      const collectionRef = collection(this.firestore, 'users');
      await addDoc(collectionRef, data);
    } catch (error) {
      // Handle errors here, such as logging or notifying the user
    }
  }

  async addData(data: any): Promise<void> {
    try {
      const db = getDatabase();
      await set(ref(db, 'users/' + data.message), {
        message: data.message
      });
    } catch (error) {
      // Handle errors here
      throw error; // Re-throw the error so it can be caught by the caller
    }
  }

  setupDataListener(): Observable<any[]> {
    const db = getDatabase();
    const usersRef = ref(db, 'users/');

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const usersArray = this.transformDataToArray(data);
      this.usersSubject.next(usersArray);
    }, (error) => {
      console.error(error);
      this.usersSubject.error(error);
    });

    return this.usersSubject.asObservable();
  }

  tearDownDataListener(): void {
    const db = getDatabase();
    const usersRef = ref(db, 'users/');
    off(usersRef);
  }

  private transformDataToArray(data: Userdata): any[] {
    return data ? Object.keys(data).map(key => ({ key, ...data[key] })) : [];
  }
}