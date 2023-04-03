import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.checkAuth();
  }
}
