import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { SignUp } from '../models/sign-up';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailValidator } from '../validation/email.validator';
import { PasswordValidator } from '../validation/password.validator';
import { MatchValidator} from '../validation/match.validator';
import { DemoApiService} from '../service/demo-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent extends BaseFormComponent implements OnInit {

  constructor(
    private demoApiService: DemoApiService,
    private router: Router
  ) {
    super();
   }
  submitted = false ;
  model = new SignUp();
  title = 'Registration';
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      firstName: new FormControl(this.model.firstName,[Validators.required]),
      lastName: new FormControl(this.model.lastName,[Validators.required]),
      email: new FormControl(this.model.email,[Validators.required,EmailValidator.email]),
      password: new FormControl(this.model.password,[Validators.required, PasswordValidator.strong, PasswordValidator.caps, PasswordValidator.small, PasswordValidator.digit, PasswordValidator.special, PasswordValidator.len12]),
      passwordConfirm : new FormControl(this.model.passwordConfirm,[Validators.required, MatchValidator.match('password')]),
    });
  }

  onSubmit() { 
    this.demoApiService.updateSignUp(this.form.value)
      .subscribe(
        response => {
          let test = response;
          this.router.navigateByUrl('/sign-up-confirmation');
        },
        error => {
          this.router.navigateByUrl('/error');
        });
  }
}
