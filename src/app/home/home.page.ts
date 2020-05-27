import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private srvAuth: AuthService, private router: Router) {}

  onLogout() {
    console.log('Logout button clicked');
    this.srvAuth.logoutUser();
  }

}
