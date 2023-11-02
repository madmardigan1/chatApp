import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreServService } from '../firestore-serv.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})

export class AnotherPageComponent implements OnInit, OnDestroy {
  items!: Observable<any[]>; // Make sure this is an Observable


  constructor(private firestoreServ: FirestoreServService) { }

  ngOnInit(): void {
    // No need to subscribe here if you are using the async pipe
    this.items = this.firestoreServ.setupDataListener();
  }

  ngOnDestroy(): void {
    // If you subscribed manually, you'd need to unsubscribe here
    // But since you are using the async pipe, Angular handles the subscription for you
  }

  onSubmit(data: any): void {
    this.firestoreServ.addData(data).catch((error) => {
      // Handle your errors here
      console.error(error);
    });
  }
}
