import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  currentUser: User = JSON.parse(localStorage.getItem('currentUser') || 'null');
  isRecruiter: Boolean = this.currentUser.is_recruiter;
  hasWebsite: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.checkAuth();
    if (this.currentUser.website != null) {
      this.hasWebsite = true;
    }
  }
}
