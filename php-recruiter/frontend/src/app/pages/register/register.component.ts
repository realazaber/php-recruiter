import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService: UserServiceService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.createUser(form.value).subscribe(
        response => {
          alert('Account created successfully!');
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
