import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent {
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.checkAuth();
  }
}
