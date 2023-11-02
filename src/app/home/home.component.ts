import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../fire-auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public fireAuthService: FireAuthService, ) { }
authState = false;
ngOnInit(): void {
  
  this.fireAuthService.getauth().subscribe(isAuthenticated => {
      this.authState = isAuthenticated;
  });
}
  authorize() {
    this.fireAuthService.authorize();
  }

  signOut() {
    this.fireAuthService.signOut();
    this.authState = false;
  }
}
