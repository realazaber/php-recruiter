import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService: UserServiceService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.createUser(form.value).subscribe(
        response => {
          alert('Account created successfully!');
          console.log(response);
          this.router.navigate(['/login']);

        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
