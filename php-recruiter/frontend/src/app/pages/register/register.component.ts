import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  jobSeeker = true; // make job seeker radio button selected by default

  onSubmit(form: NgForm) {
    if (form.valid && form.value.password === form.value.confirmPassword) {
      // form is valid and passwords match, submit data to server here

    }
  }

}
