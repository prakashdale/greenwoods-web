import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForRegistration } from '../guest.models';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regiForm: FormGroup;
  saving = false;

  constructor(private guestService: GuestService, private router: Router) { }

  ngOnInit(): void {
    this.regiForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null)
    });
  }

  onSubmit(): void {
    this.saving = true;
    console.log(this.regiForm.value);
    const frm = this.regiForm.value;
    this.guestService.registerUser(new UserForRegistration(frm.firstName, frm.lastName, frm.email, frm.password))
      .subscribe((data) => {
        console.log(data);

        this.router.navigateByUrl('/guest/login');
      }, (err) => {
        console.log(err);
        this.regiForm.controls[`email`].setErrors(err.email);
      });
  }

}
