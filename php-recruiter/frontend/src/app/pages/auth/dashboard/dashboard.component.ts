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

  currentUser: User | null = null;
  currentUserId: number | null = 0;

  constructor(private authService: AuthService, private userService: UserServiceService) {}

  ngOnInit() {
    this.authService.checkAuth();
    if (localStorage.getItem('currentUser') != null) {
      this.currentUserId = parseInt(localStorage.getItem('user_id') || '0');
      this.userService.loadUser(this.currentUserId).subscribe(
      (user: User) => {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
      },
      (error) => {
        console.error(error);
      }
    );
    }
  }

  logout() {
    this.authService.logOut();
  }
}
