import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  loggedIn: boolean = false;
  isRecruiter: boolean = false;
  currentUser: User | null = JSON.parse(localStorage.getItem('currentUser') || 'null');

  constructor(private authService: AuthService) {

  }

  ngDoCheck() {
    this.loggedIn = localStorage.getItem('token') !== null;
    if (this.currentUser?.is_recruiter == true) {
      this.isRecruiter = true;
    }
    else {
      this.isRecruiter = false;
    }

  }

  logout() {
    this.authService.logOut();
  }
}



