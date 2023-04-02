import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserServiceService) {}

  onSubmit(form: NgForm) {
    const formData = new FormData();

    formData.append('email', form.value.email);
    formData.append('password', form.value.password);

    this.userService.loginUser(formData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        // navigate to dashboard or desired route
        alert("Login success");
      },
      (error) => {
        console.log(error);
        // handle error message display
        alert("login failure");
      }
    );
  }
}
