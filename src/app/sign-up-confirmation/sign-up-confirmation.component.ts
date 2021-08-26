import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-confirmation',
  templateUrl: './sign-up-confirmation.component.html',
})
export class SignUpConfirmationComponent implements OnInit {
  confirmationText = 'Thanks for signing up!';
  constructor() { }

  ngOnInit(): void {
  }

}
