import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  currentUser: User | null = null;


  constructor(private authService: AuthService, private userService: UserServiceService, private router: Router) {}

  onSubmit(form: NgForm) {
    const formData = new FormData();

    formData.append('email', form.value.email);
    formData.append('password', form.value.password);

    this.authService.loginUser(formData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user_id', response.user.id);
        this.userService.loadUser(response.user.id).subscribe(
          (user: User) => {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
          },
          (error) => {
            console.error(error);
          })

        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
        // handle error message display
        alert("login failure");
      }
    );
  }
}
