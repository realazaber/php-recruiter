import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/User';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User | null = JSON.parse(localStorage.getItem('currentUser') || 'null');

  constructor(private authService: AuthService, private userService: UserServiceService) {}

  ngOnInit() {
    this.authService.checkAuth();
  }

  logout() {
    this.authService.logOut();
  }
}
