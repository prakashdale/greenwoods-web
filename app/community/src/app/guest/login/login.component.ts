import { Component, OnInit } from '@angular/core';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInvalid = false;
  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
  }

  testLogin(): void {
    this.guestService.login('prakashdale@gmail.com', 'test')
      .subscribe((data) => {
        console.log(data);
      }, (err) => {
        console.log(err);
      });
  }

}
